'use client'
import Link from 'next/link';
import { FaUser } from "react-icons/fa";
import { signOut } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import { CiLogout } from "react-icons/ci";


const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    const { status } = useSession()
    
    const signOutHandler = async () => {
        await signOut()
    }

    return (
        <div className='w-full  '>
            {
                status === "authenticated" ? (
                    <button
                        onClick={signOutHandler}
                        className="  text-center p-1 gap-x-1 text-white bg-[#c20606] hover:bg-[#800b0b]  focus:outline-none font-medium rounded-xl inline-flex items-center"
                    >
                        خروج
                        <CiLogout className='text-lg' />
                    </button>
                ) : null
            }
            
            {
                status === "unauthenticated" ? (
                    <div className="relative inline-block">
                        <button
                            type="button"
                            className="group px-2 text-center gap-x-1.5 py-2 text-white bg-[#5115c2] hover:bg-[#4610a8] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center"
                            onClick={toggleDropdown}
                        >
                            <FaUser />

                            <svg className="w-2.5 h-2.5 group-focus:rotate-180 "
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6">
                                <path stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 4 4 4-4" />
                            </svg>
                        </button>

                        {isOpen && (
                            <div className="origin-top-right left-0 absolute text-[#5115c2]   mt-2 w-28 rounded-lg shadow-lg p-1 ring-1 ring-violet-900 ring-opacity-20">
                                <ul
                                    className='flex  justify-between  items-center   w-full'
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="options-menu"
                                >
                                    <li className='w-full text-center text-sm  '>
                                        <Link href="/signup" className='p-1'>ثبت نام</Link>
                                    </li>
                                    <span className=''>|</span>
                                    <li className='w-full text-center text-sm  '>
                                        <Link href="/signin" className='p-1'>ورود</Link>
                                    </li>

                                </ul>
                            </div>
                        )}
                    </div>
                ) : null
            }
        </div>
    )
}

export default Dropdown;