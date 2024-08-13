import Link from 'next/link';
import React, { useState } from 'react';
import Layout from '../layout/Layout';
import { CiEdit } from "react-icons/ci";
import { useRouter } from 'next/router';

function ProfileInfo({ profileData }) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: profileData.name,
        lastName: profileData.lastName,
        phone: profileData.phone,
        email: profileData.email,
        password:""
    });
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/editUser', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to update user information');
            }
            const updatedData = await response.json();
            console.log(updatedData)
            router.reload(); 
          
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Layout>
            <div className='min-h-screen'>
                <div className='mt-5 sm:w-[70%] w-[95%] flex flex-col sm:text-lg text-sm p-5 rounded-md bg-white gap-y-5 mx-auto justify-center'>

                    {isEditing ? (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="border p-2"
                                placeholder="Enter your name"
                            />
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="border p-2"
                                placeholder="Enter your last name"
                            />
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="border p-2"
                                placeholder="Enter your phone number"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="border p-2"
                                placeholder="Enter your email"
                            />
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="border p-2"
                                placeholder="Enter your password"
                            />
                            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 ease-in-out">ذخیره تغییرات</button>
                            <button type="button" onClick={() => setIsEditing(false)} className="bg-gray-500 hover:bg-gray-600 text-white p-2 rounded ease-in-out">لغو</button>
                        </form>
                    ) : (
                        <>
                        <Link href="#" onClick={() => setIsEditing(true)} className='flex text-sm items-center self-end w-fit px-2 hover:bg-yellow-500 font-DanaMedium gap-x-2 py-1.5 bg-yellow-400 rounded-md '> <CiEdit  className='text-xl'/> ویرایش</Link>

                            <p className='text-black'>نام:
                                <span className='text-violet-600'>{profileData.name}</span>
                            </p>
                            <p className='text-black'>نام خانوادگی :
                                <span className='text-violet-600'>{profileData.lastName}</span>
                            </p>
                            <p className='text-black'>موبایل:
                                <span className='text-violet-600'>{profileData.phone}</span>
                            </p>
                            <p className='text-black'>ایمیل:
                                <span className='text-violet-600'>{profileData.email}</span>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </Layout>
    );
}

export default ProfileInfo;
