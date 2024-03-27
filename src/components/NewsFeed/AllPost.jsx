import React from "react";
import Rating from "react-rating";
import starcolored from "@/assets/starcolored.svg";
import starempty from "@/assets/starempty.svg";
import anonymouse1 from "@/assets/anonymouseIcons/anonymouse1.svg";

function AllPost({ 
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


  return (
    <div className=" flex w-full p-3 bg-[#1B2730] rounded-lg text-white gap-3 px-9 py-5 text-xs">
      <div>
        <img
          src={anonymouse1}
          alt=""
          className="bg-white rounded-full w-8 h-7 object-cover"
        />
      </div>
      <div className="w-full">
        <div className="flex gap-5 items-center justify">
          <p>{studentName}</p>
          <p className="text-transparent bg-red-500 w-1 h-1 rounded-full"> .</p>
          <p className="text-center text-[#6B7176] text-xs">
            {date?.split("T")[0].replace(/-/g, "/")}
          </p>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center pt-4">
          <div className="flex gap-4">
            <div className="flex gap-3">
              <p className="font-semibold text-[#6B7176]"> Teacher</p>
              <p>{teacherName}</p>
            </div>
            <div className="flex gap-3">
              <p className="font-semibold text-[#6B7176]"> Subject</p>
              <p>{subjectName}</p>
            </div>
          </div>
          <div>{comment}</div>
          <div className="flex flex-col items-end w-full   space-y-3">
            <div className="flex text-xs justify-between  w-full text-white font-normal flex-wrap gap-3">
              <div className="flex flex-col justify-center items-center ">
                <p>Teaching Method</p>
                <Rating
                  className=""
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
                  placeholderSymbol={<img src={starcolored} alt="colored" />}
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
          <div className="w-full flex gap-2 justify-center  opacity-50 cursor-not-allowed">
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
