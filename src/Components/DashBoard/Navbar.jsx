import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/logo.svg'
import search from '../Images/search 1.svg'
import settings from '../Images/setting-5.svg'
import notification from '../Images/notification.svg'
import settings2 from '../Images/setting-2.svg'
import message from '../Images/message-question.svg'
import profile from '../Images/profile-circle.svg'

const Appbar = () => {
    return (
        <div className="flex justify-between items-center px-4 bg-secondary">
            <div className='flex items-center'>

                <Link><img src={logo} alt='logo' className="sm:flex hidden" /></Link>
            </div>
            <div className="flex items-center bg-white px-4 rounded-xl">

                <img src={search} alt='logo' className='w-6 h-6' />


                <input
                    className="p-2 sm:w-80 w-full bg-transparent border-none outline-none "
                    type="text"
                    placeholder="Search..."
                />


                <img src={settings} alt='logo' className='w-6 h-6' />

            </div>
            <div className="sm:flex hidden space-x-6 items-center">

                <img src={notification} alt='logo' className='w-6 h-6' />


                <img src={settings2} alt='logo' className='w-6 h-6' />


                <img src={message} alt='logo' className='w-6 h-6' />

                <img src={profile} alt='logo' className='w-6 h-6' />
                <label className='font-medium text-black'>Cristiano</label>
            </div>
        </div>

    )
}

export default Appbar