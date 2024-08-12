import React from 'react'
import { RiMastodonLine } from "react-icons/ri";
import { GrFormNextLink } from "react-icons/gr";


function Tasks({ data, next, back, fetchTodos }) {
    console.log(data)

    const changeStatus = async (id, status) => {
        const res = await fetch("/api/todos", {
            method: "PATCH",
            body: JSON.stringify({ id, status }),
            headers: { "Content-Type": "application/json" }
        })
        const data = await res.json()
        if (data.status === "success") fetchTodos()
    }
    return (
        <div className='flex flex-col gap-y-2 p-3 items-center justify-center  rounded '>
            {
                data?.map((i) => (
                    <div key={i._id} className='flex flex-col w-full p-3 border bg-white rounded text-black'>
                        <span className={
                            `w-[70%] mx-auto h-1 rounded mb-3 ${i.status === "todo" ? "bg-green-600" : null
                                || i.status === "inprogress" ? "bg-blue-600" : null
                                    || i.status === "review" ? "bg-yellow-600" : null
                                        || i.status === "done" ? "bg-violet-600" : null}`
                        }></span>
                        <RiMastodonLine className='self-end text-xl' />
                        <p className=''>{i.title}</p>
                        <div className='flex justify-between my-2.5 items-center p-1'>
                            {
                                next ? (
                                    <button
                                        onClick={() => changeStatus(i._id, next)}

                                        className="flex gap-x-1 items-center   bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-1 border border-blue-500 hover:border-transparent rounded">
                                        <GrFormNextLink className='text-xl ' />
                                        بعدی

                                    </button>
                                ) : null
                            }
                            {
                                back ? (
                                    <button
                                        onClick={() => changeStatus(i._id, back)}
                                        className="flex gap-x-1 items-center  bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white p-1  border border-red-500 hover:border-transparent rounded">
                                        قبلی
                                        <GrFormNextLink className=' text-xl rotate-180 ' />
                                    </button>
                                ) : null
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Tasks
