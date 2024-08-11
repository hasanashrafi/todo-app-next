import React, { useEffect, useState } from 'react'
import Tasks from '../module/Tasks'

function HomePage() {

    const [todos, setTodos] = useState([])
    useEffect(() => {
        fetchTodos()
    }, [])

    const fetchTodos = async () => {
        const res = await fetch("/api/todos")
        const data = await res.json()
        if (data.status === "success") setTodos(data.data.todos)
    }
    return (
        <div className=' flex flex-wrap justify-center w-full'>
            <div className=' backdrop-blur-lg
               [ p-8 md:p-10 lg:p-10 ]
               [ bg-gradient-to-b from-white/60 to-white/30 ]
               [ border-[1px] border-solid border-white border-opacity-30 ]
               [ shadow-black/70 shadow-2xl ] w-96 bg-green-600   m-2  text-white drop-shadow-lg shadow-dark rounded '>
                <p className='text-center py-1 bg-green-600 rounded-md'>کار</p>
                <Tasks data={todos.todo} fetchTodos={fetchTodos} next="inprogress" />
            </div>

            <div className=' backdrop-blur-lg
               [ p-8 md:p-10 lg:p-10 ]
               [ bg-gradient-to-b from-white/60 to-white/30 ]
               [ border-[1px] border-solid border-white border-opacity-30 ]
               [ shadow-black/70 shadow-2xl ] w-96 bg-blue-600   m-2  text-white drop-shadow-lg shadow-dark rounded '>
                <p className='text-center py-1 bg-blue-600 rounded-md'>در حال انجام</p>
                <Tasks data={todos.inprogress} fetchTodos={fetchTodos} next="review" back="todo"/>
            </div>

            <div className=' backdrop-blur-lg
               [ p-8 md:p-10 lg:p-10 ]
               [ bg-gradient-to-b from-white/60 to-white/30 ]
               [ border-[1px] border-solid border-white border-opacity-30 ]
               [ shadow-black/70 shadow-2xl ] w-96 bg-yellow-600   m-2  text-white drop-shadow-lg shadow-dark rounded '>
                <p className='text-center py-1 bg-yellow-600 rounded-md'>در حال بررسی</p>
                <Tasks data={todos.review} fetchTodos={fetchTodos} next="done" back="inprogress"/>
            </div>
            
            <div className=' backdrop-blur-lg
               [ p-8 md:p-10 lg:p-10 ]
               [ bg-gradient-to-b from-white/60 to-white/30 ]
               [ border-[1px] border-solid border-white border-opacity-30 ]
               [ shadow-black/70 shadow-2xl ] w-96 bg-violet-600   m-2  text-white drop-shadow-lg shadow-dark rounded '>
                <p className='text-center py-1 bg-violet-600 rounded-md'>انجام شده</p>
                <Tasks data={todos.done} fetchTodos={fetchTodos}  back="review"/>
            </div>

        </div>
    )
}

export default HomePage
