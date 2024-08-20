import Link from 'next/link';
import React from 'react';
import { MdOutlineModeEditOutline } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";

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

      <section className='w-[90%] max-w-[720px] mx-auto bg-graydark mt-8 shadow-lg rounded-xl p-8 flex flex-col gap-y-6'> 
      <h6 className='text-white font-semibold '> Copia tu cvu o alias para ingresar o transferir dinero desde otra cuenta</h6>
      <article className='flex flex-row items-center justify-between'>
        <div>
          <h6 className='text-greenlime font-semibold'> CVU </h6>
          <h6 className='text-gray-200'> 023254147778789789789</h6>
        </div> 
        <MdOutlineContentCopy className='text-greenlime text-3xl' />

      </article>

      <article className='flex flex-row items-center justify-between'>
        <div>
          <h6 className='text-greenlime font-semibold'> Aias </h6>
          <h6 className='text-gray-200'> FERNET.ATUN.CABIAR</h6>
        </div> 
        <MdOutlineContentCopy className='text-greenlime text-3xl' />

      </article>
      </section>
    </main >
  )
}

export default ProfilePage