import Link from 'next/link';
import { VscListSelection } from "react-icons/vsc";
import { BiMessageSquareAdd } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import Dropdown from '../templates/DropDown';

function Layout({ children }) {
    return (
        <div className='font-Dana p-2'>
            <header className=' top-0 z-10 flex justify-between items-center h-18 px-2.5  text-violet-700 text-lg'>
                <div className='flex flex-col items-center justify-center'>
                    <p className="flex flex-col text-lg sm:text-2xl font-DanaDemiBold">
                        فهرست کارها
                        <span className='text-[10px] text-center font-Dana text-[#7244cf]'>موفقیت : نظم , تلاش , تمرین</span>
                    </p>
                </div>
                <div className='self-center p-1 text-[12px] lg:text-xl'>
                    <Dropdown />
                </div>
            </header>

            <div className='flex'>
                <section className='pb-16 flex w-full'>
                    <div className='w-full'>
                        {children}
                    </div>
                </section>

                <div className='fixed bottom-10 left-0 right-0 w-[95%] sm:w-[55%] bg-[#5115c2] backdrop-filter backdrop-blur-md bg-opacity-20 rounded-full p-2 mx-auto mb-5 flex justify-center'>
                    <ul className='flex justify-around items-center'>
                        <li className='hover:bg-indigo-500 px-4 py-1 rounded-full text-sm lg:text-lg font-medium text-white my-2 flex items-center'>
                           
                            <Link href="/" className='flex gap-x-1 items-center'>
                             <VscListSelection className='lg:text-2xl' />
                             
                            کار ها 
                             </Link>
                        </li>
                        <li className='hover:bg-indigo-500 px-4 py-1 rounded-full text-sm lg:text-lg font-medium text-white my-2 flex items-center'>
                            <Link href="/add-todo" className='flex gap-x-1 items-center'>
                            <BiMessageSquareAdd className='lg:text-2xl' />
                            کار جدید
                            </Link>
                        </li>
                        <li className='hover:bg-indigo-500 px-4 py-1 rounded-full text-sm lg:text-lg font-medium text-white my-2 flex items-center'>
                            <Link href="/profile" className='flex gap-x-1 items-center'>
                            <RxDashboard className='lg:text-2xl' />
                            پروفایل
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <footer className='p-3 items-center justify-center text-white font-MorabbaMedium flex mx-auto w-full'>
                <p>Developed.By.HsN</p>
            </footer>
        </div>
    );
}

export default Layout;
