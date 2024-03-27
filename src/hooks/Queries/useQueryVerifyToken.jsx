import React, { useEffect } from 'react'
import useUserInformation from '../Store/useUserInformation';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

function useQueryVerifyToken() {

    const navigate = useNavigate();
    const setuserinfromation = useUserInformation(
      (state) => state.setinformation
    );
    const token = localStorage.getItem("token");
    const userinfomration = useUserInformation((state) => state.information);
    
    const {refetch,isLoading,data,isRefetching} = useQuery(
      {
        queryKey: "verify",
        queryFn: async () => {
          try {
            const response = await axios.get("http://localhost:3300/verify", {
              headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`,
              },
            });
    
            const decoded = await response.data;
            console.log(decoded)
             setuserinfromation(decoded);
            return decoded;
          } catch (error) {
            console.log(error);
          }
        },
        enabled: token !== null,
        onSuccess: (data) => {
          setuserinfromation(data);
        },
      }
    )

    return {
      refetch,
      isLoading,
      data,
      isRefetching
    }
}

export default useQueryVerifyToken