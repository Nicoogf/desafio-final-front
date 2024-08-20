import axios from "./axios.instanse.js"
import Cookies from 'js-cookie';

export const registerRequest = ( userData ) =>  axios.post(`/users` , userData)

// export const loginRequest = ( userData ) => axios.post('login' , userData)

export const loginRequest = async (userData) => {
    try {
        console.log(userData)
      
        const response = await axios.post('/login', userData);
        console.log(response)
    
        const token = response.data.token;
    
     
        Cookies.set('token', token, {
          expires: 1,      
          path: '/', 
        });
    
        return response;
      } catch (error) {
        console.error('Error during login:', error);
        throw error;
      }
  };