import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://digitalmoney.digitalhouse.com', // Base URL de la API
});

// Interceptor para agregar el token JWT en el header de cada solicitud
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Asumiendo que guardas el token en localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});




export const loginUser = async (email, password) => {
    try {
      const response = await axios.post('https://digitalmoney.digitalhouse.com/api/login', {
        email,
        password,
      });
  
      const { token } = response.data;
  
      // Guardar el token en localStorage
      localStorage.setItem('token', token);
  
      // Devuelve el token para usarlo si es necesario
      return token;
    } catch (error) {
      console.error('Error al iniciar sesión:', error.response ? error.response.data.error : 'Error inesperado');
      throw error; // Lanza el error para manejarlo en el UI
    }
};
  

export const registerUser = async (userData) => {
  try {
    const response = await axios.post('https://digitalmoney.digitalhouse.com/api/users', userData);

    const { token } = response.data;

    localStorage.setItem('token', token);

    return response.data;
  } catch (error) {
    console.error('Error al crear usuario:', error.response ? error.response.data.error : 'Error inesperado');
    throw error;
  }
};



