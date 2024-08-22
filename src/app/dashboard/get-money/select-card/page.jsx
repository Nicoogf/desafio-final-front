'use client'
import { useAuth } from '@/context/AuthContex';
import { useCards } from '@/context/CardContext';
import { useAccount } from '@/context/ProfileContext';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { IoIosAddCircleOutline } from "react-icons/io";
import { useRouter } from 'next/navigation';


const SelecCardPage = () => {

    const { fetchCards, cards } = useCards()
    const { user } = useAuth();
    const { accountDetails } = useAccount();
    const { selectedCardId, setSelectedCardId} = useCards();
    const { handleSubmit} = useForm()
    const router = useRouter()

    const handleCardSelection = (id) => {
        setSelectedCardId(id);
      };

    const onSubmit = handleSubmit(async () => {
        if(selectedCardId){
            router.push(`/dashboard/get-money/select-card/${selectedCardId}`)
        }
        return
    })

    useEffect(() => {
        fetchCards(accountDetails?.id, user?.token)
    }, [accountDetails])

    console.log(cards)
    console.log(selectedCardId)

    return (
        <main>
            <Link href="/dashboard/get-money" className='mt-8 mb-4 block w-[90%] max-w-[720px] mx-auto text-lg font-semibold cursor-point'> Ir Atras </Link>
            <form onSubmit={onSubmit} className='mt-8 w-[90%] mx-auto max-w-[720px] bg-graydark rounded-xl shadow-lg p-8'>
                <h6 className='text-greenlime text-lg font-semibold mb-4'> Seleccionar Tarjeta </h6>
                <section className='w-[100%] mx-auto bg-white rounded-lg p-4'>
                    <h6 className='text-lg font-semibold'> Tus Tarjetas </h6>
            

                    <section className='flex flex-col'>
                        {cards.map((card) => (
                            <article key={card.id} className='flex flex-row items-center justify-between border-b border-gray-300 py-4'>
                                <div className='flex flex-row items-center gap-x-7'>
                                    <div className='w-8 h-8 rounded-full bg-greenlime' />
                                    <h6>Terminado en {String(card.number_id).slice(-4)}</h6>
                                </div>
                                <input
                                    type='radio'
                                    name='selectedCard'
                                    value={card.id}
                                    checked={selectedCardId === card.id}
                                    onChange={() => handleCardSelection(card.id)}
                                    className='rounded-full'
                                />
                            </article>
                        ))}
                    </section>
                </section>

                <section className='mt-4 flex flex-row items-center justify-between'>
                    <Link className='flex flex-row items-center gap-x-4' href="/dashboard/add-card">
                        <IoIosAddCircleOutline className='text-greenlime text-2xl' />
                        <h6 className='text-greenlime font-semibold'> Nueva Tarjeta </h6>
                    </Link>

                    <button className='bg-greenlime px-8 py-3 rounded-lg font-semibold'>
                        Continuar
                    </button>
                </section>

            </form>
        </main>
    )
}

export default SelecCardPage