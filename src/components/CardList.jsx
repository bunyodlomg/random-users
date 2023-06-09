import React, { useEffect, useState } from 'react'
import { FaFemale } from 'react-icons/fa'
import { FaMale } from 'react-icons/fa'
import { BsTelephone } from 'react-icons/bs'
import { IoLocationSharp } from 'react-icons/io5'
import { FaBirthdayCake } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import 'animate.css'
AOS.init()

function CardList({ data, search }) {
    const sound = new Audio('./sounds/deleteSound.mp3')
    sound.load()
    let color = ''
    const [newArr, setNewArr] = useState([])

    useEffect(() => {
        if (data) {
            setNewArr(data.map((item) => {
                return (item)
            }))
        }
    }, [data])

    const deleteBtn = (id) => {
        sound.play()
        const filteredData = newArr.filter(item => item.login.md5 !== id);
        setNewArr(filteredData);
    };
    useEffect(() => {
        const searchFilter = (username) => {
            if (data) {
                const searchData = data.filter((user) => {
                    return (
                        user.login.username.includes(username)
                    )
                });
                setNewArr(searchData);
            }
        };
        searchFilter(search)
    }, [search])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 text-center lg:grid-cols-3 mx-auto gap-y-14 gap-x-4 px-5 my-24 '>
            {data && newArr.map((user) => {
                return (
                    <div key={user.login.md5} data-aos="zoom-in" className='relative mx-auto w-96 max-w-full py-10 backdrop-blur-3xl bg-[#231E39] text-yellow-100 rounded-xl shadow-2xl shadow-slate-700'>

                        {<MdDelete size={25} onClick={() => deleteBtn(user.login.md5)} className='hover:scale-125 active:scale-110 absolute right-5 top-5 hover:cursor-pointer text-red-500 text-2xl' />}
                        <span className='hidden'>
                            {color = user.gender === 'male' ? '#03BFCB' : '#EA4fC6'}
                        </span>
                        <img style={{ border: `3px solid ${color}`, padding: '5px' }} className={`mx-auto rounded-full p-1 mb-4`} src={user.picture.large} alt="user picture" />
                        <h3 className='text-lg font-semibold text-center'>
                            {user.name.first + ' ' + user.name.last}
                        </h3>
                        <div className='flex justify-center items-center gap-5 mt-2'>
                            {user.gender === 'male' ? <FaMale size={25} color={color} /> : <FaFemale size={25} color={color} />}
                            <h1 className='w-32 text-left'>{user.gender}</h1>
                        </div>
                        <div className='flex justify-center items-center gap-5 mt-2'>
                            <AiOutlineUser size={22} color={color} />
                            <h1 className='w-32 text-left'>{'@' + user.login.username}</h1>
                        </div>
                        <div className='flex justify-center items-center gap-5 mt-2'>
                            <BsTelephone size={18} color={color} />
                            <h1 className='w-32 text-left'>{user.phone}</h1>
                        </div>
                        <div className='flex justify-center items-center gap-5 mt-2'>
                            <FaBirthdayCake size={20} color={color} />
                            <h1 className='w-32 text-left'>{user.dob.date.substr(0, 10).replace('-', '/').replace('-', '/')}</h1>
                        </div>

                        <div className='flex justify-center items-center gap-5 mt-2'>
                            <IoLocationSharp size={25} color={color} />
                            <h1 className='w-32 text-left'>{user.location.country}</h1>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CardList

function newFunction(setMyData, data) {
    return setMyData(data)
}
