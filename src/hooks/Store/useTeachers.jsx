import { create } from "zustand";
const useTeachers = create((set) => ({
  teacher: [],
  setTeacher: (teacher) => set({ teacher }),
}));

export default useTeachers;
