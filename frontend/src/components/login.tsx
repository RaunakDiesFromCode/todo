"use client"

import React, { useState } from 'react'

const Register = () => {

    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    async function submitHandler(e: React.FormEvent) {
        e.preventDefault();
        const fd = new FormData(e.target as HTMLFormElement);
        const formData = {
            username: fd.get('username') as string,
            password: fd.get('password') as string
        }
        console.log(fd)

        //send data to server
        const res = await fetch('http://localhost:8000/api/token-auth', {
            'method': 'POST',
            'body': JSON.stringify(formData),
            'headers': {
                'content-type': 'application/json'
            }
        });
        // const resData = res.json();
        const resData = await res.json();
        if (res.ok) {
            localStorage.setItem('user_token', resData.token);
            setSuccessMsg("Login successful");
            setErrorMsg('')
            location.href = '/todo';
        }
        else {
            // console.log(resData);
            const result = resData.username;
            // console.log(result);
            setSuccessMsg('')
            setErrorMsg(result)
        }
    }

    return (
        <section className="">
            <div className="flex flex-col items-center justify-center my-32 mx-auto lg:py-0 w-[30rem]">
                <div className="w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Sign in
                        </h1>
                        {
                            (successMsg != '') && <p className='text-green-600 text-sm'>{successMsg}</p>
                        }
                        {
                            (errorMsg.length !== 0) && <p className='text-red-600 text-sm'>{errorMsg}</p>
                        }
                        <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm text-gray-900 ">Your name</label>
                                <input type="text" id="username" name="username" className=" text-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder='username' required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm text-gray-900 ">Password</label>
                                <input type="password" id="password" name="password" placeholder="••••••••" className="text-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
                            </div>
                            <button type="submit" className="w-full text-white bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register