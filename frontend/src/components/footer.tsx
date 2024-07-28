"use client"
import Link from "next/link";
import React, { use, useEffect, useState } from "react";


const Footer = () => {

    const [totalViews, setTotalViews] = useState(0);

    async function fetchViews() {
        const res = await fetch('http://localhost:8000/api/total_views', {
            method: 'POST',
            body: JSON.stringify({ 'total_views': 1 }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const resData = await res.json();
        setTotalViews(resData.total_views);
    }

    useEffect(() => {
        fetchViews();
    },[])

    return (
        <div className=" flex w-full items-center justify-between text-center bg-gray-500 p-7 text-white px-20">
            <h1>{`Designed and developed by `}
                <Link href={'github.com/raunakdiesfromcode'} className=" underline">Raunak</Link>
            </h1>
            <h1>
                {`Total views= ${totalViews}`}
            </h1>
        </div>
    );
};

export default Footer;
