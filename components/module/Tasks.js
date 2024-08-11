import React from 'react'

function Tasks({ data }) {
    console.log(data)
    return (
        <div className='flex flex-col gap-y-2 p-3 items-center justify-center  rounded '>
            {
                data?.map((i) => (
                    <div key={i._id} className='size-24 border bg-white rounded text-black'>
                        <span className={i.status}>{i.title}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Tasks
