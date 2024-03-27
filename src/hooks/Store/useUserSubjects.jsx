import { create } from "zustand";
const useUserSubjects = create((set) => ({
  subjects: [],
  setSubjects: (subjects) => set({ subjects }),
}));

export default useUserSubjects;
