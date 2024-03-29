import useQueryVerifyToken from '@/hooks/Queries/useQueryVerifyToken';
import useAllPosts from '@/hooks/Store/useAllPosts';
import useUserInformation from '@/hooks/Store/useUserInformation';
import useUserPosts from '@/hooks/Store/useUserPosts';
import useUserSubjects from '@/hooks/Store/useUserSubjects';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Login() {

    const navigate = useNavigate();

    const setuserinfromation = useUserInformation((state) => state.setinformation);
    const setallposts = useAllPosts((state) => state.setallPosts);
    const setUserPost = useUserPosts((state) => state.setPosts);
    const setsubject = useUserSubjects((state) => state.setSubjects);
    const [errors , isError] = useState()
    useEffect(() => {
        const token = localStorage.getItem('token')
        
        
        if(token){

          try{
            const response = axios
              .get("https://ratemyteacher.onrender.com/verify", {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `${token}`,
                },
              })
              .then((e) => {
                if (e.data) {
                  navigate("/authorizeduser/home", { replace: true });
                }
              });
          }catch(e){
            // console.log("errore", e)
                      localStorage.removeItem("token");
                      setuserinfromation(null);
                      setallposts(null);
                      setUserPost(null);
                      setsubject(null);
          }
          
        
        }
    }, [])
    const submit = (e) => {
        e.preventDefault()
        const logincred = {
          email: e.target[0].value,
          password: e.target[1].value,
        };

        const login = async () => {
            try {
            const response = await axios.post(
              "https://ratemyteacher.onrender.com/login",
              logincred
            );
                const data = await response.data
                localStorage.setItem('token', data.token)
                navigate('/authorizeduser/home', {replace: true})
            } catch (error) {
              // console.log(error)
                isError(error?.response?.data)
                
            }
        }

        login()
    }
  return (
    <div className="flex justify-center flex-col items-center h-screen ">
      <div className="font-black  text-7xl text-white flex ">
        Ra <span className="text-[#8287FE] ">Te</span>
      </div>
      <form action="#" onSubmit={submit} className="flex flex-col w-80 gap-1">
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="email" className="text-white text-sm ">
            Email
          </label>
          <input
            placeholder="Enter your Email"
            required
            type="email"
            className=" w-full rounded-md p-2 pl-5 text-sm"
          />
        </div>
        <div className="flex flex-col  w-full gap-1 pb-2">
          <label htmlFor="passowrd" className="text-white text-sm">
            Password
          </label>
          <input
            placeholder="Enter your current-password"
            autoComplete='on'
            required
            type="password"
            className=" w-full rounded-md p-2 pl-5 text-sm"
          />
        </div>
        {errors?.message && <sub className="text-red-500 ">{errors?.message}</sub>}
        <button className="bg-[#8287FE] w-full mt-5 rounded-md p-1 py-2 font-bold  text-white ">
          Login
        </button>
        <sub className="w-full text-center text-white font-normal mt-2">
          Does'nt have an Account yet?{" "}
          <Link className="text-[#8287FE]" to={"/register"}>Create Account</Link>
        </sub>
      </form>
    </div>
  );
}
