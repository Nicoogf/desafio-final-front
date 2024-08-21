import Link from 'next/link';
import React from 'react'
import { FiEdit } from "react-icons/fi";
import { CiCircleCheck } from "react-icons/ci";

const ConfirmPage = () => {
    return (
        <main>
             <Link href="/dashboard/get-money/select-card/id" className='mt-8 mb-4 block w-[90%] max-w-[720px] mx-auto text-lg font-semibold cursor-pointer'> Ir Atras </Link>
            <section className='mt-8 shadow-md rounded-lg  p-8 bg-graydark mx-auto w-[90%] max-w-[720px]'>
                <h6 className='text-xl font-semibold text-greenlime'> Revisa que esta todo bien </h6>
                <Link href="/" className='flex flex-row gap-x-4 items-center mt-4'>
                    <div className='text-white'>
                        <h6> Vas a transferir </h6>
                        <h6 className='font-semibold text-lg'> $300 </h6>
                    </div>
                    <FiEdit className='text-greenlime text-2xl' />
                </Link>

                <div className='text-white mt-4'>
                    <h6 className='text-sm'> Para </h6>
                    <h6 className='text-lg font-semibold'> Cuenta Propia </h6>
                </div>

                <div className='text-white mt-4'>
                    <h6 className='text-sm'> Brubank </h6>
                    <h6 className='text-lg font-semibold'> CVU  0254147858748575 </h6>
                </div>

                <Link href="" className='block text-center mt-4 bg-greenlime px-8 py-3 rounded-lg font-semibold max-w-[220px] ml-auto'>
                    Continuar
                </Link>

            </section>

            <div className='mx-auto w-[90%] max-w-[720px]'>
                <section className="mt-8 shadow-md rounded-lg  p-8 bg-greenlime ">
                    <CiCircleCheck className='text-6xl mx-auto' />
                    <h6 className='font-semibold text-2xl text-center'> Ya cargamos el dinero en tu cuenta </h6>
                </section>
                
                <div className='flex flex-row gap-x-2 justify-end'>
                <Link href="/dashboard" className='shadow-lg block text-center mt-4 bg-graydark text-greenlime px-8 py-4 rounded-lg font-semibold w-[100%]  max-w-[260px]'> Ir a inicio </Link>
                <button className='shadow-lg block text-center mt-4 bg-graydark text-greenlime px-8 py-4 rounded-lg font-semibold max-w-[260px] w-[100%] '> Descargar Comprobante </button>
                </div>
               
            </div>



        </main>
    )
}

export default ConfirmPage