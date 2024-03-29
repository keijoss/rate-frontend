import React from "react";
import Rating from "react-rating";
import starcolored from "@/assets/starcolored.svg";
import starempty from "@/assets/starempty.svg";
import anonymouse1 from "@/assets/anonymouseIcons/anonymouse1.svg";
import { useLocation } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import useQueryUserPosts from "@/hooks/Queries/useQueryUserPosts";

function AllPost({
  deleted,
  approval, 
attitude,
comment,
communication,
date,
dislikes,
engagement,
likes,
organization,
rating_id,
studentName,
subjectName,
supportiveness,
teacherName,
teaching_method
 }) {

const pathurl = useLocation().pathname.split("/")[2];
const {refetch} = useQueryUserPosts()
  return (
    <div
      className={` flex w-full p-3 bg-[#1B2730] rounded-lg text-white gap-3 px-9 py-5 text-xs ${
        !studentName || !teacherName || !subjectName || !comment
          ? "animate-pulse"
          : ""
      }`}
    >
      <div>
        {studentName !== null ? (
          <div className="bg-white rounded-full w-8 h-8 object-cover flex items-center justify-center">
            <span className="text-[#1B2730] text-2xs font-bold">
              {studentName.charAt(0).toUpperCase() +
                studentName.charAt(studentName.length - 1).toUpperCase()}
            </span>
          </div>
        ) : (
          <div className="bg-[#6B7176] rounded-full w-8 h-8 object-cover flex items-center justify-center"></div>
        )}
      </div>
      <div className="w-full ">
        <div className="flex gap-5 items-center justify w-full">
          <p>{studentName}</p>
          <p className="text-transparent bg-red-500 w-1 h-1 rounded-full"> .</p>
          <span className="text-center text-[#6B7176] text-xs">
            {date?.split("T")[0].replace(/-/g, "/") || (
              <div className="h-2 w-20 rounded bg-[#6B7176] opacity-3"> </div>
            )}
          </span>
          <span>
            {deleted ? (
              <span className="text-[#6B7176]">Hidden</span>
            ) : (
              <span className="text-[#6B7176]">Public</span>
            )}
          </span>
          <span>
            {approval ? (
              <span className="text-[#6B7176]">Approved</span>
            ) : (
              <span className="text-[#6B7176]">Pending</span>
            )}
          </span>
          <div className="  w-full flex justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex gap-1 h-full justify-center items-center">
                <span className="text-transparent bg-red-500 w-1 h-1 rounded-full">
                  {" "}
                  .
                </span>
                <span className="text-transparent bg-red-500 w-1 h-1 rounded-full">
                  {" "}
                  .
                </span>
                <span className="text-transparent bg-red-500 w-1 h-1 rounded-full">
                  {" "}
                  .
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#10232f] text-white w-44 mr-14 p-4 border-[0.3px]">
                <DropdownMenuSeparator />
                <button className="w-full" onClick={() => {}}>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                </button>{" "}
                <button
                  className="w-full"
                  onClick={() => {
                    const changdata = async () => {
                      try {
                        // console.log(deleted)
                        const res = await axios.delete(
                          `https://ratemyteacher.onrender.com/ratings/${rating_id}`,
                          {
                            headers: {
                              "Content-Type": "application/json",
                              authorization: `${localStorage.getItem("token")}`,
                            },
                            data: {
                              deleted: deleted === 1 ? 0 : 1,
                            },
                          }
                        );
                        // console.log(res);
                        refetch()
                      } catch (error) {
                        // console.log(error);
                      }
                    };
                    changdata();
                  }}
                >
                  <DropdownMenuItem>
                    {!deleted ? "Hide" : "Show"}
                  </DropdownMenuItem>
                </button>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center pt-4">
          <div className="flex gap-4">
            <div className="flex gap-3">
              <p className="font-semibold text-[#6B7176]"> Teacher</p>
              <span>
                {teacherName || (
                  <div className="h-2 w-20 rounded bg-[#6B7176] opacity-3">
                    {" "}
                  </div>
                )}
              </span>
            </div>
            <div className="flex gap-3">
              <p className="font-semibold text-[#6B7176]"> Subject</p>
              <span>
                {subjectName || (
                  <div className="h-2 w-20 rounded bg-[#6B7176] opacity-3">
                    {" "}
                  </div>
                )}
              </span>
            </div>
          </div>
          <div className="">
            {comment || (
              <div className="flex gap-5 flex-wrap w-full justify-center">
                <div className="h-2 w-56 rounded bg-[#6B7176] opacity-3"> </div>
                <div className="h-2 w-44 rounded bg-[#6B7176] opacity-3"> </div>
              </div>
            )}
          </div>
          <div className="flex flex-col items-end w-full   space-y-3">
            <div className="flex text-xs justify-between w-full text-white font-normal flex-wrap gap-3">
              <div className="flex flex-col justify-center items-center ">
                <p>Teaching Method</p>
                <Rating
                  emptySymbol={<img src={starempty} alt="empty" />}
                  placeholderSymbol={<img src={starcolored} alt="colored" />}
                  fullSymbol={<img src={starcolored} alt="colored" />}
                  readonly
                  placeholderRating={teaching_method}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <p>Communication</p>
                <Rating
                  emptySymbol={<img src={starempty} alt="empty" />}
                  placeholderSymbol={<img src={starcolored} alt="colored" />}
                  fullSymbol={<img src={starcolored} alt="colored" />}
                  placeholderRating={communication}
                  readonly
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <p>Supportiveness</p>
                <Rating
                  readonly
                  emptySymbol={<img src={starempty} alt="empty" />}
                  placeholderSymbol={
                    <img
                      src={
                        starcolored || (
                          <div className="h-2 w-20 rounded bg-[#6B7176] opacity-3">
                            {" "}
                          </div>
                        )
                      }
                      alt="colored"
                    />
                  }
                  fullSymbol={<img src={starcolored} alt="colored" />}
                  placeholderRating={supportiveness}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <p>Organization</p>
                <Rating
                  readonly
                  emptySymbol={<img src={starempty} alt="empty" />}
                  placeholderSymbol={<img src={starcolored} alt="colored" />}
                  fullSymbol={<img src={starcolored} alt="colored" />}
                  placeholderRating={organization}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <p>Engagement</p>
                <Rating
                  readonly
                  emptySymbol={<img src={starempty} alt="empty" />}
                  placeholderSymbol={<img src={starcolored} alt="colored" />}
                  fullSymbol={<img src={starcolored} alt="colored" />}
                  placeholderRating={engagement}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <p>Attitude</p>
                <Rating
                  readonly
                  emptySymbol={<img src={starempty} alt="empty" />}
                  placeholderSymbol={<img src={starcolored} alt="colored" />}
                  fullSymbol={<img src={starcolored} alt="colored" />}
                  placeholderRating={attitude}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex gap-2 justify-center   cursor-not-allowed">
            <div className="flex gap-1">
              <p>Like</p>
              <p>{likes}</p>
            </div>
            <div className="flex gap-1">
              <p>dislike</p>
              <p>{dislikes}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllPost;
