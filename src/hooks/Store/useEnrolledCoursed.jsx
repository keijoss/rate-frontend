import { create } from "zustand";
const useenrolledCourseds = create((set) => ({
  enrolledCoursed: [],
  setenrolledCoursed: (enrolledCoursed) => set({ enrolledCoursed }),
}));

export default useenrolledCourseds;
