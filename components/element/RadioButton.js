import React from 'react';



function RadioButton({ status, setStatus, value, title, children }) {

    return (
        <div className='flex gap-x-3'>

            <div className=' relative rounded-md shadow-sm'>
                <div className={`flex  gap-x-2 border w-36  justify-between p-2 rounded-md  
                ${value === "todo" ? "bg-green-600" : null
                        || value === "inprogress" ? "bg-blue-600 " : null
                            || value === "review" ? "bg-yellow-600 " : null
                                || value === "done" ? "bg-violet-600 " : null}`}>

                    <label htmlFor={value}
                        className="flex gap-x-2 text-sm font-medium leading-4  text-white">
                        {children}
                        {title}
                    </label>
                    <input
                        onChange={e => setStatus(e.target.value)}
                        type='radio'
                        id='todo'
                        value={value}
                        checked={status === value}
                        className=" cursor-pointer"
                    />
                </div>
            </div>

        </div>
    );
}

export default RadioButton;
