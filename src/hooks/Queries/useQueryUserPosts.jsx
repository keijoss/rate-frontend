import useUserPosts from "../Store/useUserPosts";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useUserInformation from "../Store/useUserInformation";

const useQueryUserPosts = () => {
  // /ratings/:id
  const setUserPosts = useUserPosts((state) => state.setPosts);
  const userInformation = useUserInformation((state) => state.information);
  const { data, refetch, isLoading, isRefetching } = useQuery({
    queryKey: [2222222222, "ratings"],
    queryFn: async () => {
      
      try {
        // console.log("fetching data user ratings");
        const response = await axios.get(
          `https://ratemyteacher.onrender.com/ratings/user/${userInformation.id}`,
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
        // console.error(error);
      }
      return "ee";
    },
    // refetchInterval: 1000,
    refetchOnWindowFocus: false,
  });
   
  return {
    data,
    refetch,
    isLoading,
    isRefetching,
  }
};

export default useQueryUserPosts;
