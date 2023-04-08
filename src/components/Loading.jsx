import React from 'react'
import './Loader.css'
function Loading() {
    return (
        // <div className='w-full fixed -translate-y-10 -translate-x-3 z-10'>
        //     <img className='mx-auto w-40 animate-spin' src="https://assets-global.website-files.com/60b1962ffda0a42f779c765b/60b49c0c1ddaa83a51c9425c_oran_web_master_rotate.png" alt="loader" />
        // </div>
        <div className="content flex justify-center ml-24 w-full">
            <div className="player_one"></div>
            <div className="player_two"></div>
            <div className="ball"></div>
        </div>
    )
}

export default Loading