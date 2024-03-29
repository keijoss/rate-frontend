import { create } from "zustand";
const useUserInformation = create((set) => ({
  information: null,
  setinformation: (information) => set({ information }),
}));

export default useUserInformation;