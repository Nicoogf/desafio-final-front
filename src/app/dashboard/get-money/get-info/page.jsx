import Link from 'next/link'
import React from 'react'
import { MdOutlineContentCopy } from 'react-icons/md'

const GetInfoAcount = () => {
    return (
        <main>
            <Link href="/dashboard/get-money" className='mt-8 mb-4 block w-[90%] max-w-[720px] mx-auto text-lg font-semibold cursor-point'> Ir Atras </Link>
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
        </main>

    )
}

export default GetInfoAcount