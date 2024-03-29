import useQueryUserPosts from "@/hooks/Queries/useQueryUserPosts";
import useUserPosts from "@/hooks/Store/useUserPosts";
import React from "react";

export default function RecentPost() {
  const { isLoading } = useQueryUserPosts();
  const posts = useUserPosts((state) => state.posts);

  return (
    <div className="space-y-2">
      <p className="text-white font-bold">Most Recent Post</p>
      <div className="bg-[#1B2730] rounded-lg flex flex-col  p-5 ">
        <div className="text-white flex flex-col gap-5 text-xs ">
          {posts?.length === 0 || posts === null || isLoading ? (
            <div className="text-center">No post yet</div>
          ) : (
            <>
              <div className="flex w-full justify-evenly text-[0.6rem]">
                <div className="flex gap-1">
                  <p className="text-[#6B7176] font-bold">Teacher:</p>
                  <p>{posts[0]?.teacherName}</p>
                </div>
                <div className="flex gap-1">
                  <p className="text-[#6B7176] font-bold">Subject:</p>
                  <p>{posts[0]?.subjectName}</p>
                </div>
              </div>
              <div className="w-full">{posts[0]?.comment}</div>
              <div className="flex w-full justify-center gap-5">
                <div className="flex gap-1">
                  <div>Icon</div>
                  <div>{posts[0]?.likes}</div>
                </div>
                <div className="flex gap-1">
                  <div>Icon</div>
                  <div>{posts[0]?.dislikes}</div>
                </div>
              </div>
              <div className="text-center text-[#6B7176] text-xs">
                {posts[0]?.date?.split("T")[0]?.replace(/-/g, "/")}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
