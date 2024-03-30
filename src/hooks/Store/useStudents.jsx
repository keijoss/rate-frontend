import { create } from "zustand";
const usestudentss = create((set) => ({
  students: [],
  setstudents: (students) => set({ students }),
}));

export default usestudentss;
