"use client";
import React, { useState, useEffect } from 'react';

const Edit = ({ params }: { params: { id: string } }) => {
    const [todoList, setTodoList] = useState<{ title: string } | undefined>();
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const paramsId = params.id;

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setTodoList({ 'title': e.target.value });
    }

    async function fetchData() {
        try {
            const res = await fetch(`http://localhost:8000/api/todos/${paramsId}`);
            const resData = await res.json();
            setTodoList(resData);
        } catch (error) {
            setErrorMsg('Failed to fetch data');
        }
    }

    useEffect(() => {
        fetchData();
    }, [paramsId]);

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
            // created_at: formattedDate
        };

        console.log("Form Data:", formData);

        try {
            const res = await fetch(`http://localhost:8000/api/todos/${paramsId}/`, {
                method: 'PATCH',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const resData = await res.json();
            console.log("Response:", resData);

            if (res.ok) {
                setSuccessMsg("Data updated successfully");
                setErrorMsg('');
            } else {
                setErrorMsg(resData.title || 'Error updating data');
                setSuccessMsg('');
            }
        } catch (error) {
            setErrorMsg('Failed to update data');
            setSuccessMsg('');
        }
    };

    return (
        <div>TODO {params.id}
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
                            placeholder={todoList?.title || 'your TODO'}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit" className="w-fit text-white bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Edit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Edit;
