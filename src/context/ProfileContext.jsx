'use client'
import { createContext, useState, useContext } from 'react';
import { getAccountDetails } from '@/axios/profile';

const AccountContext = createContext();

export const useAccount = () => {
    const context = useContext(AccountContext)
    if (!context) {
        throw new Error("El AccountContext debe ser utilizado dentro del AuthProvider")
    }
    return context
}


export const AccountProvider = ({ children }) => {
  const [accountDetails, setAccountDetails] = useState(null);

  const fetchAccountDetails = async () => {
    try {
      const res = await getAccountDetails();
      console.log(res)
      setAccountDetails(res.data);  
    } catch (error) {
      console.log('Error fetching account details:', error);
    }
  };

  return (
    <AccountContext.Provider value={{ accountDetails, fetchAccountDetails }}>
      {children}
    </AccountContext.Provider>
  );
};

