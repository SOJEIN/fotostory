import { useMutation } from "@tanstack/react-query";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../service/firebaseConfig";
import useGlobalStore from "../../../store/store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
  const setUser = useGlobalStore((state) => state.setUser);
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async ({ email, password }) => {
      try {
        const DataUser = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        toast.success("Registro iniciada");
        setUser(DataUser.user);
        navigate("/home");
      } catch (error) {
        toast.error("Registro erronea, Verfique los datos");
        console.log(error);
      }
    },
  });

  return {
    signUp: mutation.mutate,
    isLoading: mutation.isLoading,
    error: mutation.error,
  };
};
export default useRegister;
