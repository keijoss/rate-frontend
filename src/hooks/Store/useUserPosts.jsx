import { create } from "zustand";
const useUserPosts = create((set) => ({
  posts: null,
  setPosts: (posts) => set({ posts }),
}));

export default useUserPosts;