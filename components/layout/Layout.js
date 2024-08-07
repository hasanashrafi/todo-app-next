import Link from 'next/link'
import React, { Children } from 'react'

import { VscListSelection } from "react-icons/vsc";
import { BiMessageSquareAdd } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import Dropdown from '../DropDown';



function Layout({ children }) {
    return (
        <div className='font-Dana p-2'>
            <header className='flex justify-between items-center  h-24 p-4 px-2.5 text-white text-lg'>
                <div className='py-2 flex flex-col '>
                    <p className="text-sm sm:text-2xl font-DanaDemiBold text-[#5115c2]">
                        Todo App | فهرست کارها
                    </p>
                    <p className='text-[10px] text-center py-1 font-Dana  text-[#5115c2]'>موفقیت : نظم , تلاش , تمرین</p>
                </div>

                <div className='p-1 text-[12px] lg:text-xl'>
                    <Dropdown />
                </div>
            </header>
            <div className='flex'>
                <section className=' flex  w-full'>
                    <div className='relative w-full'>
                        {children}
                        <div className='backdrop-filter backdrop-blur-md bg-opacity-20 bg-clip-padding fixed  bottom-20 right-0 left-0 w-full sm:w-[60%] bg-[#5115c2] items-center flex justify-center mx-auto mb-5 self-end h-fit  rounded-full  p-2'>

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