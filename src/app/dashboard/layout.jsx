import MenuLogued from '@/components/MenuLogued'
import Cookies from 'js-cookie'
import React from 'react'

const Dashboard = async({ children }) => {

    const token = await Cookies.get("authToken")
    console.log(token)

    return (
        <section className="grid grid-cols-12 w-full max-w-[1920px] mx-auto rounded-xl bg-lime-200 relative overflow-hidden overflow-y-scroll h-[100%]">

            <MenuLogued link="register" text="Registrate" />

            <nav className='hidden lg:grid lg:col-span-3 xl:col-span-2 bg-greenlime h-[100%]'>
                a 
            </nav>

            <section className='mt-14 grid col-span-12 lg:col-span-9 xl:col-span-10 bg-lightmain overflow-hidden overflow-y-scroll'>
                {children}
            </section>

            <footer className='bg-greylight text-greenlime absolute bottom-0 w-full p-3'>
a
            </footer>

        </section>
    )
}

export default Dashboard