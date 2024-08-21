import Link from 'next/link'
import React from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";

const CardsPage = () => {
  return (
    <main>

      <Link href="/dashboard/add-card/" className="mt-8 w-[90%] max-w-[720px] mx-auto bg-graydark text-greenlime flex rounded-xl shadow-lg flex-col gap-y-4 px-10 py-12 justify-between">
      <h6 className='text-white font-semibold'> Agrega tu tarjeta de debito o credito </h6>
      <div className='flex flex-row items-center justify-between'>
        <article className='flex flex-row gap-x-4 items-center'>
          <IoMdAddCircleOutline className='text-4xl'/>
          <h6 className='font-semibold'> Nueva Tarjeta </h6>
        </article>
        <FaArrowRight className='text-3xl' />
      </div>
      </Link>

      <section>
        <h6> Tus Tarjetas  </h6>
      </section>
    </main>
  )
}

export default CardsPage