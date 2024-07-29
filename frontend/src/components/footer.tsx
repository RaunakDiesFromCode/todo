"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Footer = () => {


    return (
        <div className="flex w-full items-center justify-center text-center bg-gray-500 p-7 text-white px-20">
            <h1>{`Designed and developed by `}
                <Link href="https://github.com/raunakdiesfromcode" className="underline">Raunak</Link>
            </h1>
        </div>
    );
};

export default Footer;
