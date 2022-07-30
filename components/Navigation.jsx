import Link from 'next/link'
import React, { useState } from 'react'
import { BsDot } from 'react-icons/bs'
import { CgClose, CgMenuGridR } from 'react-icons/cg'
import { HiOutlineXCircle, HiSearch } from 'react-icons/hi'
import { HeaderName } from './HeaderName'

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
    <div className="h-20 md:h-24 bg-white flex flex-nowrap items-center p-4 sticky top-0 w-full z-20">
      {/* left side */}
      <HeaderName />
      {/* center */}
      <div className="md:flex grow-[2] items-center justify-center">
        {/* search button */}
        <div
          onClick={handleSearch}
          className="flex items-center justify-end pr-2 md:pr-12"
        >
          <div className="hidden cursor-grab md:flex text-l font-extrabold text-right uppercase">
            Search
          </div>
          <div className="cursor-grab pl-2 text-black">
            <HiSearch size={35} />
          </div>
        </div>
        {/* Drop-down Search box */}
        {search ? (
          <div className="bg-cyan-800 absolute text-white flex justify-around h-32 items-center left-0 top-0 w-screen p-2 z-10 ease-in duration-300">
            <div className="flex justify-start">
              <div>
                <input
                  type="text"
                  className="rounded-lg p-4 mr-2 w-full text-black"
                  placeholder="Input search term here..."
                />
              </div>
              <div className="m-2 p-1 bg-white rounded-2xl text-black">
                <HiSearch size={35} />
              </div>
            </div>
            <div
              className="cursor-grab flex justify-end"
              onClick={handleSearch}
            >
              <HiOutlineXCircle size={35} />
            </div>
          </div>
        ) : (
          <div className="bg-cyan-800 absolute text-white flex justify-around h-32 items-center left-0 top-[-20vh] w-screen p-2 z-10 ease-in duration-300">
            <div className="flex justify-start">
              <div>
                <input
                  type="text"
                  className="rounded-lg p-4 mr-2 w-full text-black"
                  placeholder="Input search term here..."
                />
              </div>
              <div className="m-2 p-1 bg-white rounded-2xl text-black">
                <HiSearch size={35} />
              </div>
            </div>
            <div
              className="cursor-grab flex justify-end"
              onClick={handleSearch}
            >
              <HiOutlineXCircle size={35} />
            </div>
          </div>
        )}
      </div>
      {/* right side burger menu button*/}
      <div className="cursor-grab flex justify-end pr-2 md:pr-6">
        <div onClick={handleMenuClick}>
          {menu ? <CgClose size={40} /> : <CgMenuGridR size={40} />}
        </div>
      </div>
      {/* the menu proper */}
      {menu ? (
        <div className="bg-sky-800 absolute text-white md:grid md:grid-rows-2 md:grid-cols-3 justify-items-center items-center flex-column overflow-auto h-screen left-0 top-0 w-screen p-8 md:py-22 md:px-30 z-1000 ease-in duration-300">
          <div className="flex w-screen absolute top-4 left-0 px-2 md:px-12">
            <HeaderName />
            <div>
              <CgClose
                onClick={handleMenuClick}
                size={45}
                className="cursor-grab float-right text-black"
              />
            </div>
          </div>
          {/* About us Menu item */}
          <div className="p-4">
            <ul className="">
              <p className="text-3xl font-bold py-2">
                <Link href="/about">About Us</Link>
              </p>
              <a
                href="#"
                className="flex text-sm md:text-2xl items-center h-10"
              >
                <BsDot white size={30} />
                Our Values, Mission, and Vision
              </a>
              <li>
                <a
                  href="#"
                  className="flex text-sm md:text-2xl items-center h-10"
                >
                  <BsDot white size={30} />
                  Our Team
                </a>
              </li>
            </ul>
          </div>
          {/* Info and resources menu item */}
          <div className="p-4">
            <ul className="">
              <p className="text-3xl font-bold pb-4">
                <Link href="/about">Information and Resources</Link>
              </p>
              <li>
                <a href="#" className="flex text-sm md:text-2xl">
                  <BsDot white size={30} />
                  Webinars
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex text-sm md:text-2xl items-center h-10"
                >
                  <BsDot white size={30} />
                  Download Our Brochure
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex text-sm md:text-2xl items-center h-10"
                >
                  <BsDot white size={30} />
                  Recent Publications
                </a>
              </li>
            </ul>
          </div>
          {/* News and events */}
          <div className="p-4">
            <p className="text-3xl font-bold pb-4">
              <Link href="/about">News and Events</Link>
            </p>
            <ul className="">
              <li>
                <a
                  href="#"
                  className="flex text-sm md:text-2xl items-center h-10"
                >
                  <BsDot white size={30} />
                  View All News
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex text-sm md:text-2xl items-center h-10"
                >
                  <BsDot white size={30} />
                  View All Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex text-sm md:text-2xl items-center h-10"
                >
                  <BsDot white size={30} />
                  Sign Up For The Newsletter
                </a>
              </li>
            </ul>
          </div>
          {/* Our Partners */}
          <div className="p-4">
            <ul className="">
              <p className="text-3xl font-bold pb-4">
                <Link href="/about">Our Partners</Link>
              </p>
              <li>
                <a href="#" className="flex text-sm md:text-2xl">
                  <BsDot white size={30} />
                  Lorem Ipsem General Hospital
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex text-sm md:text-2xl items-center h-10"
                >
                  <BsDot white size={30} />
                  Gamma Medical Institution
                </a>
              </li>
            </ul>
          </div>
          {/* Careers */}
          <div className="p-4">
            <ul className="">
              <p className="text-3xl font-bold pb-4">
                <Link href="/about">Careers</Link>
              </p>
              <li>
                <a href="#" className="flex text-sm md:text-2xl">
                  <BsDot white size={30} />
                  Current Opportunities
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex text-sm md:text-2xl items-center h-10"
                >
                  <BsDot white size={30} />
                  Meet The Hiring Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex text-sm md:text-2xl items-center h-10"
                >
                  <BsDot white size={30} />
                  Unsolicited Application
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Us */}
          <div className="p-4">
            <ul className="">
              <p className="text-3xl font-bold pb-4">
                <Link href="/about">Contact Us</Link>
              </p>
              <li>
                <a href="#" className="flex text-sm md:text-2xl">
                  <BsDot white size={30} />
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex text-sm md:text-2xl items-center h-10"
                >
                  <BsDot white size={30} />
                  Locations
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="bg-gray-700 absolute text-white grid grid-rows-3 grid-cols-3 h-screen items-center left-0 top-[-100vh] w-screen p-2 z-10 ease-in duration-300">
          <div></div>
        </div>
      )}
    </div>
  )
}

export default Navigation
