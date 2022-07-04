import React, { useState } from 'react'
import { HeaderName } from './HeaderName'
import { HiOutlineXCircle, HiSearch } from "react-icons/hi"
import { CgClose, CgMenuGridR } from "react-icons/cg"

const Navigation = () => {
    const [menu, setMenu] = useState(false)
    const [search, setSearch] = useState(false)

    const handleMenuClick = () => {
        setMenu(!menu)
    }

    const handleSearch = () => {
        setSearch(!search)
    }
  return (
    <div className='h-20 mid:h-28 bg-white flex flex-nowrap items-center p-4 sticky top-0 w-full'>
        {/* left side */}
        <HeaderName />
        {/* center */}
        <div className='mid:flex grow-[2] items-center justify-center'>
            {/* search button */}
                <div  onClick={handleSearch} className='flex items-center justify-end pr-2 mid:pr-8'>
                        <div className='hidden cursor-grab mid:flex text-l font-extrabold text-right uppercase'>
                            Search
                        </div>
                        <div className='cursor-grab pl-2 text-black'>
                            <HiSearch size={35} />
                        </div>
                </div>
            {/* Drop-down Search box */}
            {   search
                ?    <div className='bg-gray-700 absolute text-white flex justify-around h-32 items-center left-0 top-0 w-screen p-2 z-10 ease-in duration-300'>
                        <div className='flex justify-start'>
                            <div>
                                <input type='text' className='rounded-lg p-4 mr-2 w-full text-black' placeholder='Input search term here...' />
                            </div>
                            <div className='m-2 p-1 bg-white rounded-2xl text-black'>
                                <HiSearch size={35} />
                            </div>
                        </div>
                        <div className='cursor-grab flex justify-end' onClick={handleSearch}>
                            <HiOutlineXCircle size={35}/>
                        </div> 
                    </div>
                :   <div className='bg-gray-700 absolute text-white flex justify-around h-32 items-center left-0 top-[-20vh] w-screen p-2 z-10 ease-in duration-300'>
                        <div className='flex justify-start'>
                            <div>
                                <input type='text' className='rounded-lg p-4 mr-2 w-full text-black' placeholder='Input search term here...' />
                            </div>
                            <div className='m-2 p-1 bg-white rounded-2xl text-black'>
                                <HiSearch size={35} />
                            </div>
                        </div>
                        <div className='cursor-grab flex justify-end' onClick={handleSearch}>
                            <HiOutlineXCircle size={35}/>
                        </div> 
                    </div>
            } 
        </div>
        {/* right side burger menu button*/}
        <div className='cursor-grab flex justify-end pr-2 mid:pr-6'>
            <div onClick={handleMenuClick}>
                {
                    menu
                    ?   <CgClose size={35}/>
                    :   <CgMenuGridR size={35}/>
                }
            </div>
        </div>
        {/* the menu proper */}
        {menu
            ?   <div className='bg-gray-700 absolute text-white grid grid-rows-3 grid-cols-3 h-screen left-0 top-0 w-screen p-2 z-10 ease-in duration-300'>
                    <div className='bg-pink-300'>

                    </div>
                    <div className='bg-purple-200'>

                    </div>
                    <div className='bg-green-200'>
                        <CgClose onClick={handleMenuClick} size={45} className='float-right text-black' />

                    </div>
                    <div>

                    </div>
                </div>
            :   <div className='bg-gray-700 absolute text-white grid grid-rows-3 grid-cols-3 h-screen items-center left-0 top-[-100vh] w-screen p-2 z-10 ease-in duration-300'>
                    <div>

                    </div>
                </div>
        }
    </div>
  )
}

export default Navigation