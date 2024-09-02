import { useMutation } from "@tanstack/react-query";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../../service/firebaseConfig";
import useGlobalStore from "../../../store/store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const setUser = useGlobalStore((state) => state.setUser);
  const navigate = useNavigate();

  const signInMutation = useMutation({
    mutationFn: async ({ email, password }) => {
      try {
        const DataUser = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        setUser(DataUser.user);
        toast.success("Sesión iniciada correctamente");
        navigate("/galeria");
      } catch (error) {
        handleAuthError(error);
      }
    },
  });

  const signInWithGoogleMutation = useMutation({
    mutationFn: async () => {
      const provider = new GoogleAuthProvider();
      try {
        const result = await signInWithPopup(auth, provider);
        setUser(result.user);
        toast.success("Sesión iniciada con Google correctamente");
        navigate("/galeria");
      } catch (error) {
        handleAuthError(error);
      }
    },
  });

  const handleAuthError = (error) => {
    if (error.code === "auth/wrong-password") {
      toast.error("Contraseña incorrecta, por favor verifica.");
    } else if (error.code === "auth/user-not-found") {
      toast.error("Usuario no encontrado, verifica el correo electrónico.");
    } else if (error.code === "auth/invalid-email") {
      toast.error("Correo electrónico no válido.");
    } else {
      toast.error("Error al iniciar sesión. Inténtalo de nuevo.");
    }
    console.error("Error de inicio de sesión:", error.message);
  };

  return {
    signIn: signInMutation.mutate,
    signInWithGoogle: signInWithGoogleMutation.mutate,
    isLoading: signInMutation.isLoading || signInWithGoogleMutation.isLoading,
    error: signInMutation.error || signInWithGoogleMutation.error,
  };
};

export default useLogin;
