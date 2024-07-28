'use client'
import Link from "next/link"
import { useState, useEffect } from "react"

const TodoList = () => {

    const [todoList, setTodoList] = useState<any[]>([])
    // const [statusModified, setStatusModified] = useState<boolean>(false)

    async function fetchData() {
        const res = await fetch('http://localhost:8000/api/todos')
        const resData = await res.json()
        setTodoList(resData)
    }

    useEffect(() => {
        
        fetchData()
    }, [])

    async function taskDoneHandler(task_id: string) {
        const res = await fetch(`http://localhost:8000/api/todos/${task_id}`,
            {
                method: 'PATCH',
                'body': JSON.stringify({ 'status': true }),
                'headers': {
                    'Content-Type': 'application/json'
                }
            });
        if (res.ok) {
            // setStatusModified(true);
            fetchData();
        }
        const resData = await res.json();
        console.log(resData);
    }

    return (
        todoList.map((item, index) => {
            return (
                <tr key={index}>
                    <td className={`my-0.5 ${item.status && 'line-through'}`}>{item.title}</td>
                    <td className=" my-0.5">{item.created_at}</td>
                    <td className=" flex flex-row gap-2 items-center justify-center text-sm my-0.5">
                        {!item.status && <>
                            <Link href={`/todo/${item.id}`} className="bg-blue-600 rounded py-0.5 px-2 text-white">Edit</Link>
                            <button className="bg-green-600 rounded py-0.5 px-2 text-white" onClick={() => taskDoneHandler(item.id)}>Done</button>
                        </>}
                    </td>
                </tr>
            )
        })
    )
}

export default TodoList