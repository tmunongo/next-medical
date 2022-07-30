import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Europe from '../public/assets/europe.jpg'
import Healthcare from '../public/assets/healthcare.jpg'
import Meeting from '../public/assets/meeting.jpg'

const banners = [
  {
    id: 1,
    img: Meeting,
    header: 'Treatment strategies that work',
    content:
      'We have a team of experts ready to tackle any problem that you might have.',
  },
  {
    id: 2,
    img: Healthcare,
    header: 'Understanding health beyond diseases.',
    content:
      'We have a team of experts ready to tackle any problem that you might have.',
  },
  {
    id: 3,
    img: Europe,
    header: 'We are expanding into Europe!',
    content:
      'We have a team of experts ready to tackle any problem that you might have.',
  },
]

const colors = ['#0088FE', '#00C49F', '#FFBB28']

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

const delay = 1000000

export default function Home() {
  const [pos, setPos] = useState(0)
  const timeoutRef = useRef(null)

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    document.title = 'Next Med Home'
    resetTimeout()
    timeoutRef.current = setTimeout(
      () =>
        setPos((prevPos) => (prevPos === banners.length - 1 ? 0 : prevPos + 1)),
      delay
    )

    return () => {
      resetTimeout()
    }
  }, [pos])

  return (
    <div>
      <div className="bg-white">
        <div className="slideshow">
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-pos * 100}%, 0, 0)` }}
          >
            {banners.map((item, index) => (
              <div className={classNames('slide', '')} key={index}>
                <div
                  key={index}
                  className="flex flex-col-reverse flex-wrap md:flex-row md:flex-nowrap md:justify-between w-full"
                >
                  {/* div for left column */}
                  <div className=" bg-white items-center p-1 md:p-4 flex flex-col flex-5 md:justify-evenly md:w-1/2">
                    <p className="text-2xl md:text-4xl text-blue-600 whitespace-pre-wrap">
                      {item.header}
                    </p>
                    <p className="text-xl whitespace-pre-wrap">
                      {item.content}
                    </p>
                    <p className="max-w-max p-1 md:p-4 text-blue-900 font-bold border-blue-900 border-solid border-2 mt-4 md:mt-0">
                      <Link href="/">Read More</Link>
                    </p>
                  </div>
                  {/* div for right column */}
                  <div className="block justify-end items-end p-4 md:w-1/2 -z-10">
                    <Image
                      src={item.img.src}
                      alt="banner"
                      height={500}
                      width={600}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="slideshowDots">
          {colors.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${pos === idx ? ' active' : ''}`}
              onClick={() => {
                setPos(idx)
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className="h-full">
        <div className="flex flex-col md:flex-row items-center justify-center text-white my-8 w-screen">
          <div className="bg-blue-700 h-[400px] w-full md:w-[400px] hover:bg-blue-800 hover:h-[440px] hover:z-100 p-10 transition-all duration-500">
            <div className="flex flex-col text-left">
              <h1 className="text-xl font-bold my-2">Medical Safety</h1>
              <h3 className="text-l font-bold my-2">Sub Heading</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                fermentum bibendum odio, sed pretium ipsum viverra sit amet.
                Quisque massa dolor, accumsan id aliquet bibendum, accumsan
                rutrum velit
              </p>
            </div>
          </div>
          <div className="bg-green-400 flex-col h-[400px] w-full md:w-[400px] hover:bg-green-500 hover:h-[440px] md:hover:w-[440px] z:20 hover:z-100  p-10 transition-all duration-500 text-center">
            <h1 className="text-xl font-bold my-2">Regulatory Information</h1>
            <h3 className="text-l font-bold my-2">
              How regulations affect your practice
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              fermentum bibendum odio, sed pretium ipsum viverra sit amet.
              Quisque massa dolor, accumsan id aliquet bibendum, accumsan rutrum
              velit
            </p>
          </div>
          <div className="bg-violet-800 flex-col h-[400px] w-full md:w-[400px] hover:bg-violet-900 hover:h-[440px] hover:z-100 p-10 transition-all duration-500 text-right">
            <h1 className="text-xl font-bold my-2">Medical Consultancy</h1>
            <h3 className="text-l font-bold my-2">
              Bridging business and medicine
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              fermentum bibendum odio, sed pretium ipsum viverra sit amet.
              Quisque massa dolor, accumsan id aliquet bibendum, accumsan rutrum
              velit
            </p>
          </div>
        </div>
      </div>
      <div className="h-screen bg-cyan-400"></div>
      <div className="h-[240px] bg-rose-800 text-white hover:h-[280px] hover:ease-in hover:duration-300 z-2 cursor-grab">
        <div className="flex flex-col items-center justify-around p-4 h-full">
          <p className="text-3xl font-thin">Find out how we can help you</p>
          <div>
            <Link href="/contact">
              <p className="p-4 border-[1px] border-solid border-white text-lg">
                Contact Us
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
