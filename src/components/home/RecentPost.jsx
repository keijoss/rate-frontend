import useQueryUserPosts from "@/hooks/Queries/useQueryUserPosts";
import useUserPosts from "@/hooks/Store/useUserPosts";
import React from "react";

export default function RecentPost() {
  const queryPost = useQueryUserPosts();
  const posts = useUserPosts((state) => state.posts);
  const post = posts[posts.length-1]
  return (
    <div className="space-y-2">
      <p className="text-white font-bold">Most Recent Post</p>
      <div className="bg-[#1B2730] rounded-lg flex flex-col  p-5 ">
        <div className="text-white flex flex-col gap-5 text-xs ">
          {posts.length === 0 ? (
            <div className="text-center">No post yet</div>
          ) : (
            <>
              <div className="flex w-full justify-evenly text-[0.6rem]">
                <div className="flex gap-1">
                  <p className="text-[#6B7176] font-bold">Teacher:</p>
                  <p>{post?.teacherName}</p>
                </div>
                <div className="flex gap-1">
                  <p className="text-[#6B7176] font-bold">Subject:</p>
                  <p>{post?.subjectName}</p>
                </div>
              </div>
              <div className="w-full">{post?.comment}</div>
              <div className="flex w-full justify-center gap-5">
                <div className="flex gap-1">
                  <div>Icon</div>
                  <div>{post?.likes}</div>
                </div>
                <div className="flex gap-1">
                  <div>Icon</div>
                  <div>{post?.dislikes}</div>
                </div>
              </div>
              <div className="text-center text-[#6B7176] text-xs">
                 {(post?.date).split("T")[0].replace(/-/g, "/")} 
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
