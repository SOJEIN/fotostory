import { uploadBytes, getDownloadURL, ref } from "firebase/storage";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { storage, db } from "../../../service/firebaseConfig";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

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
      const file = event.target.files[0];
      if (!file) {
        throw new Error("Seleccione un archivo");
      }
      try {
        const ui = uuidv4();
        const storageRef = ref(storage, `images/${ui + "_" + file.name}`);
        const uploadTask = await uploadBytes(storageRef, file);
        const urlFile = await getDownloadURL(storageRef);
        await addDoc(collection(db, "images"), {
          url: urlFile,
          createdAt: new Date(),
        });
        setImages((prevImages) => [...prevImages, urlFile]);
        toast.success("Imagen subida y URL guardada en Firestore");
      } catch (error) {
        toast.error("Error al subir la imagen");
        throw error;
      }
    },
    onError: (error) => {
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
