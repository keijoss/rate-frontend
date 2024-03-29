import React from "react";
import Post from "../NewsFeed/Post";
import AllPost from "../NewsFeed/AllPost";
import useQueryAllPosts from "@/hooks/Queries/useQueryAllPosts";
import useAllPosts from "@/hooks/Store/useAllPosts";
import { useLocation } from "react-router-dom";

export default function NewsFeed({ allPosts }) {
  const { isLoading } = useQueryAllPosts();
  const location = useLocation();

  const palllll = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="mt-5">
      <span
        className={
          location.pathname.split("/")[2] !== "home" ? "hidden" : "inline"
        }
      >
        <Post />
        <hr className=" border-[#1B2730] my-4 " />
      </span>
      <div className="space-y-3">
        {isLoading
          ? palllll?.map((post, index) => (
              <div key={index}>
                <div
                  className={` flex w-full p-3 bg-[#1B2730] rounded-lg text-white gap-3 px-9 py-5 text-xs
                ? "animate-pulse"
             `}
                >
                  <div>
                    <div className="bg-[#6B7176] rounded-full w-8 h-8 object-cover flex items-center justify-center"></div>
                  </div>
                  <div className="w-full ">
                    <div className="flex gap-5 items-center justify">
                      {/* <p>{studentName}</p> */}
                      <p className="text-transparent bg-[#6B7176] w-1 h-1 rounded-full">
                        {" "}
                        .
                      </p>
                      <div className="text-center text-[#6B7176] text-xs">
                        <div className="h-2 w-20 rounded bg-[#6B7176] opacity-3">
                          {" "}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-5 justify-center items-center pt-4">
                      <div className="flex gap-4">
                        <div className="flex gap-3">
                          <p className="font-semibold text-[#6B7176]">
                            {" "}
                            Teacher
                          </p>
                          <div>
                            <div className="h-2 w-20 rounded bg-[#6B7176] opacity-3">
                              {" "}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <p className="font-semibold text-[#6B7176]">
                            {" "}
                            Subject
                          </p>
                          <div>
                            {/* {subjectName || ( */}
                            <div className="h-2 w-20 rounded bg-[#6B7176] opacity-3">
                              {" "}
                            </div>
                            {/* )} */}
                          </div>
                        </div>
                      </div>
                      <div className="">
                        {/* {comment || ( */}
                        <div className="flex gap-5 flex-wrap w-full justify-center">
                          <div className="h-2 w-56 rounded bg-[#6B7176] opacity-3">
                            {" "}
                          </div>
                          <div className="h-2 w-44 rounded bg-[#6B7176] opacity-3">
                            {" "}
                          </div>
                        </div>
                        {/* )} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : allPosts?.map((post, index) => {
              return (
                <AllPost
                  key={index}
                  deleted={post.deleted}
                  approval={post.approved}
                  attitude={post.attitude}
                  comment={post.comment}
                  communication={post.communication}
                  date={post.date}
                  dislikes={post.dislikes}
                  engagement={post.engagement}
                  likes={post.engagement}
                  organization={post.organization}
                  rating_id={post.rating_id}
                  studentName={post.studentName}
                  subjectName={post.subjectName}
                  supportiveness={post.supportiveness}
                  teacherName={post.teacherName}
                  teaching_method={post.teaching_method}
                />
              );
            })}
      </div>
    </div>
  );
}
