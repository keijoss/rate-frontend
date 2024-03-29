import { create } from "zustand";
const useAllPosts = create((set) => ({
  allposts: [],
  setallPosts: (allposts) => {
    set({allposts})

  },
}));

export default useAllPosts;
