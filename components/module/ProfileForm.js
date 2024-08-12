import React from 'react'
import { CgProfile } from "react-icons/cg";

function ProfileForm({
    submitHandler,
     name,
    lastName,
    phone,
    password,
    setName,
    setLastName,
    setPhone,
    setPassword
}) {


    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">

            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <div className='mx-auto mb-4 text-center text-violet-600'>
                    <CgProfile className='text-6xl mx-auto mb-1 ' />
                    <p>پروفایل</p>
                </div>
                <div>
                    <label htmlFor="name"
                        className="block text-sm font-medium leading-5  text-gray-700">نام</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="نام خود را وارد کنید ...."
                            type="text"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                    </div>
                </div>

                <div className="mt-6">
                    <label htmlFor="lastName"
                        className="block text-sm font-medium leading-5 text-gray-700">نام خانوادگی</label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                            placeholder="نام خانوادگی خود را وارد کنید ...."
                            type="text"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                    </div>
                </div>

                <div className="mt-6">
                    <label htmlFor="phone" className="block text-sm font-medium leading-5 text-gray-700">شماره موبایل </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            placeholder="شماره موبایل  خود را وارد کنید ...."
                            type="text"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                    </div>
                </div>

                <div className="mt-6">
                    <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">
                        رمز
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                        <input
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                    </div>
                </div>

                <div className="mt-6">
                    <span className="block w-full rounded-md shadow-sm">
                        <button
                            onClick={submitHandler}
                            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#7f50ff] hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                            ذخیره
                        </button>
                    </span>
                </div>


            </div>
        </div>
    )
}

export default ProfileForm
