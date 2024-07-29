"use client"
import React, { useState } from 'react';

const Page = () => {
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        const fd = new FormData(e.target as HTMLFormElement);
        const currentDate = new Date();
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const year = String(currentDate.getFullYear());
        const formattedDate = `${year}-${month}-${day}`;

        const formData = {
            title: fd.get('title'),
            created_at: formattedDate
        }
        console.log("Form Data:", formData);


        const res = await fetch('http://localhost:8000/api/todos/', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(res)

        if (res.ok) {
            setSuccessMsg("Data added successfully");
            setErrorMsg('');
        } else {
            const resData = await res.json();
            const result = resData.title
            setSuccessMsg('');
            setErrorMsg(result);
        }
    }

    return (
        <div className="w-full h-full flex items-center justify-center text-center my-52">
            <form onSubmit={submitHandler}>
                {successMsg && <p className='text-green-600 text-sm'>{successMsg}</p>}
                {errorMsg && <p className='text-red-600 text-sm'>{errorMsg}</p>}
                <div className='flex gap-2'>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="text-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-96 p-2.5"
                        placeholder='your TODO'
                        required
                    />
                    <button type="submit" className="w-fit text-white bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Page;
