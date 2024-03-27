import React, { Children } from 'react'
import useQueryVerifyToken from '../Queries/useQueryVerifyToken'
import useUserInformation from '../Store/useUserInformation';

function ProtectedRoutes({children}) {
  const { isLoading,isRefetching } = useQueryVerifyToken();

  if (isLoading || isRefetching) {
    return <div>loading</div>;
  }else{
    return children
  }
} 
 
export default ProtectedRoutes