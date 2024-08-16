import Link from 'next/link'
import React from 'react'

const NavBarComponent = () => {
  return (
    <nav className='bg-orange-400 text-white absolute bottom-0 text-2xl'>
        <Link href={"/login"}> Login </Link>
        <Link href={"/register"}> Register </Link>
        <Link href={"/dashboard"}> Home </Link>
        <Link href={"/"}> Logout </Link>
    </nav>
  )
}

export default NavBarComponent