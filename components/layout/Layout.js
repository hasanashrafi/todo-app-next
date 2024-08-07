import Link from 'next/link'
import React, { Children } from 'react'

import { VscListSelection } from "react-icons/vsc";
import { BiMessageSquareAdd } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";



function Layout({ children }) {
    return (
        <div className='font-Dana p-2'>
            <header className='flex justify-between items-center  h-20 py-6 px-2.5 text-white text-lg'>
                <div className='py-2 '>
                    <p className="text-2xl font-DanaDemiBold text-[#5115c2]">
                        Todo App | فهرست کارها
                    </p>
                    <p className='text-sm text-center py-1 font-DanaDemiBold text-[#5115c2]'>موفقیت : نظم , تلاش , تمرین</p>
                </div>
                <div className='flex items-center gap-x-3'>
                    <button className='p-1 px-4 rounded-md bg-[#5115c2]'>
                    <Link href="/signup"> ورود | ثبت نام</Link>                    
                    </button>
                    <button className='p-1 px-4 rounded-md bg-[#5115c2]'>خروج</button>
                </div>
            </header>
            <div className='flex'>
                <section className=' flex  w-full'>
                    <div className='relative w-full'>
                        {children}
                        <div className='backdrop-filter backdrop-blur-md bg-opacity-20 bg-clip-padding fixed  bottom-20 right-0 left-0 w-[60%] bg-[#5115c2] items-center flex justify-center mx-auto mb-5 self-end h-fit  rounded-full  p-2'>

                            <ul className='flex justify-around  items-center '>
                                <li
                                    className='hover:bg-indigo-500 px-4 py-1 rounded-full text-sm lg:text-lg font-medium text-white my-2 flex items-center'>
                                    <VscListSelection className='lg:text-2xl' />
                                    <Link href="/" className='mr-2.5'>
                                        کار ها
                                    </Link>
                                </li>
                                <li className='hover:bg-indigo-500 px-4 py-1 rounded-full text-sm lg:text-lg  font-medium text-white my-2 flex items-center'>
                                    <BiMessageSquareAdd className='lg:text-2xl' />

                                    <Link href="/add-todo" className='mr-2.5'>
                                        کار جدید
                                    </Link>
                                </li>
                                <li className='hover:bg-indigo-500 px-4 py-1 rounded-full text-sm lg:text-lg  font-medium text-white my-2 flex items-center'>
                                    <RxDashboard className=' lg:text-2xl' />
                                    <Link href="/profile" className='mr-2.5'>
                                        پروفایل
                                    </Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </section>
            </div>
            <footer className=' p-3 items-center justify-center text-white font-MorabbaMedium flex  mx-auto w-full'><p>
                Developed.By.HsN
            </p></footer>

        </div>
    )
}

export default Layout