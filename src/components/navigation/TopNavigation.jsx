import useAllPosts from "@/hooks/Store/useAllPosts";
import useUserInformation from "@/hooks/Store/useUserInformation";
import useUserPosts from "@/hooks/Store/useUserPosts";
import useUserSubjects from "@/hooks/Store/useUserSubjects";
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function TopNavigation() {
  const url = window.location.href;
  const [urlState, setUrlState] = React.useState(url);
  const navigation = useLocation();
  const setuserInfromation = useUserInformation((state) => state.setinformation);
  const setallposts = useAllPosts((state) => state.setallPosts);
  const setUserPost = useUserPosts((state) => state.setPosts);
  const setsubject = useUserSubjects((state) => state.setSubjects);
  const navigate = useNavigate();
  useEffect(() => {
    setUrlState(navigation.pathname.split("/")[2]);
  }, [navigation]);
  return (
    <div className="sticky top-0  h-16 z-5 bg-[#06141D] flex justify-center items-center flex-wrap lg:flex-nowrap ">
      <div className=" justify-items-start hidden lg:inline-block">
        <Link className="font-bold text-2xl text-white flex ">
          Ra <span className="text-[#8287FE]">Te</span>
        </Link>
      </div>
      <div className="w-full  bg-[#06141D] flex gap-7 lg:justify-start justify-center lg:pl-[20.3%]  font-semibold lg:flex-nowrap flex-wrap">
        <Link
          to={"home"}
          className={ ` ${
            urlState === "home" ? "text-[#8287FE]" : "text-white"
          } `}
        >
          Home
        </Link>
        <Link
          to={"post"}
          
          className={ ` ${
            navigation.pathname.split("/")[2] === "post"
              ? "text-[#8287FE]"
              : "text-white"
          } `}
        >
          Post
        </Link>
        <button
        disabled={true}
          className={ ` ${
            navigation.pathname.split("/")[2] === "subject"
              ? "text-[#8287FE]"
              : "text-white"
          } `}
        >
          Subject
        </button>
        <button
          to={"Teacher"}
          className={ ` ${
            navigation.pathname.split("/")[2] === "teacher"
              ? "text-[#8287FE]"
              : "text-white"
          } `}
        >
          Teacher
        </button>
        <button
          to={"like"}
          className={ ` ${
            navigation.pathname.split("/")[2] === "like"
              ? "text-[#8287FE]"
              : "text-white"
          } `}
        >
          Like
        </button>
        <button
          to={"dislike"}
          className={ ` ${
            navigation.pathname.split("/")[2] === "dislike"
              ? "text-[#8287FE]"
              : "text-white"
          } `}
        >
          Dislike
        </button>
        <Link
          to={"adminHolds"}
          className={ ` ${
            navigation.pathname.split("/")[2] === "dislike"
              ? "text-[#8287FE]"
              : "text-white"
          } `}
        >
          Admin Manage
        </Link>
      </div>
      <div>
        <button
          className="text-white pr-3 hover:text-[#8287FE] justify-items-end"
          onClick={() => {
            localStorage.removeItem("token");
            setuserInfromation(null);
            setallposts(null);
            setUserPost(null);
            setsubject(null);
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
