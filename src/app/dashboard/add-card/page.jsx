// 'use client'
// import React, { useState } from 'react';
// import Cards from 'react-credit-cards-2';
// import 'react-credit-cards-2/dist/es/styles-compiled.css';
// import { useForm } from 'react-hook-form';

// const AddCardPage = () => {
//   const [state, setState] = useState({
//     number: '',
//     expiry: '',
//     cvc: '',
//     name: '',
//     focus: '',
//   });

//   const { handleSubmit }= useForm()

//   const handleInputChange = (evt) => {
//     const { name, value } = evt.target;

//     setState((prev) => ({ ...prev, [name]: value }));
//   }

//   const handleInputFocus = (evt) => {
//     setState((prev) => ({ ...prev, focus: evt.target.name }));
//   }

//   const dataCard = {
//     ...state,
//     number : +state.number,
//     expiry: +state.expiry,
//     cvc: +state.cvc,
//   }

//   const formCardSubmit = handleSubmit(async(data) => {
//     console.log(dataCard)
//   })

//   return (
//     <main>
//       <section className='mt-8 w-[90%] mx-auto max-w-[720px] bg-white rounded-xl shadow-md p-8'>

//         <Cards
//           number={state.number}
//           expiry={state.expiry}
//           cvc={state.cvc}
//           name={state.name}
//           focused={state.focus}
//         />

//         <form className='grid grid-cols-4 gap-4 mt-8' onSubmit={formCardSubmit}>


//           <input
//             type="text"
//             maxLength={16}
//             name="number"
//             placeholder="Card Number"
//             value={state.number}
//             onChange={handleInputChange}
//             onFocus={handleInputFocus}
//             className='col-span-4 lg:col-span-2 py-2 px-4 border border-gray-400 rounded-lg shadow-md'
//           />

//           <input
//             type="text"
//             maxLength={4}
//             name="expiry"
//             placeholder="Vencimiento"
//             value={state.expiry}
//             onChange={handleInputChange}
//             onFocus={handleInputFocus}
//              className='col-span-4 lg:col-span-2 py-2 px-4 border border-gray-400 rounded-lg shadow-md'            
//           />



//           <input
//             type="text"
//             name="cvc"
//             maxLength={3}
//             placeholder="Codigo de Seguridad"
//             value={state.cvc}
//             onChange={handleInputChange}
//             onFocus={handleInputFocus}
//             className='col-span-4 lg:col-span-2 py-2 px-4 border border-gray-400 rounded-lg shadow-md'
//           />

//           <input
//             type="text"
//             name="name"
//             maxLength={21}
//             placeholder="Nombre"
//             value={state.name}
//             onChange={handleInputChange}
//             onFocus={handleInputFocus}
//             className='col-span-4 lg:col-span-2 py-2 px-4 border border-gray-400 rounded-lg shadow-md'
//           />

//           <button className="font-semibold bg-greenlime py-3 px-8 text-center col-span-4 rounded-lg ml-auto"> Continuar </button>


//         </form>


//       </section>


//     </main>
//   )
// }

// export default AddCardPage

'use client';
import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { useForm } from 'react-hook-form';
import { useCards } from '@/context/CardContext';
import { useAccount } from '@/context/ProfileContext';

const AddCardPage = () => {
  const { createCard , error } = useCards();
  const { accountDetails } = useAccount()

  console.log(accountDetails?.id)
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const { handleSubmit } = useForm();

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
  
   
    if (name === 'expiry') {
      const formattedExpiry = value.replace(/(\d{2})(\d{2})/, '$1/20$2');
      setState((prev) => ({ ...prev, [name]: formattedExpiry }));
    } else {
      setState((prev) => ({ ...prev, [name]: value }));
    }
  }

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const formCardSubmit = handleSubmit(async () => {
    const cardData = {
      number_id: parseInt(state.number, 10),
      expiration_date: state.expiry,  // Asegúrate de que esté en formato MM/YYYY
      cod: parseInt(state.cvc, 10),
      first_last_name: state.name,
    };
  
    try {
      const accountId = accountDetails?.id; // Reemplaza con la lógica para obtener el accountId
      const token = "tu_token_aqui"; // Reemplaza con la lógica para obtener el token sin "Bearer"
      await createCard(accountId, token, cardData);
      console.log('Card created successfully');
    } catch (error) {
      console.error('Error creating card:', error);
    }
  });



  return (
    <main>
      <section className='mt-8 w-[90%] mx-auto max-w-[720px] bg-white rounded-xl shadow-md p-8'>
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus}
        />
        <form className='grid grid-cols-4 gap-4 mt-8' onSubmit={formCardSubmit}>
          <input
            type="text"
            maxLength={16}
            name="number"
            placeholder="Card Number"
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className='col-span-4 lg:col-span-2 py-2 px-4 border border-gray-400 rounded-lg shadow-md'
          />
          <input
            type="text"
            maxLength={5}
            name="expiry"
            placeholder="MM/AAAA"
            value={state.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className='col-span-4 lg:col-span-2 py-2 px-4 border border-gray-400 rounded-lg shadow-md'            
          />
          <input
            type="text"
            name="cvc"
            maxLength={3}
            placeholder="Codigo de Seguridad"
            value={state.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className='col-span-4 lg:col-span-2 py-2 px-4 border border-gray-400 rounded-lg shadow-md'
          />
          <input
            type="text"
            name="name"
            maxLength={21}
            placeholder="Nombre"
            value={state.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className='col-span-4 lg:col-span-2 py-2 px-4 border border-gray-400 rounded-lg shadow-md'
          />
          <button className="font-semibold bg-greenlime py-3 px-8 text-center col-span-4 rounded-lg ml-auto">
            Continuar
          </button>
        </form>
      </section>
    </main>
  );
};

export default AddCardPage;
