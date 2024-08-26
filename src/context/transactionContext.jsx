'use client'
import { createContext, useState, useContext, useEffect } from 'react';
import { createDepositRequest, fetchTransactionsRequest, fetchTransferencesRequest } from '@/axios/Transactions';

const TransactionContext = createContext();

export const useTransaction = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error("El TransactionContext debe ser utilizado dentro del TransactionProvider");
  }
  return context;
};

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [amount, setAmount] = useState(0);
  const [success, setSuccess] = useState(false);
  
  // const fetchTransactions = async (accountId, token) => {
  //   try {
  //     setLoading(true);
  //     const data = await fetchTransactionsRequest(accountId, token);
  //     setTransactions(data);
  //   } catch (err) {
  //     setError(err.message || 'Error al obtener las transacciones');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleDeposit = async (accountId, destination, origin, description = '') => {
    try {
      const depositData = {
        amount,
        dated: new Date().toISOString(),
        destination,
        origin,
        description,
      };

      await createDepositRequest(accountId, depositData);

      router.push('/success'); 
    } catch (error) {
      console.error("Error al realizar el depósito:", error);
    }
  };

  const depositAmount = async (accountId, depositData) => {
    setLoading(true);
    try {
        await createDepositRequest(accountId, depositData);
        setSuccess(true);
        setError(null);
    } catch (err) {
        setError('Error al realizar el depósito. Por favor, intenta de nuevo.');
        setSuccess(false);
    } finally {
        setLoading(false);
    }
};

const fetchTransactions = async (accountId, token) => {
  try {
      setLoading(true);
      const [transactionsData, transferencesData] = await Promise.all([
          fetchTransactionsRequest(accountId, token),
          fetchTransferencesRequest(accountId, token)
      ]);

      console.log(transferencesData)
      const combinedData = [...transactionsData, ...transferencesData];

      combinedData.sort((a, b) => new Date(b.dated) - new Date(a.dated));

      setTransactions(combinedData);
  } catch (err) {
      setError(err.message || 'Error al obtener las transacciones y transferencias');
  } finally {
      setLoading(false);
  }
};

  return (
    <TransactionContext.Provider value={{ depositAmount,transactions, loading, error, fetchTransactions ,handleDeposit,setAmount,amount}}>
      {children}
    </TransactionContext.Provider>
  );
};
