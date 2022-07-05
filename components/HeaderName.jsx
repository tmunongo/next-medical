import Link from 'next/link'
import React from 'react'
import { FaHospital } from 'react-icons/fa'

export const HeaderName = () => {
  return (
    <div className='flex grow items-center justify-start pl-4 md:pl-12 text-red-400 font-extrabold uppercase'>
        <div>
            <FaHospital size={20}  />
        </div>
        <div className='text-sm md:text-2xl'>
            <Link href='/'>
                Medical Consultancy
            </Link>
        </div>
    </div>
  )
}
