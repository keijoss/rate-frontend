import { create } from "zustand";
const useSubjectTeacher = create((set) => ({
  subjectTeacher: [],
  setsubjectTeacher: (subjectTeacher) => set({ subjectTeacher }),
}));

export default useSubjectTeacher;
