import Link from 'next/link'
import React from 'react'

const ConfirmPayPage = () => {
  return (
    <main>
      <section className='mt-8 p-8 shadow-md rounded-lg bg-graydark w-[90%] mx-auto max-w-[720px]'>

        <div className='flex flex-row justify-between items-center px-4 border-b border-gray-700'>
          <h6 className='py-4 font-semibold text-2xl text-greenlime'> Cablevision </h6>
          <h6 className='text-white'> Ver detalles de pago </h6>
        </div>

        <div className='flex flex-row items-center justify-between px-4'>
          <h6 className='py-4 text-white font-semibold text-lg'> Total a pagar </h6>
          <h6 className='py-4 text-white font-semibold text-lg'> $1.785,47 </h6>
        </div>
      </section>

      <form className='mt-8 w-[90%] mx-auto max-w-[720px]'>

        <section className='bg-white p-8 shadow-md rounded-lg'>
          <h6 className='text-lg font-semibold'> Tus Tarjetas</h6>

          <section className='flex flex-col gap-y-2'>

            <article className='flex flex-row items-center justify-between py-6 border-b-2 border-gray-400'>

              <div className='flex flex-row items-center gap-x-2'>
                <div className='h-5 w-5 rounded-full bg-greenlime' />
                <h6> Terminada en 0000</h6>
              </div>

              <input type="checkbock" className='custom-checkbox' />

            </article>

            <article className='flex flex-row items-center justify-between py-6 border-b-2 border-gray-400'>

              <div className='flex flex-row items-center gap-x-2'>
                <div className='h-5 w-5 rounded-full bg-greenlime' />
                <h6> Terminada en 0000</h6>
              </div>

              <input type="checkbock" className='custom-checkbox' />

            </article>

          </section>
        </section>

        <Link href="/dashboard/pay-services/id/confirm/success" className='px-20 py-3 rounded-lg bg-greenlime font-semibold mt-4 shadow-md block ml-auto w-[40%] text-center '> Pagar </Link>

      </form>


    </main>
  )
}

export default ConfirmPayPage