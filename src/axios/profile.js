import axios from "./axios.instanse.js"
import Cookies from 'js-cookie';


//Obtener Info del ususario

export const getAccountDetails = async () => {
    try {
        const token = Cookies.get('token')
        console.log(token)
        const response = await axios.get('/account', {
            headers: {
                Authorization: `${token}`,
            }
        });
        console.log(response)
        return response
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
}

//Obtener transacciones

export const getAccountTransactions = async (accountId ,token) => {
    try {
        const response = await axios.get(`/api/accounts/${accountId}/activity`, {
            headers: {
                Authorization: `${token}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching account transactions:', error);
        throw error; 
    }
};