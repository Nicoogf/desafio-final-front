'use client'
import React, { useState } from 'react'
import { BsCalendar3Range } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import { IoExitOutline } from "react-icons/io5";

const ActivityPage = () => {
  const [ showfilter , setShowFilter ] = useState(false)

  const toggleFilter = () => {
    setShowFilter(!showfilter)
    console.log(showfilter)
  }

  console.log(showfilter)
  return (
    <main className='relative'>

      <section className='mt-8 w-[90%] mx-auto max-w-[720px] flex flex-row gap-x-4'>
        <input  placeholder="Buscar en tu actividad" className='outline-none px-4 bg-white rounded-lg shadow-md block w-[80%] '/> 
        <button onClick={toggleFilter} className='flex flex-row items-center justify-center gap-x-4 bg-greenlime px-6 py-2 rounded-lg shadow-md w-[20%]'>  
        <span className='font-semibold'> Filtrar </span>
        <BsCalendar3Range/>
        </button>
      </section>

      <section className={`transition-all duration-300 w-[70%] max-w-[480px] absolute top-4 right-4 bg-gray-200 p-4 rounded-xl border-2 border-gray-500 py-8 ${ !showfilter ? " translate-x-[1000px] opacity-0" : "translate-x-0 opacity-100"}`}> 
        <div className='flex flex-row items-center justify-between px-4 border-b border-gray-400 my-4'>

          <IoExitOutline className='absolute top-4 right-4 text-4xl cursor-pointer' onClick={toggleFilter}/>

        <h6 className='flex flex-row items-center gap-x-4 py-2 font-semibold'> 
          <span> Periodo </span> 
          <FaAngleDown /> 
         </h6>

         <h6 className='font-semibold '> Borrar filtros </h6>
        </div>

        <div>
  <div className="flex flex-row items-center justify-between py-4">
    <label className="font-bold">Hoy</label>
    <input type="checkbox" className="custom-checkbox" />
  </div>
  <div className="flex flex-row items-center justify-between py-4">
    <label className="font-bold">Ayer</label>
    <input type="checkbox" className="custom-checkbox" />
  </div>
  <div className="flex flex-row items-center justify-between py-4">
    <label className="font-bold">Última Semana</label>
    <input type="checkbox" className="custom-checkbox" />
  </div>
  <div className="flex flex-row items-center justify-between py-4">
    <label className="font-bold">Últimos 15 Días</label>
    <input type="checkbox" className="custom-checkbox" />
  </div>
  <div className="flex flex-row items-center justify-between py-4">
    <label className="font-bold">Último Mes</label>
    <input type="checkbox" className="custom-checkbox" />
  </div>
  <div className="flex flex-row items-center justify-between py-4">
    <label className="font-bold">Último Año</label>
    <input type="checkbox" className="custom-checkbox" />
  </div>
</div>
       
      </section>

      <section className='p-8 mt-8 bg-white w-[90%] mx-auto max-w-[720px] shadow-md rounded-lg'>
       <h6 className='text-lg font-semibold border-b border-gray-400 py-4'> Tu actividad </h6>

       <section>

        <article className='flex flex-row justify-between px-4 py-3 border-b border-gray-400'>
          <div className='flex flex-row items-center gap-x-4'>
            <div className='bg-greenlime h-5 w-5 rounded-full'/>
            <h6> Tranferiste a Rodrigo </h6>
          </div>

          <div className='flex flex-col'>
            <h6> $ 1265,75 </h6>
            <h6 className='-mt-1 text-xs text-end text-gray-400'> Sabado </h6>
          </div>
        </article>
       </section>
      </section>
    </main>
  )
}

export default ActivityPage