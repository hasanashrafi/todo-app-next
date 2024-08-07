import Link from 'next/link'
import { VscListSelection } from "react-icons/vsc";
import { BiMessageSquareAdd } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import Dropdown from '../templates/DropDown';


function Layout({ children }) {
    
    return (
        <div className='font-Dana p-2'>
            <header className='flex justify-between items-center  h-24  px-2.5 text-white text-lg'>
                <div className='flex flex-col items-center justify-center  '>
                    <p className="flex flex-col text-lg sm:text-2xl font-DanaDemiBold text-[#5115c2]">
                        فهرست کارها
                        <span className='text-[10px] text-center  font-Dana  text-[#726c7e]'>موفقیت : نظم , تلاش , تمرین</span>

                    </p>
                </div>

                <div className='self-center p-1 text-[12px] lg:text-xl'>
                    <Dropdown />
                    {/* <button className=' group relative p-2  border text-lg  bg-[#5115c2] rounded-full'>
                        <FaUser />
                        <div className='z-10 flex justify-center items-center w-28 text-sm gap-x-2 left-0  invisible text-white absolute  bg-[#9764fd] drop-shadow-lg  mt-3 p-2 rounded-lg   shadow-xl group-focus:visible'>
                            <Link href="/signin" className=' hover:text-[#5115c2] ' >
                                ورود
                            </Link>
                           
                            <Link href="/signup" className=' hover:text-[#5115c2]'>
                                ثبت نام
                            </Link>
                        </div>
                    </button> */}



                </div>
            </header>

            <div className='flex'>
                <section className=' flex  w-full'>
                    <div className=' w-full'>
                        {children}

                    </div>

                </section>
                <div className='backdrop-filter backdrop-blur-md bg-opacity-20 bg-clip-padding fixed  bottom-10 right-0 left-0 w-full sm:w-[60%] bg-[#5115c2] items-center flex justify-center mx-auto mb-5 self-end h-fit  rounded-full  p-2'>

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

            <footer className=' p-3 items-center justify-center text-white font-MorabbaMedium flex  mx-auto w-full'><p>
                Developed.By.HsN
            </p>
            </footer>

        </div>
    )
}

export default Layout