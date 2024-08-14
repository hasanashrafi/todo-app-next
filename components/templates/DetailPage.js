import React, { useState } from 'react';
import Layout from '../layout/Layout';

function DetailPage({ data }) {

    // Check if data is available
    if (!data) return <div className='min-h-screen'>No data available</div>; 

    // Update state with data once it's available
    const { title, status, description, _id } = data; 
  



    return (
        <Layout>
            <div className='flex flex-col justify-center w-full min-h-screen p-5 font-DanaMedium'>
                <div className='flex flex-col justify-center text-sm sm:text-lg mx-auto p-10 gap-y-5 w-full sm:w-[70%] bg-purple-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-15'>
                    
                        <>
                            <p className='rounded-md flex items-center gap-x-5 h-10 text-slate-100 bg-green-500'>
                                <span className='inline-block h-10 p-1 place-content-center text-center w-28 bg-green-600 text-white'>Subject:</span> {title}
                            </p>
                            <p className='rounded-md flex items-center gap-x-5 h-10 text-slate-100 bg-blue-500'>
                                <span className='inline-block h-10 p-1 place-content-center text-center w-28 bg-blue-600 text-white'>Status:</span> {status}
                            </p>
                            <p className='rounded-md flex items-center gap-x-5 h-44 text-slate-100 bg-violet-500'>
                                <span className='inline-block p-1 place-content-center text-center w-28 bg-violet-600 text-white'>Description:</span> {description}
                            </p>
                        </>
                </div>
            </div>
        </Layout>
    );
}

export default DetailPage;
