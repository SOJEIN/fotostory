import { collection, query, where, onSnapshot } from "firebase/firestore";
import { setImage } from "../../../store/store";

const getFiles = () => {
  const q = query(collection(db, "images"));
  const unsubscribe = onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
        console.log("New city: ", change.doc.data());
      }
      if (change.type === "modified") {
        console.log("Modified city: ", change.doc.data());
      }
      if (change.type === "removed") {
        console.log("Removed city: ", change.doc.data());
      }
    });
  });

  return {
    images,
    uploadFile: mutation.mutate,
    isLoading: mutation.isLoading,
    error: mutation.error,
  };
};

export default getFiles;
