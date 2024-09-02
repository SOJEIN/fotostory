import { uploadBytesResumable, getDownloadURL, ref } from "firebase/storage";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { storage, db } from "../../../service/firebaseConfig";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const useUploadFiles = () => {
  const queryClient = useQueryClient();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "images"));
        const imageList = querySnapshot.docs.map((doc) => doc.data().url);
        setImages(imageList);
      } catch (error) {
        console.error("Error fetching images from Firestore:", error);
      }
    };

    fetchImages();
  }, []);

  const mutation = useMutation({
    mutationFn: async ({ event }) => {
      console.log("Mutation function started");
      console.log("Storage:", storage);
      console.log("Ref function:", ref);

      const file = event.target.files[0];
      if (!file) {
        throw new Error("No file selected");
      }

      console.log("File selected:", file);

      try {
        console.log("Storage object:", storage);

        const storageRef = ref(storage, `images/${file.name}`);
        console.log("Storage reference created:", storageRef);

        const uploadTask = uploadBytesResumable(storageRef, file);
        console.log("uploadTask", uploadTask);
        const urlFile = await getDownloadURL(uploadTask.snapshot.ref);

        console.log("File uploaded successfully, URL:", urlFile);

        await addDoc(collection(db, "images"), {
          url: urlFile,
          createdAt: new Date(),
        });

        setImages((prevImages) => [...prevImages, urlFile]);
        toast.success("Imagen subida y URL guardada en Firestore");
      } catch (error) {
        console.error("Error uploading file:", error);
        toast.error("Error al subir la imagen");
        throw error;
      }
    },
    onError: (error) => {
      console.error("Upload failed:", error);
      toast.error("Error durante la subida de la imagen.");
    },
  });

  return {
    images,
    uploadFile: mutation.mutate,
    isLoading: mutation.isLoading,
    error: mutation.error,
  };
};

export default useUploadFiles;
