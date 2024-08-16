'use client'
import React, { useState } from 'react';
import { registerUser } from '../api';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
    const router = useRouter()
  const [formData, setFormData] = useState({
    dni: '',
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    phone: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const userData = {
      ...formData,
      dni: parseInt(formData.dni, 10),
    };
  
    try {
      const response = await registerUser(userData);
      console.log('Usuario creado:', response);
      router.push("/login")
   
    } catch (err) {
      console.error('Error al crear usuario:', err.response ? err.response.data.error : 'Error inesperado');
      setError('Error al crear usuario. Verifica los datos ingresados.');
    }
  };

  return (
    <section>
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>DNI:</label>
          <input
            type="text"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Apellido:</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Registrar</button>
      </form>
    </section>
  );
};

export default RegisterPage;
