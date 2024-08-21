import axios from "./axios.instanse.js"
import Cookies from 'js-cookie';

export const getCardsRequest = async (accountId, token) => {
    try {
        const token = Cookies.get('token')
        const response = await axios.get(`/accounts/${accountId}/cards`, {
            headers: {
                Authorization: `${token}`,
            }
        });
        return response.data; 
    } catch (error) {
        console.error("Error fetching cards:", error);
        throw error;
    }
};


export const CreateCardRequest = async (accountId, token, cardData) => {
    try {
      const token = Cookies.get('token')
      console.log(token)
      const response = await axios.post(`/accounts/${accountId}/cards`, cardData, {
        headers: {
          Authorization: `${token}`,
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error creating card:', error);
      throw error;
    }
  };


  export const DeleteCardRequest = async (accountId, cardId, token) => {
    try {
        const token = Cookies.get('token')
        const response = await axios.delete(`/accounts/${accountId}/cards/${cardId}`, {
            headers: {
                Authorization: `${token}`,
            },
        });
        return response;
    } catch (error) {
        throw error;
    }
};