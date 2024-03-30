import React from 'react'
import useTeachers from '../Store/useTeachers';
import useUserInformation from "../Store/useUserInformation";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useenrolledCourseds from '../Store/useEnrolledCoursed';

export default function useQueryEnrollledCourses() {
  const setenrolled = useenrolledCourseds((state) => state.setenrolledCoursed);
  
  const userInformation = useUserInformation((state) => state.information);
  const { data, refetch, isLoading, isRefetching } = useQuery({
    queryKey: [986568, "enrolledss"],
    queryFn: async () => {
      try {
        // const response = await axios.get(
        //   `https://ratemyteacher.onrender.com/studentteackingcourses`,
        //   {
        //     headers: {
        //       authorization: `${localStorage.getItem("token")}`,
        //     },
        //   }
        // );
        const response = await axios.get(
          `http://localhost:3300/studentteackingcourses`,
          {
            headers: {
              authorization: `${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await response.data;
        setenrolled(data);
        return data;
      } catch (error) {
        console.error(error);
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
