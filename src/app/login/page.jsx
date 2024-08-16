'use client'
import React, { useEffect, useState } from 'react';
import { loginUser } from '../api';
import { useRouter } from 'next/navigation';
import MenuSuperior from '@/components/MenuSuperior';


const LoginPage = () => {
    const [nextOption, setNextOption] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = await loginUser(email, password);
            console.log('Token obtenido:', token);
            if (token) {
                router.push("/dashboard")
            }
        } catch (err) {
            setError('Error al iniciar sesión. Verifica tus credenciales.');
        }
    };

    useEffect(() => {
        if (error.length > 0) {
            const timer = setTimeout(() => {
                setError('')
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [error, setError])


    const setMenu = (e) => {
        e.preventDefault()
        setNextOption(!nextOption)
    }
    return (
        <section className='bg-graydark h-[100%] flex justify-center flex-col'>
            <MenuSuperior />

            <section className={` border ${error ? "border-red-400 bg-gray-950" : "border-transparent"} w-[95%] bg-graydark h-[200px] max-w-[450px] border-red-300 -mt-48 mx-auto rounded-lg transition-all duration-300`}>
                {error ? (
                    <section>
                        <h6 className='font-semibold text-center border-b border-red-400 w-[90%] mx-auto py-2 text-red-400'> No pudiste Iniciar seccion por los siguientes motivos </h6>
                        <p className='w-[90%] mx-auto text-sm text-center mt-6'> {error} </p>
                    </section>
                ) : (<></>)}
            </section>


            <form onSubmit={handleSubmit} className='w-[95%] max-w-[450px] h-[300px]  mx-auto flex flex-col items-center justify-center overflow-hidden'>

                <div className={`flex flex-col  w-[80%] gap-2 py-6 transition-all duration-500 ${nextOption ? "-translate-y-56 opacity-0"
                    : "translate-y-10 opacity-100 flex"
                    }`}>
                    <h6 className='text-center font-semibold text-lg'> Ingresar Email</h6>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Ingresar Email'
                        className='p-2 rounded-lg placeholder:text-sm'
                    />
                    <button className='bg-greenlime py-2 rounded-lg font-bold text-graydark' onClick={setMenu}> Continuar </button>
                </div>

                <div className={`flex flex-col w-[80%] gap-2 py-6 transition-all duration-500 
        ${nextOption ? "-translate-y-32 opacity-100"
                        : "translate-y-0 opacity-0 "
                    }`}>
                    <h6 className='text-center font-semibold text-lg'> Ingresar Contraseña</h6>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Ingresar Contraseña'
                        className='p-2 rounded-lg placeholder:text-sm'
                    />
                    <div className='flex flex-row w-full gap-x-2'>
                        <button className='bg-graydark py-2 font-bold text-greenlime border border-greenlime rounded-lg w-[50%]' onClick={setMenu}> Editar Email </button>
                        <button className='bg-greenlime py-2 rounded-lg font-bold text-graydark border  border-greenlime w-[50%]' > Continuar </button>
                    </div>

                </div>


            </form>
        </section >
    );
};

export default LoginPage;
