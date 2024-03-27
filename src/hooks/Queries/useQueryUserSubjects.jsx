import React, { useEffect } from "react";
import useUserSubjects from "../Store/useUserSubjects";
import { useQuery } from "@tanstack/react-query";
import useUserInformation from "../Store/useUserInformation";
import axios from "axios";

function useQueryUserSubjects() {
  // /teacherSubjects/user/:id"

  const setSubject = useUserSubjects((state) => state.setSubjects);
  const userInformation = useUserInformation((state) => state.information);
  const { data, 
    refetch

  
  } = useQuery({
    queryKey: [123213, "subjects"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          `http://localhost:3300/teacherSubjects/user/${userInformation.id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await response.data;
        setSubject(data);
        return response;
      } catch (error) {
        return error;
      }
    },
    onSuccess: (data) => {
      setSubject(data);
    },
  });

return {
    data,
    refetch,
  };
}

export default useQueryUserSubjects;
