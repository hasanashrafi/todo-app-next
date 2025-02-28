"use client"

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function SignupPage() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();
    const { status } = useSession();

    useEffect(() => {
        if (status === "authenticated") {
            router.push("/");
        }
    }, [status, router]);

    const submitHandler = async () => {
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify({
                name,
                lastName,
                email,
                password,
                phone,
            }),
            headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();

        if (data.status === "success") router.push("/signin");
        if (data.status === "success") {
            toast.success("User  created");
        }
    };

    return (
        <div className="p-4 font-DanaDemiBold min-h-screen bg-gradient-to-t from-[#5d0efa] to-[#ebe7ff] flex flex-col justify-start py-12 sm:px-6 lg:px-8">
            <ToastContainer />
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Image
                
                    className="mx-auto h-[200px] w-full"
                    src="/signup.svg"
                    width={100}
                    height={400}
                    alt="bg"
                    priority
                />
                <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-white">
                    ایجاد حساب کاربری
                </h2>
                <p className="mt-2  text-center text-sm leading-5 text-white max-w">
                    یا
                    <Link
                        href="signin"
                        className="mr-1 font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                    >
                        وارد شوید
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="rounded-md bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium leading-5  text-gray-700"
                        >
                            نام
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="نام خود را وارد کنید ...."
                                type="text"
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            />
                        </div>
                    </div>

                    <div className="mt-6">
                        <label
                            htmlFor="lastName"
                            className="block text-sm font-medium leading-5 text-gray-700"
                        >
                            نام خانوادگی
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="نام خانوادگی خود را وارد کنید ...."
                                type="text"
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            />
                        </div>
                    </div>

                    <div className="mt-6">
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium leading-5 text-gray-700"
                        >
                            شماره موبایل
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="شماره موبایل  خود را وارد کنید ...."
                                type="text"
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            />
                        </div>
                    </div>

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
                                    />
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
                                ساخت حساب
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;