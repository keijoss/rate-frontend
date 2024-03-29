import { create } from "zustand";
const useAllSubjec = create((set) => ({
  subjects: [],
  setSubjects: (subjects) => set({ subjects }),
}));

export default useAllSubjec;
