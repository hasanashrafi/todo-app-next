'use client'
import Link from 'next/link';
import React, { useState } from 'react'

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div className='w-full  '>
            <div className="relative inline-block">
                <button
                    type="button"
                    className="px-1 gap-x-1.5 py-2 text-white bg-[#5115c2] hover:bg-[#4610a8] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center"
                    onClick={toggleDropdown}
                >
                    ورود | ثبت نام 

                    <svg className="w-2.5 h-2.5 ml-2.5"
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
                    <div className="origin-top-right left-0 absolute text-[#5115c2]   mt-2 w-44 rounded-lg shadow-lg p-2 ring-1 ring-black ring-opacity-5">
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
        </div>
    )
}

export default Dropdown;