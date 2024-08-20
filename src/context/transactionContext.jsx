'use client'
import Cookies from 'js-cookie';
import { createContext, useState, useContext, useEffect } from 'react';


const TransactionContext = createContext();

export const useTransaction = () => {
  const context = useContext(TransactionContext)
  if (!context) {
    throw new Error("El TransactionContext debe ser utilizado dentro del AuthProvider")
  }
  return context
}


export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);  
  const token = Cookies.get("token"); 

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const accountId = 1; 
        const data = await getAccountTransactions(accountId, token);
        setTransactions(data);
      } catch (error) {
        setError('Error fetching transactions.');
      }
    };

    fetchTransactions();
  }, [token]);

  



  return (
    <TransactionContext.Provider value={{transactions,error }}>
      {children}
    </TransactionContext.Provider>
  );
};

