import Link from 'next/link'
import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";

const SelecCardPage = () => {
  return (
    <main>
        <section className='mt-8 w-[90%] mx-auto max-w-[720px] bg-graydark rounded-xl shadow-lg p-8'>
            <h6 className='text-greenlime text-lg font-semibold mb-4'> Seleccionar Tarjeta </h6>
            <section className='w-[100%] mx-auto bg-white rounded-lg p-4'>
                <h6 className='text-lg font-semibold'> Tus Tarjetas </h6>
                <section className='flex flex-col'>

                    <article className='flex flex-row items-center justify-between border-b border-gray-300 py-4'>
                        <div className='flex flex-row items-center gap-x-7'>
                            <div className='w-8 h-8 rounded-full bg-greenlime'/>
                            <h6> Terminado en 0000 </h6>
                        </div>
                        <input type='checkbox' className='rounded-full'/>
                    </article>

                </section>               
            </section>

            <section className='mt-4 flex flex-row items-center justify-between'> 
            <Link className='flex flex-row items-center gap-x-4' href="/">
                    <IoIosAddCircleOutline className='text-greenlime text-2xl'/>
                    <h6 className='text-greenlime font-semibold'> Nueva Tarjeta </h6>
            </Link>

            <Link href="/dashboard/get-money/select-card/id" className='bg-greenlime px-8 py-3 rounded-lg font-semibold'>
                Continuar
            </Link>
            </section>
            
        </section>
    </main>
  )
}

export default SelecCardPage