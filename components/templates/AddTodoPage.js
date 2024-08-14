import React, { useState } from 'react';

import Layout from '../layout/Layout';
import RadioButton from '../element/RadioButton';

import { GrAddCircle } from "react-icons/gr";
import { BsAlignStart } from "react-icons/bs";
import { MdOutlineRateReview } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import { GrInProgress } from "react-icons/gr";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddTodoPage() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("todo")
  

    const addHandler = async (e) => {
        e.preventDefault()
        const res = await fetch("/api/todos", {
            method: "POST",
            body: JSON.stringify({ title, status, description }),
            headers: { "Content-Type": "application/json" }
        })
        const data = await res.json()
        if (data.status === "success") {
            setTitle("")
            setStatus("todo")
            setDescription("")
            toast.success("با موفقیت اضافه شد")
        }
    }

    return (
        <Layout>
            <div className='min-h-screen font-DanaDemiBold p-5'>
                <h2 className='flex gap-x-2 items-center'>
                    <ToastContainer />
                    <GrAddCircle />
                    اضافه کردن کار جدید
                </h2>

                <div className="bg-white py-10 px-4 shadow sm:rounded-lg sm:px-10 mt-8 sm:mx-auto sm:w-full sm:max-w-3xl">
                    <div className=" ">
                        <label htmlFor="title"
                            className="block text-sm font-medium leading-5  text-gray-700">
                            عنوان
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input
                                id='title'
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                placeholder=" عنوان را وارد کنید ...."
                                type="text"
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                        </div>
                    </div>


                    <div className='w-full  flex flex-wrap  gap-y-2 gap-x-3   p-3 mt-4  justify-center'>
                        <RadioButton status={status} setStatus={setStatus} title="کار جدید " value="todo" >
                            <BsAlignStart className='' />
                        </RadioButton>

                        <RadioButton status={status} setStatus={setStatus} title="درحال انجام" value="inprogress">
                            <GrInProgress className='' />
                        </RadioButton>

                        <RadioButton status={status} setStatus={setStatus} title="در حال بررسی" value="review">
                            <MdOutlineRateReview className='' />
                        </RadioButton>

                        <RadioButton status={status} setStatus={setStatus} title="انجام شده" value="done">
                            <IoMdDoneAll className='' />
                        </RadioButton>

                    </div>
                    <div className=" mt-5">
                        <label htmlFor="description"
                            className="block text-sm font-medium leading-5  text-gray-700">
                            توضیحات
                        </label>
                        <div className="mt-4 relative rounded-md shadow-sm">
                            <textarea
                                id='description'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder=" توضیحات در مورد کار جدید   ...."
                                type="text"
                                className="h-24 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                        </div>
                    </div>

                    <button
                        onClick={addHandler}
                        className="w-full flex justify-center mt-4 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#7f50ff] hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                        اضافه کن
                    </button>
                </div>
            </div>
        </Layout>
    );
}

export default AddTodoPage;
