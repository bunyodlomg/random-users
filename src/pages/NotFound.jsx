import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className='p-10'>
            <Link to="/" className='bg-slate-600 text-white p-1  rounded-md'>{`< Back`}</Link>
            <div className='flex flex-col items-center gap-6'>
                <img className='rounded-full w-52 mx-auto mt-32' src="./not-found.gif" alt="page not found" />
                <h1 className='text-2xl'>Page Not Found..</h1>
            </div>
        </div>
    )
}

export default NotFound