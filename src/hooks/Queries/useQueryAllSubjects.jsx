import React from 'react'
import useAllSubjec from '../Store/useAllSubjects'
import useUserInformation from "../Store/useUserInformation";

export default function useQueryAllSubjects() {
    const setallsubect = useAllSubjec((state) => state.setSubjects);
     const userInformation = useUserInformation((state) => state.information);
     const { data, refetch, isLoading, isRefetching } = useQuery({
       queryKey: [88888, "teaching"],
       queryFn: async () => {
         try {
           const response = await axios.get(
             `https://ratemyteacher.onrender.com/ratings/user/${userInformation.id}`,
             {
               headers: {
                 authorization: `${localStorage.getItem("token")}`,
               },
             }
           );
           const data = await response.data;
           setallsubect(data);
           return data;
         } catch (error) {
           // console.error(error);
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
