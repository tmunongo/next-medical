import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-gray-300'>
      <div className='h-screen bg-teal-500' >

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
