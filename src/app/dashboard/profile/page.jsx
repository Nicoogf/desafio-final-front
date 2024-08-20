import Link from 'next/link';
import React from 'react';
import { MdOutlineModeEditOutline } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const ProfilePage = () => {
  return (
    <main>
      <section className='w-[90%] max-w-[720px] mx-auto bg-white rounded-xl mt-8 shadow-lg flex flex-col'>
        <h3 className='text-xl font-bold p-4'> Tus Datos </h3>

        <section className='p-4'>

          <div className='flex flex-row justify-between gap-x-8 py-2 border-b border-gray-300'>
            <h6> Email </h6>
            <article className='flex flex-row justify-around items-center gap-x-4'>
              <h6> nicolas falabella@gmail.com </h6>
              <Link href="/">
                <MdOutlineModeEditOutline />
              </Link>
            </article>
          </div>

          <div className='flex flex-row justify-between gap-x-8 py-2 border-b border-gray-300'>
            <h6> Nombre y Apellido </h6>
            <article className='flex flex-row justify-around items-center gap-x-4'>
              <h6> nicolas falabella@gmail.com </h6>
              <Link href="/">
                <MdOutlineModeEditOutline />
              </Link>
            </article>
          </div>

          <div className='flex flex-row justify-between gap-x-8 py-2 border-b border-gray-300'>
            <h6> CUIT </h6>
            <article className='flex flex-row justify-around items-center gap-x-4'>
              <h6> nicolas falabella@gmail.com </h6>
              <Link href="/">
                <MdOutlineModeEditOutline />
              </Link>
            </article>
          </div>

          <div className='flex flex-row justify-between gap-x-8 py-2 border-b border-gray-300'>
            <h6> Telefono </h6>
            <article className='flex flex-row justify-around items-center gap-x-4'>
              <h6> nicolas falabella@gmail.com </h6>
              <Link href="/">
                <MdOutlineModeEditOutline />
              </Link>
            </article>
          </div>

          <div className='flex flex-row justify-between gap-x-8 py-2 border-b border-gray-300'>
            <h6> Contraseña </h6>
            <article className='flex flex-row justify-around items-center gap-x-4'>
              <h6> nicolas falabella@gmail.com </h6>
              <Link href="/">
                <MdOutlineModeEditOutline />
              </Link>
            </article>
          </div>

        </section>

        
    </section>

       <Link href="/dahsboard/cards" className='w-[90%] max-w-[720px] mx-auto flex flex-row justify-between items-center px-20 py-10 rounded-xl shadow-lg mt-6 bg-greenlime'>
          <h6 className='font-semibold text-lg'> Gestiona los medios de pagos</h6>
        <FaArrowRight />
      </Link>

      <section className='w-[90%] max-w-[720px] mx-auto bg-graydark mt-8'> 
a
      </section>
    </main >
  )
}

export default ProfilePage