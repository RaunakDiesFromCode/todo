"use client"
import React from 'react'

const Logout = () => {

    localStorage.removeItem('user_token');
    location.href = '/login';

    return (
        <div></div>
    )
}

export default Logout