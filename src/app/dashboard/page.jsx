'use client'
import Cookies from 'js-cookie';
import Link from 'next/link';
import React, { useEffect, useState }  from 'react'
import { FaArrowRight } from "react-icons/fa6";
import jwtDecode from 'jwt-decode';
import { useAccount } from '@/context/ProfileContext';

const Dashboard = () => {
  const [email, setEmail] = useState(null);
  const { accountDetails, fetchAccountDetails } = useAccount();

  useEffect(() => {
    fetchAccountDetails();
  }, []); 

  if (!accountDetails) return <p>Loading...</p>;


  return (
    <section className="text-graydark mt-4 p-2 flex flex-col bg-lightmain overflow-hidden overflow-y-scroll">

      <div className='flex flex-row items-center gap-x-2 cursor-pointer my-2 max-w-[980px] mx-auto w-[90%]'>
      <FaArrowRight className='text-red-greydark'/>
      <h3 className='text-graydark text-xl font-semibold'> Inicio </h3>
      </div>

      <section className='w-[90%] mx-auto bg-graydark rounded-lg flex flex-col px-6 py-10 shadow-xl max-w-[600px]'>

        <div className='flex flex-row text-white gap-x-4 justify-end'>
          <Link href="" > Ver tarjetas</Link>
          <Link href="" > Ver CVU : {accountDetails?.cvu} </Link>
        </div>

        <article className='flex flex-col text-white '>
        <h4 className='text-lg mb-2'> Dinero Disponible </h4>
        <p className='border border-greenlime w-[80%] text-3xl text-center rounded-3xl p-2 font-semibold'> $ {accountDetails?.available_amount} </p>
        </article>       

      </section>

      <section className=' max-w-[980px] mx-auto w-[90%] flex flex-col mt-6 gap-y-4'>
          <Link className='bg-greenlime text-graydark text-center font-bold text-xl rounded-lg p-4' href="/">
          Transferir Dinero
          </Link>
          <Link className='bg-greenlime text-graydark text-center font-bold text-xl rounded-lg p-4' href="/">
          Pagar Servicios
          </Link>
       </section>

       <section>

        <input type="text" placeholder='Buscar en tu actividad' className='border-gray-300 border  max-w-[980px] mx-auto w-[90%] block px-2 py-3 rounded-xl mt-4 shadow-lg outline-none font-semibold relative'/>
        
       </section>

       <section className='bg-white h-[200px] max-w-[980px] mx-auto w-[90%] mt-4 rounded-xl'>

       </section>

     
    </section>
  )
}




export default Dashboard

