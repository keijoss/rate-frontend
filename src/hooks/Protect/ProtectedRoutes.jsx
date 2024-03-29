import React, { Children, useEffect } from 'react'
import useQueryVerifyToken from '../Queries/useQueryVerifyToken'
import useUserInformation from '../Store/useUserInformation';
import useQueryUserPosts from '../Queries/useQueryUserPosts';

function ProtectedRoutes({children}) {
  const { isLoading,isRefetching } = useQueryVerifyToken();
  const useinforation = useUserInformation((state) => state.information);
  if (isLoading && useinforation === null ) {
    return <div>loading</div>;
  }
    return children
  
} 
 
export default ProtectedRoutes