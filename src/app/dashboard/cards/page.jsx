// import Link from 'next/link'
// import React from 'react'
// import { IoMdAddCircleOutline } from "react-icons/io";
// import { FaArrowRight } from "react-icons/fa6";

// const CardsPage = () => {
//   return (
//     <main>

//       <Link href="/dashboard/add-card/" className="mt-8 w-[90%] max-w-[720px] mx-auto bg-graydark text-greenlime flex rounded-xl shadow-lg flex-col gap-y-4 px-10 py-12 justify-between">
//       <h6 className='text-white font-semibold'> Agrega tu tarjeta de debito o credito </h6>
//       <div className='flex flex-row items-center justify-between'>
//         <article className='flex flex-row gap-x-4 items-center'>
//           <IoMdAddCircleOutline className='text-4xl'/>
//           <h6 className='font-semibold'> Nueva Tarjeta </h6>
//         </article>
//         <FaArrowRight className='text-3xl' />
//       </div>
//       </Link>

//       <section className='mt-8 w-[90%] max-w-[720px] mx-auto bg-white rounded-xl shadow-md p-8'>
//         <h6 className='text-lg font-semibold mb-4'> Tus Tarjetas  </h6>
//         <section> 

//           <article className='flex flex-row items-center justify-between py-6 border-b-2 border-gray-400'>

//             <div className='flex flex-row items-center gap-x-2'>
//             <div className='h-5 w-5 rounded-full bg-greenlime'/>
//             <h6> Terminada en 0000</h6>
//             </div>

//             <button className='font-bold'> Eliminar </button>

//           </article>

//         </section>
//       </section>
//     </main>
//   )
// }

// export default CardsPage

// 'use client'
// import Link from 'next/link';
// import React, { useEffect } from 'react';
// import { IoMdAddCircleOutline } from "react-icons/io";
// import { FaArrowRight } from "react-icons/fa6";
// import { useCards } from '@/context/CardContext';// Asegúrate de importar correctamente tu contexto
// import { useAuth } from '@/context/AuthContex';// Asumiendo que tienes un contexto de autenticación
// import { useAccount } from '@/context/ProfileContext';

// const CardsPage = () => {
//     const { cards, loading,  fetchCards } = useCards();
//     const { user } = useAuth(); // Obtener información del usuario, como su accountId y token
//     const { accountDetails } = useAccount()

//     useEffect(() => {
//         if (user) {
//             fetchCards(accountDetails?.id, user.token); // Asegúrate de que user tenga estas propiedades
//         }
      
//     }, [accountDetails,]);

   

//     console.log(accountDetails)
//     return (
//         <main className='pb-20'>
//             <Link href="/dashboard/add-card/" className="mt-8 w-[90%] max-w-[720px] mx-auto bg-graydark text-greenlime flex rounded-xl shadow-lg flex-col gap-y-4 px-10 py-12 justify-between">
//                 <h6 className='text-white font-semibold'>Agrega tu tarjeta de débito o crédito</h6>
//                 <div className='flex flex-row items-center justify-between'>
//                     <article className='flex flex-row gap-x-4 items-center'>
//                         <IoMdAddCircleOutline className='text-4xl' />
//                         <h6 className='font-semibold'>Nueva Tarjeta</h6>
//                     </article>
//                     <FaArrowRight className='text-3xl' />
//                 </div>
//             </Link>

//             <section className='mt-8 w-[90%] max-w-[720px] mx-auto bg-white rounded-xl shadow-md p-8'>
//                 <h6 className='text-lg font-semibold mb-4'>Tus Tarjetas</h6>
//                 <section>
//                     {loading && <p>Cargando tarjetas...</p>}
//                     {error && <p>Error: {error}</p>}
//                     {cards.length === 0 && !loading ? (
//                         <p>No tienes tarjetas asociadas.</p>
//                     ) : (
//                         cards.map((card) => (
//                             <article key={card.id} className='flex flex-row items-center justify-between py-6 border-b-2 border-gray-400'>
//                                 <div className='flex flex-row items-center gap-x-2'>
//                                     <div className='h-5 w-5 rounded-full bg-greenlime' />
//                                     <h6>Terminada en {card.number_id.toString().slice(-4)}</h6>
//                                 </div>
//                                 <button className='font-bold'>Eliminar</button>
//                             </article>
//                         ))
//                     )}
//                 </section>
//             </section>
//         </main>
//     );
// };

// export default CardsPage;


'use client'
import Link from 'next/link';
import React, { useEffect } from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { useCards } from '@/context/CardContext';
import { useAuth } from '@/context/AuthContex';
import { useAccount } from '@/context/ProfileContext';

const CardsPage = () => {
    const { cards, loading, error, fetchCards, deleteCard } = useCards();
    const { user } = useAuth();
    const { accountDetails } = useAccount();

    useEffect(() => {
        if (user) {
            fetchCards(accountDetails?.id, user.token);
        }
    }, [accountDetails,]);

    const handleDelete = async (cardId) => {
        if (user) {
            await deleteCard(accountDetails.id, cardId, user.token);
        }
    };

    return (
        <main className='pb-20'>
            <Link href="/dashboard/add-card/" className="mt-8 w-[90%] max-w-[720px] mx-auto bg-graydark text-greenlime flex rounded-xl shadow-lg flex-col gap-y-4 px-10 py-12 justify-between">
                <h6 className='text-white font-semibold'>Agrega tu tarjeta de débito o crédito</h6>
                <div className='flex flex-row items-center justify-between'>
                    <article className='flex flex-row gap-x-4 items-center'>
                        <IoMdAddCircleOutline className='text-4xl' />
                        <h6 className='font-semibold'>Nueva Tarjeta</h6>
                    </article>
                    <FaArrowRight className='text-3xl' />
                </div>
            </Link>

            <section className='mt-8 w-[90%] max-w-[720px] mx-auto bg-white rounded-xl shadow-md p-8'>
                <h6 className='text-lg font-semibold mb-4'>Tus Tarjetas</h6>
                <section>
                    {loading && <p>Cargando tarjetas...</p>}
                    {error && <p>Error: {error}</p>}
                    {cards.length === 0 && !loading ? (
                        <p>No tienes tarjetas asociadas.</p>
                    ) : (
                        cards.map((card) => (
                            <article key={card.id} className='flex flex-row items-center justify-between py-6 border-b-2 border-gray-400'>
                                <div className='flex flex-row items-center gap-x-2'>
                                    <div className='h-5 w-5 rounded-full bg-greenlime' />
                                    <h6>Terminada en {card.number_id.toString().slice(-4)}</h6>
                                </div>
                                <button 
                                    className='font-bold' 
                                    onClick={() => handleDelete(card.id)}
                                >
                                    Eliminar
                                </button>
                            </article>
                        ))
                    )}
                </section>
            </section>
        </main>
    );
};

export default CardsPage;