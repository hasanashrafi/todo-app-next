import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { CgLogIn } from 'react-icons/cg';
import { FcTodoList } from "react-icons/fc";
import { GrFormNextLink } from "react-icons/gr";

function Tasks({ data, next, back, fetchTodos }) {
    const changeStatus = async (id, status) => {
        const res = await fetch("/api/todos", {
            method: "PATCH",
            body: JSON.stringify({ id, status }),
            headers: { "Content-Type": "application/json" }
        });
        const data = await res.json();
        if (data.status === "success") fetchTodos();
    };

    return (
        <div className='flex flex-col gap-y-2 p-3 items-center justify-center rounded'>
            {
                data?.map((i) => (
                    <div key={i._id} className='flex flex-col w-full p-3 border bg-white rounded text-black transform transition-transform duration-300 hover:scale-105'>
                        <span className={
                            `w-[70%] mx-auto h-1 rounded mb-3 ${i.status === "todo" ? "bg-green-600" : null
                                || i.status === "inprogress" ? "bg-blue-600" : null
                                    || i.status === "review" ? "bg-yellow-600" : null
                                        || i.status === "done" ? "bg-violet-600" : null}`
                        }>
                        </span>
                        <Link href={`/detail/${i._id}`}>
                            <div className='flex justify-between items-center my-4 border p-2 rounded bg-slate-200'>
                                <p className=''>{i.title}</p>
                                <FcTodoList className='self-end text-xl' />
                            </div>
                        </Link>

                        <div className='flex justify-between my-2.5 items-center p-1'>
                            {
                                back ? (
                                    <button
                                        onClick={() => changeStatus(i._id, back)}
                                        className="flex gap-x-1 items-center bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white p-1 border border-red-500 hover:border-transparent rounded">
                                        <GrFormNextLink className='text-xl' />
                                        قبلی
                                    </button>
                                ) : null
                            }
                            {
                                next ? (
                                    <button
                                        onClick={() => changeStatus(i._id, next)}
                                        className="flex gap-x-1 items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-1 border border-blue-500 hover:border-transparent rounded">
                                        بعدی
                                        <GrFormNextLink className='text-xl rotate-180' />
                                    </button>
                                ) : null
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Tasks;
