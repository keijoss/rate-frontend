import NewsFeed from "@/components/home/NewsFeed";
import Profile from "@/components/home/Profile";
import RecentPost from "@/components/home/RecentPost";
import Subject from "@/components/home/Subject";
import TopNavigation from "@/components/navigation/TopNavigation";
import React from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  
  return (
    <div className="px-4 ">
        <TopNavigation />
      <div className="flex w-full justify-around gap-5 ">
        <div className={`fixed left-4  top-16 h-fit w-[25%] hidden  lg:flex gap-4 flex-col  `}>
          <Profile />
          <RecentPost />
        </div>
        <div className=" h-fit lg:w-[55%] lg:ml-[27.3%] w-full ">
          <NewsFeed />
        </div>
        <div className={`w-[20%] top-16 h-fit  hidden lg:inline`}>
          <Subject />
        </div>
      </div>
    </div>
  );
}
