import axios from "./axios.instanse.js";
import Cookies from 'js-cookie';

export const fetchTransactionsRequest = async (accountId, token) => {
    try {
        const token = Cookies.get('token')
        const response = await axios.get(`/accounts/${accountId}/activity`, {
          headers: {
            Authorization: `${token}`
          }
        });
        return response.data;
    } catch (error) {
        console.log(error)
    }
 
};


export const createDepositRequest = async (accountId, depositData) => {
    try {
        const token = Cookies.get('token');
        const response = await axios.post(`/accounts/${accountId}/deposits`, depositData, {
          headers: {
            Authorization: `${token}`,
            'Content-Type': 'application/json'
          }
        });
        return response.data;
    } catch (error) {
        console.error("Error al realizar el depósito:", error);
        throw error; 
    }
};

