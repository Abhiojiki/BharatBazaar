import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Link } from "react-router-dom";



const SignUp=()=> {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
<div>
<div className="w-full mx-auto ">
      <div className="flex justify-center items-center sm:justify-between gap-x-9">
      <div className=" hidden sm:block object-contain min-w-[100px]" >
        <img src="https://cdn.pixabay.com/photo/2021/07/10/15/45/online-shop-6401739_1280.png" style={{ minWidth: "160px" }}/>
      </div>
        <div className="p-10 h-[650px] flex justify-center">
          <div className="h-[450px] w-[400px] flex flex-col items-start p-5">
            <div className="text-3xl font-semibold mb-5">Sign Up</div>
            <form onSubmit={handleSubmit(onSubmit)}>




            <div className="flex flex-col gap-y-2 mb-6 w-96 text-xl ">
                <label className="font-semibold" htmlFor="Full Name">
                  Full Name
                </label>
                <input
                  {...register("fullName", {
                    required: "Full Name is required",
                    minLength: {
                      value: 5,
                      message: "Full Name must be atleast 5 characters",
                    },
                   
                  })}
                  className="rounded-md shadow-md px-[10px] border-slate-200 border-2 outline-blue-900 outline-10"
                  type="password"
                  id="password"
                />
                <ErrorMessage
                  errors={errors}
                  name="fullName"
                  render={({ message }) => (
                    <p className="text-sm font-semibold text-gray-500">
                      {message}
                    </p>
                  )}
                />
              </div>

              <div className="flex flex-col gap-y-2 mb-6 w-96 text-xl">
                <label className="font-semibold" htmlFor="Phoneno">
                Phone No.
                </label>
                <input
                  {...register("Phoneno", {
                    // required: "Phone no. is required",
                    pattern:{
                      value:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
                      message:"Please include valid Phone No. ",
                    },
                    minLength: {
                      value: 5,
                      message: "Full Name must be atleast 5 characters",
                    },
                   
                  })}
                  className="rounded-md shadow-md px-[10px] border-slate-200 border-2 outline-blue-900 outline-10"
                  type="password"
                  id="password"
                />
                <ErrorMessage
                  errors={errors}
                  name="Phoneno"
                  render={({ message }) => (
                    <p className="text-sm font-semibold text-gray-500">
                      {message}
                    </p>
                  )}
                />
              </div>

              <div className="flex flex-col gap-y-2 mb-3 text-xl">


                <label className="font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                  className="rounded-md shadow-md px-[10px] h-8 outline-blue-900 outline-10 w-96 border-slate-200 border-2"
                  type="text"
                  id="email"
                />
                <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ message }) => (
                    <p className="text-sm font-semibold text-gray-500">
                      {message}
                    </p>
                  )}
                />
              </div>

              <div className="flex flex-col gap-y-2 mb-12 w-96 text-xl ">
                <label className="font-semibold" htmlFor="password">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 10,
                      message: "Password must be at least 10 characters",
                    },
                    pattern: {
                      value:
                        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,50}$/,
                      message:
                        "Password must include upper, lower, number, and special character",
                    },
                  })}
                  className="rounded-md shadow-md px-[10px] border-slate-200 border-2 outline-blue-900 outline-10"
                  type="password"
                  id="password"
                />
                <ErrorMessage
                  errors={errors}
                  name="password"
                  render={({ message }) => (
                    <p className="text-sm font-semibold text-gray-500">
                      {message}
                    </p>
                  )}
                />
              </div>


              

              <div className="flex flex-col gap-y-2 mb-8">
                <input
                  value="Submit"
                  type="submit"
                  className="py-[8px] px-5 rounded-lg bg-slate-300 hover:bg-blue-800 font-bold text-white shadow-lg shadow-blue-200 transition  ease-in-out duration-200 translate-10 w-96 text-xl"
                />
              </div>
            </form>

            <div className="flex flex-col gap-y-2 mb-8">
              <button className="py-[8px] px-5 rounded-lg bg-slate-700 hover:bg-slate-950 font-bold text-white shadow-lg shadow-blue-200 transition ease-in-out duration-200 translate-10 w-96">
                Sign Un with Google
              </button>
            </div>

            <div className="text-blue-600 font-bold mx-auto text-md flex w-full justify-end">
           
              <Link to="/login" className="me-10">Already sign up login...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  )
}

export default SignUp