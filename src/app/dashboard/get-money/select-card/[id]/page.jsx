// 'use client'
// import Link from 'next/link'
// import React from 'react'



// const IdCardPage = () => {
    

//   return (
//     <main>
//       <Link href="/dashboard/get-money/select-card" className='mt-8 mb-4 block w-[90%] max-w-[720px] mx-auto text-lg font-semibold cursor-point'> Ir Atras </Link>
//         <section className=' flex flex-col mt-8 p-10 bg-graydark rounded-lg w-[90%] mx-auto max-w-[720px]'> 
//             <h6 className='text-greenlime font-semibold text-lg mb-2'> ¿ Cuanto queres ingresar a la cuenta ? </h6>
//             <input type="number" name="amount" className='text-lg font-semibold outline-none bg-white rounded-md text-center p-2 w-[90%] max-w-[300px] my-2' placeholder='$0' />
//             <Link href="/dashboard/get-money/select-card/id/confirm"  className='bg-greenlime px-8 py-3 rounded-lg font-semibold max-w-[300px] ml-auto'> Continuar </Link>
//         </section>
//     </main>
//   )
// }

// export default IdCardPage

'use client'
import React, { useState } from 'react';

import { useRouter } from 'next/navigation';
import { useTransaction } from '@/context/transactionContext';
import Link from 'next/link';

const IdCardPage = () => {
  const { setAmount } = useTransaction();
  const [inputAmount, setInputAmount] = useState(0);
  const router = useRouter();

  const handleNextStep = () => {
    setAmount(inputAmount);
    const id = window.location.pathname.split('/').filter(Boolean).pop();  
    console.log(id)
    router.push(`/dashboard/get-money/select-card/${id}/confirm`);
  };

  return (
    <main>
    <Link href="/dashboard/get-money/select-card" className='mt-8 mb-4 block w-[90%] max-w-[720px] mx-auto text-lg font-semibold cursor-pointer'>
      Ir Atras
    </Link>
    <section className='flex flex-col mt-8 p-10 bg-graydark rounded-lg w-[90%] mx-auto max-w-[720px]'>
      <h6 className='text-greenlime font-semibold text-lg mb-2'>¿Cuánto querés ingresar a la cuenta?</h6>
      <input
        type="number"
        name="amount"
        value={inputAmount}
        onChange={(e) => setInputAmount(Number(e.target.value))}
        className='text-lg font-semibold outline-none bg-white rounded-md text-center p-2 w-[90%] max-w-[300px] my-2'
        placeholder='$0'
      />
      <button onClick={handleNextStep} className='bg-greenlime px-8 py-3 rounded-lg font-semibold max-w-[300px] ml-auto'>
        Continuar
      </button>
    </section>
  </main>
  );
};

export default IdCardPage;