"use client"
import React, { use, useState } from 'react'
import Login from '@/components/login';
import Register from '@/components/register';

const authentication = () => {

    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    async function submitHandler(e: React.FormEvent) {
        e.preventDefault();
        const fd = new FormData(e.target as HTMLFormElement);
        const formData = {
            username: fd.get('username') as string,
            email: fd.get('email') as string,
            password: fd.get('password') as string
        }
        console.log(fd)

        //send data to server
        const res = await fetch('http://localhost:8000/api/users', {
            'method': 'POST',
            'body': JSON.stringify(formData),
            'headers': {
                'content-type': 'application/json'
            }
        });
        // const resData = res.json();
        if (res.ok) {
            setSuccessMsg("Thank you for signing up. Please sign in to continue");
            setErrorMsg('')
        }
        else {
            const resData = await res.json();
            // console.log(resData);
            const result = resData.username;
            // console.log(result);
            setSuccessMsg('')
            setErrorMsg(result)
        }
    }


    return (
        <div className=' flex items-center justify-around'>
            <Register />

            <Login />
        </div>
    )
}

export default authentication