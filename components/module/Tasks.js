import React from 'react'
import { RiMastodonLine } from "react-icons/ri";

function Tasks({ data }) {
    console.log(data)
    return (
        <div className='flex flex-col gap-y-2 p-3 items-center justify-center  rounded '>
            {
                data?.map((i) => (
                    <div key={i._id} className='flex flex-col w-full p-3 border bg-white rounded text-black'>
                        <span className={
                            `w-full h-2 rounded mb-3 ${i.status === "todo" ? "bg-green-600" : null
                                || i.status === "inprogress" ? "bg-blue-600" : null
                                    || i.status === "review" ? "bg-yellow-600" : null
                                        || i.status === "done" ? "bg-violet-600" : null}`
                        }></span>
                        <p className=''>{i.title}</p>
                        <RiMastodonLine className='self-end text-xl' />
                    </div>
                ))
            }
        </div>
    )
}

export default Tasks
