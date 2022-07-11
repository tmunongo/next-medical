import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Healthcare from '../public/assets/healthcare.jpg'
import Europe from '../public/assets/europe.jpg'
import Meeting from '../public/assets/meeting.jpg'
import { useEffect, useRef, useState } from 'react'

const banners = [
  {
    id: 1, 
    img: Meeting, 
    header: 'Treatment strategies that work', 
    content: 'We have a team of experts ready to tackle any problem that you might have.',
  },
  {
    id: 2, 
    img: Healthcare, 
    header: 'Understanding health beyond diseases.', 
    content: 'We have a team of experts ready to tackle any problem that you might have.',
  },
  {
    id: 3, 
    img: Europe, 
    header: 'We are expanding into Europe!', 
    content: 'We have a team of experts ready to tackle any problem that you might have.',
  },
]

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

const delay = 2500

export default function Home() {
  const [pos, setPos] = useState(0)
  const timeoutRef = useRef(null)

  const resetTimeout = () => {
    if(timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    document.title ='Next Med Home'
    resetTimeout()
    timeoutRef.current = setTimeout(() =>
      setPos((prevPos) => 
        prevPos === banners.length - 1 ? 0 : prevPos + 1), 
      delay)

      return () => {
        resetTimeout()
      }
    },[pos]
  )

  return (
    <div className='bg-gray-300'>
      <div className='h-screen bg-white px-48 py-20 items-center' >
        {banners.map((item, index) => {
          return(
            // main div
              <div key={index} className={classNames('flex flex-col h-3/4')} >
                {/* div for horizontal slider items */}
                <div className='flex'>
                    {/* div for left column */}
                  <div className=' bg-white items-center p-1 md:p-4 flex flex-col justify-evenly w-1/2'>
                    <p className='text-4xl text-blue-600'>
                      {item.header}
                    </p>
                    <p className='text-xl'>
                      {item.content}
                    </p>
                    <p className='max-w-max p-4 text-blue-900 font-bold border-blue-900 border-solid border-2'>
                      <Link href='/'>
                        Read More
                      </Link>
                    </p>
                  </div>
                  {/* div for right column */}
                  <div className='block justify-end items-end p-4 w-1/2'>
                    <Image src={item.img.src} alt='banner' height={500} width={500} />
                  </div>
                </div>
                {/* div for slider buttons */}
                <div className='bg-purple-300 h-20 items-center'>
                  
                </div>
              </div>
          )
      })}
      </div>
      <div className='h-screen bg-rose-400'>

      </div>
      <div className='h-screen bg-cyan-400'>

      </div>
      <div className='h-[240px] bg-rose-800 text-white hover:h-[280px] hover:ease-in hover:duration-300 z-2 cursor-grab'>
        <div className='flex flex-col items-center justify-around p-4 h-full'>
          <p className='text-3xl font-thin'>
            Find out how we can help you</p>
          <div>
            <Link href='/contact'>
              <p className='p-4 border-[1px] border-solid border-white text-lg'>
                Contact Us
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
