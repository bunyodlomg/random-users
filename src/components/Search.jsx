import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation';

import { IoIosRefresh } from 'react-icons/io'
import { GiMagicBroom } from 'react-icons/gi'
import 'animate.css';
function Search({ setRefresh, refresh, clear, setClear }) {

    const searchFunc = (e) => {
        console.log(e.target.value);
    }

    const clearFunc = () => {
        setClear(false)
    }
    const refreshFunc = () => {
        setRefresh(!refresh)
        setClear(true)
    }

    return (
        <div>
            <TypeAnimation
                sequence={[
                    'the Author',
                    2000,
                    'Bunyod ☺',
                    1000,
                    'Pulatov',
                    1000,

                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className='animate__animated animate__backInUp text-5xl mt-10 flex justify-center'
            />
            <div className={`${refresh ? 'animate__animated' : ''} animate__zoomInDown pt-20 mb-20 flex flex-wrap justify-center gap-2 px-5`}>
                <input onChange={searchFunc} className="text-xl focus:font-semibold placeholder:font-mono placeholder:text-slate-900 placeholder:text-xl block bg-inherit w-80 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" />
                <div className='flex flex-wrap gap-2 sm:mt-0 mt-5'>
                    <button onClick={refreshFunc} className='flex items-center justify-center gap-2 px-5 py-3 w-32 shadow-md active:opacity-75 hover:shadow-xl bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg'>
                        <p>Refresh</p>
                        <IoIosRefresh size={30} />
                    </button>
                    <button onClick={clearFunc} className='flex items-center justify-center gap-2 px-5 py-3 w-32 shadow-md active:opacity-75 hover:shadow-xl bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg'>
                        <p>Clear</p>
                        <GiMagicBroom size={30} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Search