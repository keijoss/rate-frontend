import React from 'react'
import useAllSubjec from '../Store/useAllSubjects'
import useUserInformation from "../Store/useUserInformation";
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export default function useQueryAllSubjects() {
    const setallsubect = useAllSubjec((state) => state.setSubjects);
     const userInformation = useUserInformation((state) => state.information);
     const { data, refetch, isLoading, isRefetching } = useQuery({
       queryKey: [99999, "allsubjects"],
       queryFn: async () => {
        //  try {
        //    const response = await axios.get(
        //      `https://ratemyteacher.onrender.com/subject/`,
        //      {
        //        headers: {
        //          authorization: `${localStorage.getItem("token")}`,
        //        },
        //      }
        //    ); 
         try {
           const response = await axios.get(`http://localhost:3300/subjects/`, {
             headers: {
               authorization: `${localStorage.getItem("token")}`,
             },
           });
           const data = await response.data;
           setallsubect(data);
           return data;
         } catch (error) {
           console.error(error);
           console.log(error)
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
