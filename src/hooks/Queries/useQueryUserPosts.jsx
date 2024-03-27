import React, { useEffect } from "react";
import useUserPosts from "../Store/useUserPosts";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useUserInformation from "../Store/useUserInformation";

const useQueryUserPosts = () => {
  // /ratings/:id
  const setUserPosts = useUserPosts((state) => state.setPosts);
  const userInformation = useUserInformation((state) => state.information);
  const {data, refetch, isLoading, isRefetching} = useQuery({
    queryKey: [121321, "ratings"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          `http://localhost:3300/ratings/user/${userInformation.id}`,
          {
            headers: {
              authorization: `${localStorage.getItem("token")}`,
            },
          } 
        );

        const data = await response.data;
        setUserPosts(data);

        return data;
      } catch (error) {
        console.log("WHAT TO DO WITH THIS ERROR?");
        console.error(error);
      }

      return "ee";
    },
  });
   
  return {
    data,
    refetch,
    isLoading,
    isRefetching,
  }
};

export default useQueryUserPosts;
