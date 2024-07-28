import Link from 'next/link';
import React from 'react';
import TodoList from '@/components/todoList'; // Corrected import statement

const Todo = () => {

    return (
        <div className='text-xl my-10 flex flex-col'>
            <Link href='todo/new' className=' w-fit ml-10'>
                <button className=" bg-black/75 transition-all duration-100 hover:bg-black rounded-xl text-white text-lg p-1 px-3">
                    New
                </button>
            </Link>
            <table className='min-w-full divide-y divide-gray-200'>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Created</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    <TodoList />
                </tbody>
            </table>
        </div>
    )
}

export default Todo