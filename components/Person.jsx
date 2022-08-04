import Image from 'next/image'
import React from 'react'
import { BsPerson } from 'react-icons/bs'

const Person = ({ gender, name, email, cell, picture, nationality }) => {
  console.log('image:', picture)
  return (
    <div className="flex flex-col items-center justify-center m-2 p-4 border border-black rounded">
      {/* <p>{name.title}</p> */}
      <Image
        src={picture}
        alt={name}
        height={250}
        width={250}
        className="rounded-full"
      />
      <p className="my-4">{name}</p>
      <BsPerson size={45} />
      <p className="text-center">Name</p>
    </div>
  )
}

export default Person
