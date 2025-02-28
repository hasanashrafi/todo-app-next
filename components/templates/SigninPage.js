"use client"

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";

function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: '/'
    });

    if (!res.error) {
  toast.success("Login successful", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce
  });
  router.push("/");
}
    setLoginStatus(res);
  };
  console.log(status);

  const notify = () => toast.success("", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce
  });

  if (loginStatus === "success") notify();

  return (
    <div className="p-4 font-DanaDemiBold min-h-screen bg-gradient-to-t from-[#5d0efa] to-[#ebe7ff] flex flex-col justify-start sm:px-6 lg:px-8">
      {loginStatus === "success" ? <ToastContainer /> : null}
      <div className=" sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          className="mx-auto h-[200px] w-full "
          src="/signin.svg"
          width={100}
          height={400}
          priority
          alt="Workflow"
        />
        <h2 className="text-white mt-6 text-center text-3xl leading-9 font-extrabold ">
          ورود به حساب کاربری
        </h2>

        <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
          یا
          <Link
            href="/signup"
            className="mr-1 font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            ثبت نام
          </Link>
        </p>
      </div>

      <div className=" mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="rounded-md bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="mt-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              ایمیل
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="user@example.com"
                type="email"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
              <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              رمز
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                type="password"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>

          <div className="mt-6">
            <span className="block w-full rounded-md shadow-sm">
              <button
                onClick={submitHandler}
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#7f50ff] hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                ورود
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigninPage;