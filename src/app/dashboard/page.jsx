'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { useAccount } from '@/context/ProfileContext';
import { useTransaction } from '@/context/transactionContext';
import { formatCurrency, obtenerUltimosResultados } from '@/utils/funcionalidades';
import { useAuth } from '@/context/AuthContex';
import { MdOutlineContentCopy } from "react-icons/md";
import { CopyToClipboard } from 'react-copy-to-clipboard'
import toast, { Toaster } from 'react-hot-toast';


const Dashboard = () => {
    const { accountDetails, fetchAccountDetails } = useAccount();
    const { transactions, loading, error, fetchTransactions } = useTransaction();
    const [showCVU, setShowCVU] = useState(false);
    const { user } = useAuth();
    const [tenTransactions, setTenTransactions] = useState([]);


    const amountFormat = formatCurrency(accountDetails?.available_amount);

    const toggleShowMenu = () => {
        setShowCVU(!showCVU);
    };

    
    useEffect(() => {
        fetchAccountDetails();
    }, []);

 
    useEffect(() => {
        if (user && accountDetails?.id) {
            fetchTransactions(accountDetails.id, user.token);
        }
    }, [user, accountDetails]);


    useEffect(() => {
        if (Array.isArray(transactions)) {
            const ultimos = obtenerUltimosResultados(transactions);
            setTenTransactions(ultimos);
        } else {
            setTenTransactions([]); 
        }
    }, [transactions]);

    if (!accountDetails) return <p>Loading...</p>;

    return (
        <section className="text-graydark mt-2 p-2 flex flex-col bg-lightmain overflow-hidden overflow-y-scroll">
            <div className='flex flex-row items-center gap-x-2 cursor-pointer my-2 max-w-[980px] mx-auto w-[90%]'>
                <FaArrowRight className='text-red-greydark' />
                <h3 className='text-graydark text-xl font-semibold'> Inicio </h3>
            </div>

            <section className='w-[90%] mx-auto bg-graydark rounded-lg flex flex-col px-8 lg:px-20 pt-8 pb-20 shadow-xl max-w-[980px] relative overflow-hidden '>
                <div className='flex flex-row text-white gap-x-4 justify-end mb-2'>
                    <Link href="/dashboard/cards" className='text-sm cursor-pointer font-semibold'> Ver tarjetas</Link>
                    <h6 className='text-sm cursor-pointer font-semibold' onClick={toggleShowMenu}> Ver CVU </h6>
                </div>

                <article className='flex flex-col text-white mt-4 '>
                    <h4 className='text-lg font-semibold mb-4'> Dinero Disponible </h4>
                    <span className='border-2 border-greenlime text-2xl text-center rounded-3xl p-2 font-semibold max-w-[250px]'> $ {amountFormat} </span>
                </article>

                <CopyToClipboard  text={accountDetails?.cvu} onClick={toggleShowMenu}>
                <article className={`cursor-pointer transition-all duration-300 bg-greenlime flex flex-row items-center text-semibold absolute bottom-0 right-0 rounded-tl-xl ${!showCVU ? "translate-x-64" : "translate-x-0"} `}
                onClick={ () => {
                  toast.success("CVU copiado en el Portapapeles")
                }} >
                    <MdOutlineContentCopy className='mx-2'/>
                    <h6 className='py-2 px-2 font-semibold'> {accountDetails?.cvu} </h6>
                </article>
                </CopyToClipboard>
            </section>

            <section className='max-w-[980px] mx-auto w-[90%] flex flex-col mt-4 gap-y-4 lg:flex-row lg:gap-x-4'>
                <Link className='bg-greenlime text-graydark text-center font-bold text-xl rounded-lg p-4 shadow-md lg:w-[50%]' href="/dashboard/get-money">
                    Cargar Dinero
                </Link>
                <Link className='bg-greenlime text-graydark text-center font-bold text-xl rounded-lg p-4 shadow-md lg:w-[50%]' href="/dashboard/pay-services">
                    Pagar Servicios
                </Link>
            </section>

            <section>
                <input type="text" placeholder='Buscar en tu actividad' className='border-gray-300 border max-w-[980px] mx-auto w-[90%] block px-2 py-3 rounded-xl mt-4 shadow-md outline-none font-semibold relative' />
            </section>

            <section className='relative bg-white h-[200px] max-w-[980px] mx-auto w-[90%] mt-4 rounded-xl shadow-md p-4 flex flex-col justify-between overflow-hidden overflow-y-scroll'>
                {loading && <p>Cargando transacciones...</p>}
                {error && <p>Error: {error}</p>}
                {tenTransactions.length === 0 && !loading ? (
                    <p>No se encontraron transacciones.</p>
                ) : (
                    <ul>
                        {tenTransactions.map(transaction => (
                            <li key={transaction.id} className='border-b border-gray-300 py-2 flex flex-row justify-between px-2 items-center'>
                                <div className='flex flex-row gap-x-4'>
                                    <div className='bg-greenlime h-5 w-5 rounded-full' />
                                    <p>{transaction.description}</p>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='text-end'> $ {transaction.amount} </p>
                                    <p className='text-end text-xs text-gray-400'> {new Date(transaction.dated).toLocaleDateString('es-AR')}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                <Link href="/dashboard/activity" className='font-semibold text-lg flex flex-row justify-between px-4 my-4'>
                    <h6>Ver toda tu actividad</h6>
                    <FaArrowRight />
                </Link>
            </section>
            <Toaster />
        </section>
    );
};

export default Dashboard;
