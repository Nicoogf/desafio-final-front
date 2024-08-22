'use client'
import { createContext, useState, useContext, useEffect } from 'react';
import { createDepositRequest, fetchTransactionsRequest } from '@/axios/Transactions';

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

  const fetchTransactions = async (accountId, token) => {
    try {
      setLoading(true);
      const data = await fetchTransactionsRequest(accountId, token);
      setTransactions(data);
    } catch (err) {
      setError(err.message || 'Error al obtener las transacciones');
    } finally {
      setLoading(false);
    }
  };

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

  return (
    <TransactionContext.Provider value={{ transactions, loading, error, fetchTransactions ,handleDeposit,setAmount,amount}}>
      {children}
    </TransactionContext.Provider>
  );
};
