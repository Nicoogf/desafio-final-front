'use client'
import Cookies from 'js-cookie';
import Link from 'next/link';
import React, { useEffect, useState }  from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { useAccount } from '@/context/ProfileContext';
import { useTransaction } from '@/context/transactionContext';
import { formatCurrency } from '@/utils/funcionalidades';

const Dashboard = () => {
  const { accountDetails, fetchAccountDetails  } = useAccount();
  const { transactions,error } = useTransaction()
  const [ showCVU , setShowCVU ]= useState(false)
  const amountFormat = formatCurrency(accountDetails?.available_amount)
  const toggleShowMenu = () => {
    setShowCVU(!showCVU)
  }

console.log(accountDetails)
 console.log(transactions)
  useEffect(() => {
    fetchAccountDetails()
  },[])

  if (!accountDetails) return <p>Loading...</p>;


  return (
    <section className="text-graydark mt-4 p-2 flex flex-col bg-lightmain overflow-hidden overflow-y-scroll">

      <div className='flex flex-row items-center gap-x-2 cursor-pointer my-2 max-w-[980px] mx-auto w-[90%]'>
      <FaArrowRight className='text-red-greydark'/>
      <h3 className='text-graydark text-xl font-semibold'> Inicio </h3>
      </div>

      <section className='w-[90%] mx-auto bg-graydark rounded-lg flex flex-col px-8 lg:px-20 pt-8 pb-20 shadow-xl max-w-[980px] relative overflow-hidden '>

        <div className='flex flex-row text-white gap-x-4 justify-end mb-2'>
          <Link href="/dashboard/cards" className='text-sm cursor-pointer font-semibold'> Ver tarjetas</Link>
          <h6 href=""  className='text-sm cursor-pointer font-semibold' onClick={toggleShowMenu}> Ver CVU </h6>
        </div>

        <article className='flex flex-col text-white mt-4 '>
        <h4 className='text-lg font-semibold mb-4'> Dinero Disponible </h4>
        <span className='border-2 border-greenlime text-2xl text-center rounded-3xl p-2 font-semibold max-w-[250px]'> $ {amountFormat} </span>
        </article>       

        <article className={`transition-all duration-300 bg-greenlime text-semibold absolute bottom-0 right-0 rounded-tl-xl ${!showCVU ? "translate-x-64" : "translate-x-0"} `}>
          <h6 className='py-2 px-6 font-semibold'> {accountDetails?.cvu} </h6>
        </article>
      </section>

      <section className=' max-w-[980px] mx-auto w-[90%] flex flex-col mt-6 gap-y-4 lg:flex-row lg:gap-x-4'>
          <Link className='bg-greenlime text-graydark text-center font-bold text-xl rounded-lg p-4 shadow-md lg:w-[50%]' href="/dashboard/get-money">
          Cargar Dinero
          </Link>
          <Link className='bg-greenlime text-graydark text-center font-bold text-xl rounded-lg p-4 shadow-md lg:w-[50%]' href="/dashboard/pay-services">
          Pagar Servicios
          </Link>
       </section>

       <section>

        <input type="text" placeholder='Buscar en tu actividad' className='border-gray-300 border  max-w-[980px] mx-auto w-[90%] block px-2 py-3 rounded-xl mt-4 shadow-md outline-none font-semibold relative'/>
        
       </section>

       <section className='relative bg-white h-[200px] max-w-[980px] mx-auto w-[90%] mt-4 rounded-xl shadow-md p-4'>
       {transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <ul>
          {transactions.map(transaction => (
            <li key={transaction.id}>
              <p>Amount: {transaction.amount}</p>
              <p>Date: {transaction.dated}</p>
              <p>Description: {transaction.description}</p>
              <p>Origin: {transaction.origin}</p>
              <p>Destination: {transaction.destination}</p>
              <p>Type: {transaction.type}</p>
            </li>
          ))}
        </ul>
      )}

      <Link href="/dashboard/activity" className='font-semibold text-lg flex flex-row justify-between px-4 my-4'> 
        <h6> Ver toda tu actividad  </h6>
        <FaArrowRight />
      </Link>
       </section>

     
    </section>
  )
}




export default Dashboard

