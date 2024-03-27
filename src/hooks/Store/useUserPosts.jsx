import { create } from "zustand";
const  useUserPosts = create((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
}));

export default useUserPosts;