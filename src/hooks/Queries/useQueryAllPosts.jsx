import { useNavigate } from "react-router-dom";
import useAllPosts from "../Store/useAllPosts";
import useUserInformation from "../Store/useUserInformation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";



function useQueryAllPosts() {
  const allPosts = [
    {
      name: "John Doe",
      date: "2022-10-01",
      teacher: "Mr. Smith",
      subject: "Mathematics",
      comment:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
      teaching_methods: 1,
      communication: 4,
      supportiveness: 1,
      organization: 4,
      engagement: 3,
      attitude: 4,
      like: 15,
      dislike: 10,
    },
    {
      name: "Mark Johnson",
      date: "2022-10-05",
      teacher: "Mrs. Wilson",
      subject: "Art",
      comment:
        "The teacher is very creative and encourages us to express ourselves through various art forms.",
      teaching_methods: 4,
      communication: 4,
      supportiveness: 3,
      organization: 3,
      engagement: 4,
      attitude: 4,
      like: 15,
      dislike: 10,
    },
    {
      name: "Emily Davis",
      date: "2022-10-06",
      teacher: "Mr. Thompson",
      subject: "Physical Education",
      comment:
        "The teacher keeps the class active and fun. We always have a great time during PE.",
      teaching_methods: 3,
      communication: 4,
      supportiveness: 5,
      organization: 3,
      engagement: 5,
      attitude: 5,
      like: 15,
      dislike: 10,
    },
    {
      name: "Alex Johnson",
      date: "2022-10-03",
      teacher: "Mr. Brown",
      subject: "English",
      comment:
        "The teacher is very knowledgeable and provides great explanations. I enjoy the class.",
      teaching_methods: 5,
      communication: 5,
      supportiveness: 4,
      organization: 4,
      engagement: 5,
      attitude: 5,
      like: 15,
      dislike: 10,
    },
    {
      name: "Sarah Lee",
      date: "2022-10-04",
      teacher: "Ms. Davis",
      subject: "History",
      comment:
        "The teacher makes the subject come alive with interesting stories and interactive activities.",
      teaching_methods: 4,
      communication: 3,
      supportiveness: 5,
      organization: 4,
      engagement: 4,
      attitude: 4,
      like: 15,
      dislike: 10,
    },
    // Add more objects as needed
  ];
  const navigat = useNavigate()
  const setallPosts = useAllPosts((state) => state.setallPosts);
  const userInfromation = useUserInformation((state) => state.information);

  const { isRefetching, data, refetch, isLoading } = useQuery({
    queryKey: [1111111111, "allPosts"],
    queryFn: async () => {
      try {
        // console.log("fetching data raitings")
        const response = await axios.get("http://localhost:3300/ratings", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,
          },
        });
        const data = await response.data;
        setallPosts(await data);

        return data;
      } catch (error) {
        // console.log(error);
        if (error.response.status === 403 || error.response.status === 0) {
          localStorage.removeItem("token");
          navigat("/login");
        }
      }
    },
    refetchOnWindowFocus: false,
    // refetchInterval: 1000,
  });

  return { allPosts, isRefetching, data, refetch, isLoading };
}

export default useQueryAllPosts;
