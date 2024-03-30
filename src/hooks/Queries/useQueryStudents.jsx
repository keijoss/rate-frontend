import React from "react";
import useTeachers from "../Store/useTeachers";
import useUserInformation from "../Store/useUserInformation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import usestudentss from "../Store/useStudents";

export default function useQueryStudents() {
  const setstudents = usestudentss((state) => state.setstudents);
  const userInformation = useUserInformation((state) => state.information);
  const { data, refetch, isLoading, isRefetching } = useQuery({
    queryKey: [1111, "students"],
    queryFn: async () => {
      try {
        // const response = await axios.get(
        //   `https://ratemyteacher.onrender.com/teachers`,
        //   {
        //     headers: {
        //       authorization: `${localStorage.getItem("token")}`,
        //     },
        //   }
        // );
        const response = await axios.get(`http://localhost:3300/students`, {
          headers: {
            authorization: `${localStorage.getItem("token")}`,
          },
        });
        const data = await response.data;
        setstudents(data);
        return data;
      } catch (error) {
        console.log(error);
      }
      return "ee";
    },
    refetchOnWindowFocus: false,
  });

  return {
    data,
    refetch,
    isLoading,
    isRefetching,
  };
}
