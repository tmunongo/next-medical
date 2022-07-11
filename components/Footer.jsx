import Link from 'next/link'
import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='p-2 md:p-4'>
        {/* Contacts bar */}
        <div className='h-40 flex items-center justify-around flex-wrap md:flex-nowrap'>
            <div>
                <p className='flex'>
                    <Link href='#'>
                        Check out our brochure 
                    </Link>
                </p>
            </div>
            <div>
                <p className='flex'>
                    <FaPhone size={25} />
                    +263777123456
                </p>
            </div>
            <div>
                <p className='flex'>
                    <FaPhone size={25} />
                    +263`(04)`45678900
                </p>
            </div>
            <div>
                <p className='flex'>
                    <FaFacebookSquare size={25} />
                    <a href='https://www.facebook.com'>
                        Facebook
                    </a>
                </p>
            </div>
            <div>
            <p className='flex'>
                    <FaLinkedin size={25} />
                    <a href='https://www.linkedin.com'>
                        LinkedIn
                    </a>
                </p>
            </div>
            <div>
                <p className='flex'>
                    <FaTwitter size={25} />
                    <a href='https://www.twitter.com'>
                        Twitter
                    </a>
                </p>
            </div>
        </div>
        {/* Links */}
        <div className='flex p-1 md:p-4 justify-center'>
            <div className='grid grid-cols-2 grid-rows-4 md:grid-cols-3'>
                {/* box 1 */}
                        <div className='p-1 md:p-4'>
                            <ul className=''>
                                <p className='text-xl font-bold pb-2 uppercase'>
                                    <Link href="/about">
                                        About Us
                                    </Link>
                                </p>
                                    <a href='#' className='flex md:text-md items-center'>
                                        Our Values, Mission, and Vision
                                    </a>
                                <li>
                                    <a href='#' className='flex md:text-md items-center'>
                                        Our Executive Team
                                    </a>
                                </li>
                                <li>
                                    <a href='#' className='flex md:text-md items-center'>
                                        Our Operational Leadership Team
                                    </a>
                                </li>
                                <li>
                                    <a href='#' className='flex md:text-md items-center'>
                                        Our Corporate, Social Responsibility
                                    </a>
                                </li>
                            </ul>
                        </div>
                {/* box 2 */}
                <div className='p-1 md:p-4'>
                    <ul className=''>
                        <p className='text-xl font-bold pb-2 uppercase'>
                            <Link href="/about">
                                Services
                            </Link>
                        </p>
                            <a href='#' className='flex md:text-md items-center'>
                                Independent Medical Examinations
                            </a>
                        <li>
                            <a href='#' className='flex md:text-md items-center'>
                                Medical Peer Reviews
                            </a>
                        </li>
                        <li>
                            <a href='#' className='flex md:text-md items-center'>
                                Second Opinion
                            </a>
                        </li>
                        <li>
                            <a href='#' className='flex md:text-md items-center'>
                                Project Management
                            </a>
                        </li>
                    </ul>
                </div>
                {/* box 3 */}
                <div className='p-1 md:p-4'>
                    <ul className=''>
                        <p className='text-xl font-bold pb-2 uppercase'>
                            <Link href="/about">
                                Expertise
                            </Link>
                        </p>
                            <a href='#' className='flex md:text-md items-center'>
                                Short and Long-Term Disability
                            </a>
                        <li>
                            <a href='#' className='flex md:text-md items-center'>
                                Independent Review Services
                            </a>
                        </li>
                        <li>
                            <a href='#' className='flex md:text-md items-center'>
                                Worker&apos;s Compensation 
                            </a>
                        </li>
                    </ul>
                </div>
                {/* box 4 */}
                <div className='p-1 md:p-4'>
                    <ul className=''>
                        <p className='text-xl font-bold pb-2 uppercase'>
                            <Link href="/about">
                                Careers
                            </Link>
                        </p>
                            <a href='#' className='flex md:text-md items-center'>
                                Our Hiring Team
                            </a>
                        <li>
                            <a href='#' className='flex md:text-md items-center'>
                                See All Openings
                            </a>
                        </li>
                        <li>
                            <a href='#' className='flex md:text-md items-center'>
                                Apply Now 
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Locations */}
            {/* box 5 */}
            <div className='flex flex-col flex-wrap md:items-center p-1 md:p-4 w-1/4'>
                <div>
                    <p className='text-xl font-bold pb-2 uppercase'>
                        <Link href="/">
                            Locations
                        </Link> <br />
                        Head Office
                    </p>
                    <p className='text-gray-500'>
                        Medical Consultancy Corp. <br />
                        Sam Nujoma Street <br />
                        CBD, Harare <br />
                        Zimbabwe <br />
                    </p>
                </div>
            {/* box 6 */}
            <div>
                    <p className='text-xl font-bold pb-2 uppercase'>
                        Bulawayo Office
                    </p>
                    <p className='text-gray-500'>
                        Medical Consultancy Corp. <br />
                        Joshua M. Nkomo Street <br />
                        CBD, Bulawayo <br />
                        Zimbabwe <br />
                    </p>
                </div>
                {/* Botswana branch */}
                <div>
                    <p className='text-xl font-bold pb-2 uppercase'>
                        Botswana Office
                    </p>
                    <p className='text-gray-500'>
                        Medical Consultancy Corp. <br />
                        Sir Seretse Khama Street <br />
                        CBD, Gaborone <br />
                        Botswana <br />
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer