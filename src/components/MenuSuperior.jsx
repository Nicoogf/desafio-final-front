import React from 'react'
import LogoOff from "../../public/logo-off.png"
import Image from 'next/image'

const MenuSuperior = () => {
  return (
    <nav className='absolute top-0 w-full bg-greenlime p-3'>
        <Image src={LogoOff} alt="Logo Digital Money" className='w-16'/>
    </nav>
  )
}

export default MenuSuperior