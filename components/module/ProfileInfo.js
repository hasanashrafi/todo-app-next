import Link from 'next/link'
import React from 'react'
import Layout from '../layout/Layout'

function ProfileInfo({ profileData }) {
    console.log(profileData)
    return (
        <Layout>
            <div className='min-h-screen '>
                <div className='mt-5 w-full flex flex-col text-xl p-5 rounded-md bg-white gap-y-5 mx-auto  justify-center'>
                    <p className='text-black'>نام:<span className='text-violet-600'>{profileData.name}</span> </p>
                    <p className='text-black'>نام خانوادگی: <span className='text-violet-600'>{profileData.lastName}</span></p>
                    <p className='text-black'>شماره موبایل: <span className='text-violet-600'>{profileData.phone}</span></p>
                    <p className='text-black'>ایمیل: <span className='text-violet-600'>{profileData.email}</span> </p>
                </div>
            </div>

        </Layout>

    )
}

export default ProfileInfo
