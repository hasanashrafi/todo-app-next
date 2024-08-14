
import React, { useEffect, useState } from 'react'
import ProfileForm from '../module/ProfileForm';

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ProfileInfo from '../module/ProfileInfo';
import Layout from '../layout/Layout';


function ProfilePage() {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [profileData, setProfileData] = useState(null)


    useEffect(() => {
        fetchProfile()
    }, [])

    const fetchProfile = async () => {
        const res = await fetch("/api/profile")
        const data = await res.json()
        console.log(data.data)

        if (data.status === "success" && data.data.name && data.data.lastName) {
            setProfileData(data.data)
        }
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        const res = await fetch("/api/profile", {
            method: "POST", body: JSON.stringify({
                name,
                lastName,
                phone,
                password
            }),
            headers: { "Content-Type": "application/json" }
        })

        const data = await res.json()
        if (data.status === "failed") toast.error("You are not logged in")

        if (data.status === "success") {
            toast.success("User Data Updated")
            setLastName("")
            setName("")
            setPhone("")
            setPassword()
        }
    }



    return (
       
            <div className='min-h-screen'>

                <div className="font-DanaDemiBold  flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                    <ToastContainer />
                    {
                        profileData ? (
                            <ProfileInfo profileData={profileData} />
                        ) : (
                            <ProfileForm
                                submitHandler={submitHandler}
                                name={name}
                                lastName={lastName}
                                phone={phone}
                                password={password}
                                setName={setName}
                                setLastName={setLastName}
                                setPassword={setPassword}
                                setPhone={setPhone} />
                        )
                    }
                </div>
            </div>
       
    )
}

export default ProfilePage
