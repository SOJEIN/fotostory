import { create } from "zustand";
import { auth } from "../service/firebaseConfig";

const useGlobalStore = create((set) => ({
  auth: null,
  setUser: (user) => set({ auth: user }),
}));

export default useGlobalStore;
