import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Link } from "react-router-dom";

const formSchema = z.object({
  student_id: z
    .string()
    .max(6, "Student ID must be 6 digits")
    .min(6, "Student ID must be 6 digits"),
  name: z.string().refine((data) => {
    if (data.includes(" ") || data.length === 0 ) {
      return false
    }
    return true;
  }, "Name cannot contain spaces and make sure be 'Anonymous'"),
  email: z.string().email(),
  password: z.string().min(5, "Password must be atleast 5 characters").max(234),
});
export default function Register() {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      student_id: "",
      name: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values);

    const register = async () => {
      try {
        console.log("resgitering");
        const register = await axios.post(
          "https://ratemyteacher.onrender.com/register",
          values
        );
        console.log("registered");
        const data = await register.data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    register();
  }
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex justify-center flex-col items-center h-screen  w-fit"
        >
          <div className="font-black  text-7xl text-white flex ">
            Ra <span className="text-[#8287FE] ">Te</span>
          </div>

          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="email"
              className=" w-full "
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-sm ">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Email Address " {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="student_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-sm ">
                    ID Number
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Student ID Number" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="  w-full">
                <FormLabel className="text-white text-sm  ">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Desired Anonymous Name" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="  w-full">
                <FormLabel className="text-white text-sm ">Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Password" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <button className="bg-[#8287FE] w-full mt-3 rounded-md py-2 font-bold  text-white ">
            Login
          </button>
          <sub className="w-full text-center text-white font-normal mt-3">
            Already have an Account yet?{" "}
            <Link to={"/login"} className="text-[#8287FE]">
              {" "}
              Login Account
            </Link>
          </sub>
        </form>
      </Form>
    </div>
  );
}
