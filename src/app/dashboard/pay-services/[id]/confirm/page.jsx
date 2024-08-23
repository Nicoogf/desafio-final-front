'use client'
import { useAuth } from '@/context/AuthContex';
import { useCards } from '@/context/CardContext';
import { useAccount } from '@/context/ProfileContext';
import { useServices } from '@/context/ServicesContext';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';

const ConfirmPayPage = () => {
  const { fetchCards, cards } = useCards()
  const { user } = useAuth();
  const { accountDetails } = useAccount();
  const { selectedCardId, setSelectedCardId } = useCards();
  const { register, handleSubmit, setValue } = useForm();
  const {getService ,selectedServiceId,services} = useServices()
  const router = useRouter()


  useEffect(() => {
    if (user) {
      fetchCards(accountDetails?.id, user.token);
    }
  }, [accountDetails,]);

  console.log(cards)

  const onSubmit = (data) => {
    console.log("Datos del formulario:", data);
    router.push(`/dashboard/pay-services/${selectedServiceId}/confirm/success`)
  };

  const handleSelect = (id) => {
    setSelectedCardId(id);
    setValue('selectedCard', id);
  };

  useEffect(() => {
      getService(selectedServiceId)
  } , [])

  console.log(selectedCardId)
  console.log(selectedServiceId)
  return (
    <main>
      <section className='mt-8 p-8 shadow-md rounded-lg bg-graydark w-[90%] mx-auto max-w-[720px]'>

        <div className='flex flex-row justify-between items-center px-4 border-b border-gray-700'>
          <h6 className='py-4 font-semibold text-2xl text-greenlime'> {services?.name} </h6>
          <h6 className='text-white'> Ver detalles de pago </h6>
        </div>

        <div className='flex flex-row items-center justify-between px-4'>
          <h6 className='py-4 text-white font-semibold text-lg'> Total a pagar </h6>
          <h6 className='py-4 text-white font-semibold text-lg'> $ {services?.invoice_value}</h6>
        </div>
      </section>


      <form onSubmit={handleSubmit(onSubmit)} className='w-[90%] mx-auto max-w-[720px] bg-white rounded-xl shadow-md p-8 mt-8'>
        <section className='flex flex-col gap-y-2'>
          {cards.map(card => (
            <article
              key={card.id}
              className='flex flex-row items-center justify-between py-6 border-b-2 border-gray-400'>
              <div className='flex flex-row items-center gap-x-2'>
                <div className='h-5 w-5 rounded-full bg-greenlime' />
                <h6>Terminada en {card.number_id.toString().slice(-4)}</h6>
              </div>
              <input
                type="radio"
                value={card.id}
                {...register('selectedCard')}
                checked={selectedCardId === card.id}
                onChange={() => handleSelect(card.id)}
              />
            </article>
          ))}
        </section>



        <button type="submit" className='mt-4 p-2 bg-greenlime  text-greaydark font-semibold rounded ml-auto block'>
          Confirmar Selección
        </button>
      </form>


    </main>
  )
}

export default ConfirmPayPage