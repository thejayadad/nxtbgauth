import React from 'react'
import Image from "next/image"
import Link from "next/link"


const Navbar = () => {
  return (
    <div>
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
    <Link href="/">
    <div className='w-[100px] md:w-[129px] md:h-[30px] h-[38px]'>
        LOGO IMAGE
    </div>
    </Link>
        </div>

    </div>
  )
}

export default Navbar