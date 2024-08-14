import React, { useState } from 'react';
import Layout from '../layout/Layout';

function DetailPage({ data }) {
    // Initialize state hooks at the top level
    const [formData, setFormData] = useState({ title: '', status: '', description: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    // Check if data is available
    if (!data) return <div className='min-h-screen'>No data available</div>; 

    // Update state with data once it's available
    const { title, status, description, _id } = data; 
    if (isEditing) {
        setFormData({ title, status, description });
    }

    const editHandler = async () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/todos/${_id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            const result = await response.json();
            if (response.ok) {
                setSuccess(result.message);
                setError(null);
                setIsEditing(false);
            } else {
                setError(result.message);
                setSuccess(null);
            }
        } catch (error) {
            setError("An error occurred while updating the todo.");
            setSuccess(null);
        }
    };

    return (
        <Layout>
            <div className='flex flex-col justify-center w-full min-h-screen p-5 font-DanaMedium'>
                <div className='flex flex-col justify-center text-sm sm:text-lg mx-auto p-10 gap-y-5 w-full sm:w-[70%] bg-purple-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-15'>
                    {isEditing ? (
                        <form onSubmit={handleSubmit} className='flex flex-col gap-y-4'>
                            <input
                                type='text'
                                name='title'
                                value={formData.title}
                                onChange={handleChange}
                                className='p-2 rounded'
                                placeholder='Title'
                                required
                            />
                            <input
                                type='text'
                                name='status'
                                value={formData.status}
                                onChange={handleChange}
                                className='p-2 rounded'
                                placeholder='Status'
                                required
                            />
                            <textarea
                                name='description'
                                value={formData.description}
                                onChange={handleChange}
                                className='p-2 rounded'
                                placeholder='Description'
                                required
                            />
                            <button type='submit' className='rounded p-1 bg-yellow-400 hover:bg-yellow-500'>
                              Save
                            </button>
                            <button onClick={() => setIsEditing(false)} className='rounded p-1 place-items-center bg-yellow-400 m-y-2 backdrop-filter hover:bg-yellow-500'>Cancel</button>
                            {error && <p className='text-red-500'>{error}</p>}
                            {success && <p className='text-green-500'>{success}</p>}
                        </form>
                    ) : (
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
                            <button onClick={editHandler} className='rounded p-1 place-items-center bg-yellow-400 m-y-2 backdrop-filter hover:bg-yellow-500'>Edit</button>
                        </>
                    )}
                </div>
            </div>
        </Layout>
    );
}

export default DetailPage;
