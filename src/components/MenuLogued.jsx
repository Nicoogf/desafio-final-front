import React from 'react'
import LogoOn from "../../public/logo-on.png"
import Image from 'next/image'
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi";



const MenuLogued = ({text}) => {

  return (
    <nav className='absolute top-0 w-full bg-graydark p-3 flex flex-row justify-between'>
      <Image src={LogoOn} alt="Logo Digital Money" className='w-16 object-contain ml-4' />
      <section className='flex items-center'>
       <Link href="/dashboard"className='bg-greenlime text-graydark rounded-lg px-3 py-2 font-semibold mr-4'> {text} </Link>
       <GiHamburgerMenu className='text-greenlime text-4xl cursor-pointer lg:hidden'/>
      </section>
      

    </nav>
  )
}

export default MenuLogued 