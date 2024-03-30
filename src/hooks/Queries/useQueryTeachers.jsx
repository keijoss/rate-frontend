import React from 'react'
import useTeachers from '../Store/useTeachers';
import useUserInformation from "../Store/useUserInformation";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useQueryTeachers() {
    const setTeacher = useTeachers((state) => state.setTeacher);

    const userInformation = useUserInformation((state) => state.information);
    const { data, refetch, isLoading, isRefetching } = useQuery({
      queryKey: [88888, "teaching"],
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
          const response = await axios.get(`http://localhost:3300/teachers`, {
            headers: {
              authorization: `${localStorage.getItem("token")}`,
            },
          });
          const data = await response.data;
          setTeacher(data);
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
    }
}
