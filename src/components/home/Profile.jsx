import React from "react";
import anonymouse1 from "@/assets/anonymouseIcons/anonymouse1.svg";
import useUserInformation from "@/hooks/Store/useUserInformation";
import useUserSubjects from "@/hooks/Store/useUserSubjects";
import useUserPosts from "@/hooks/Store/useUserPosts";
export default function Profile() {
  const information = useUserInformation((state) => state.information);
  const subjects = useUserSubjects((state) => state.subjects);
  const userPosts = useUserPosts((state) => state.posts);
  return (
    <div className="w-full bg-[#1B2730] flex flex-col items-center gap-3 rounded-lg p-4 px-10 ">
      <div>
        {information?.name != null ? (
          <div className="bg-white rounded-full w-20 h-20 object-cover flex items-center justify-center">
            <p className="text-[#1B2730] text-lg font-bold">
              {information?.name.charAt(0).toUpperCase() +
                information?.name
                  .charAt(information?.name.length - 1)
                  .toUpperCase()}
            </p>
          </div>
        ) : (
          <div className="h-8 w-8 rounded bg-[#6B7176] opacity-3"></div>
        )}
      </div>
      <div className=" flex flex-col items-center">
        <p className="text-white font-semibold">{information?.name}</p>
        <p className="text-[#D7D7D7] text-xs">{information?.id}</p>
      </div>
      <div>
        <p className="text-[#9E9E9E]  text-xs">joins on 1/23/2024</p>
      </div>
      <div className="text-white  text-xs ">Bio to be added soon</div>
      <div className="flex justify-evenly gap-4">
        <div className="flex flex-col items-center">
          <p className="text-[#6B7176] font-semibold text-xs">Subjects</p>
          <p className="text-white text-sm ">{subjects?.length}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[#6B7176] font-semibold text-xs">Rates</p>
          <p className="text-white text-sm">{userPosts?.length}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[#6B7176] font-semibold text-xs">Likes</p>
          <p className="text-white text-sm">12k</p>
        </div>
      </div>
    </div>
  );
}
