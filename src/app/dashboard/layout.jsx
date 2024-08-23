'use client'
import MenuLogued from '@/components/MenuLogued'
import React from 'react'

import { useAuth } from '@/context/AuthContex';
import Link from 'next/link';
import { useAccount } from '@/context/ProfileContext';
import { useTransaction } from '@/context/transactionContext';

const Dashboard = ({ children }) => {   

    const { user } = useAuth()
    const { accountDetails } = useAccount()
    const { transactions } = useTransaction()

    
    console.log("DATA:" , user)
    console.log(accountDetails)
    console.log(transactions)

    return (
        <section className="grid grid-cols-12 w-full max-w-[1920px] mx-auto rounded-xl bg-lime-200 relative overflow-hidden overflow-y-scroll h-[100%]">

            <MenuLogued link="register" text={user?.username} />

            <nav className='hidden lg:grid lg:col-span-3 xl:col-span-2 bg-greenlime h-[100%] '>
                <div className='mt-20 flex flex-col gap-y-2 p-8'> 
                <Link href="/dashboard" className='font-semibold hover:font-bold'> Inicio </Link>
                <Link href="/dashboard/activity" className='font-semibold hover:font-bold'> Actividad </Link>
                <Link href="/dashboard/profile" className='font-semibold hover:font-bold'> Tu Perfil </Link>
                <Link href="/dashboard/get-money" className='font-semibold hover:font-bold'> Cargar Dinero </Link>
                <Link href="/dashboard/pay-services" className='font-semibold hover:font-bold'> Pagar Servicios  </Link>
                <Link href="/dashboard/cards" className='font-semibold hover:font-bold'> Tarjetas </Link>
                <Link href="/" className='font-semibold hover:font-bold'> Cerrar Sesion </Link>  
                </div>              
            </nav>

            <section className='mt-14 grid col-span-12 lg:col-span-9 xl:col-span-10 bg-lightmain overflow-hidden overflow-y-scroll h-[100%]'>
                {children}
            </section>

            <footer className='bg-greylight text-greenlime absolute bottom-0 w-full p-3 hidden lg:flex '>
                2024 Digital Money House
            </footer>

        </section>
    )
}

export default Dashboard