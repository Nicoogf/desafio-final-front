'use client'
import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

const AddCardPage = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }
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
        <form className='grid grid-cols-4 gap-4 mt-8'>


          <input
            type="number"
            name="number"
            placeholder="Card Number"
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className='col-span-4 lg:col-span-2 py-2 px-4 border border-gray-400 rounded-lg shadow-md'
          />

          <input
            type="number"
            name="number"
            placeholder="Card Number"
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
             className='col-span-4 lg:col-span-2 py-2 px-4 border border-gray-400 rounded-lg shadow-md'            
          />



          <input
            type="number"
            name="number"
            placeholder="Card Number"
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className='col-span-4 lg:col-span-2 py-2 px-4 border border-gray-400 rounded-lg shadow-md'
          />

          <input
            type="number"
            name="number"
            placeholder="Card Number"
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className='col-span-4 lg:col-span-2 py-2 px-4 border border-gray-400 rounded-lg shadow-md'
          />

          <button className="font-semibold bg-greenlime py-3 px-8 text-center col-span-4 rounded-lg ml-auto"> Continuar </button>


        </form>


      </section>


    </main>
  )
}

export default AddCardPage