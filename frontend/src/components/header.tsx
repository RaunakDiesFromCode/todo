"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";


const Header = () => {

    const [logout, setLogout] = useState(false);
    useEffect(() => {
        const userToken = localStorage.getItem('user_token');

        if (userToken != undefined || userToken != null) {
            setLogout(true);
        }
        else {
            setLogout(false);
        }
    }, []);

    return (
        <div>
            <nav className="flex flex-row justify-between items-center bg-gray-100 py-3 px-7 rounded-b-xl shadow-2xl shadow-gray-400">
                <h1 className="text-2xl font-bold">
                    <Link
                        href="/">
                        .todo
                    </Link></h1>
                <ul className=" flex gap-7 text-gray-600 font-semibold">
                    <li className="hover:text-black transition-all duration-500 cursor-pointer">
                        {
                            logout ?
                                < Link href={`/logout`}>Logout</Link>
                                :
                                < Link href={`/login`}>Login</Link>
                        }
                    </li>
                    
                    <li className="hover:text-black transition-all duration-500 cursor-pointer">
                        {
                            logout ?
                                <Link href={`/todo`}>
                                    My TODOs
                                </Link>
                                :
                                <></>
                        }
                    </li>
                    <li className="hover:text-black transition-all duration-500 cursor-pointer">
                        <Link href={`/about`}>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </div >
    );
};

export default Header;
