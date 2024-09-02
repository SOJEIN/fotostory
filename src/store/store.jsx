import { create } from "zustand";

const useGlobalStore = create((set) => ({
  auth: null,
  image: [],
  setUser: (user) => set({ auth: user }),
  setImage: (img) => set({ image: img }),
}));

export default useGlobalStore;
