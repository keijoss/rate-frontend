import useUserInformation from '../Store/useUserInformation';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import useAllPosts from '../Store/useAllPosts';
import useUserPosts from '../Store/useUserPosts';
import useUserSubjects from '../Store/useUserSubjects';



function useQueryVerifyToken() {

    const navigate = useNavigate();
    const setuserinfromation = useUserInformation(
      (state) => state.setinformation
    );
    const token = localStorage.getItem("token");
    
    const { refetch, isLoading, data, isRefetching } = useQuery({
      queryKey: [4444444444,"verify"],
      queryFn: async () => {
        // console.log("fetching data verify token")
        try {

          const response = await axios.get(
            "https://ratemyteacher.onrender.com/verify",
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`,
              },
            }
          );

          const decoded = await response.data;
          setuserinfromation(decoded);

          return decoded;
        } catch (error) {
          // console.log(error);
          localStorage.removeItem("token");
          navigate("/", { replace: true });

        }
      },
      refetchOnWindowFocus: false,
    });

    return {
      refetch,
      isLoading,
      data,
      isRefetching
    }
}

export default useQueryVerifyToken