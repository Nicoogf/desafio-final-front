'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import MenuSuperior from '@/components/MenuSuperior';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/context/AuthContex';


const LoginPage = () => {
    const [nextOption, setNextOption] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()
    const { handleSubmit ,register} = useForm()
    const { signIn , setErrorResponse ,errorsResponse } = useAuth()

    const onSubmit = handleSubmit(async(data) => {
        const res = await signIn(data)    
        router.push("/dashboard")
    }) 


    useEffect(() => {
        if (errorsResponse?.length > 0) {
            const timer = setTimeout(() => {
                setErrorResponse(null)
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [errorsResponse, setErrorResponse])

   

    const setMenu = (e) => {
        e.preventDefault()
        setNextOption(!nextOption)
    }
    return (
        <section className='bg-graydark h-[100%] flex justify-center flex-col relative'>
            <MenuSuperior link="register" text="Registrate" />

            <section className={` border ${errorsResponse ? "border-red-400 bg-gray-950" : "border-transparent"} w-[95%] bg-graydark h-[200px] max-w-[450px] border-red-300 -mt-48 mx-auto rounded-lg transition-all duration-300`}>
                {errorsResponse ? (
                    <section>
                        <h6 className='font-semibold text-center border-b border-red-400 w-[90%] mx-auto py-2 text-red-400'> No pudiste Iniciar seccion por los siguientes motivos </h6>
                        <p className='w-[90%] mx-auto text-sm text-center mt-6 text-white'> {errorsResponse} </p>
                    </section>
                ) : (<></>)}
            </section>


            <form onSubmit={onSubmit} className='w-[95%] max-w-[450px] h-[300px]  mx-auto flex flex-col items-center justify-center overflow-hidden relative'>

                <div className={`flex flex-col  w-[80%] gap-2 py-6 transition-all duration-500 ${nextOption ? "-translate-y-56 opacity-0"
                    : "translate-y-10 opacity-100 flex"
                    }`}>
                    <h6 className='text-center font-semibold text-lg  text-white'> Ingresar Email</h6>
                    <input
                        type="email"                                         
                        placeholder='Ingresar Email'
                        className='p-2 rounded-lg placeholder:text-sm text-black font-semibold outline-none'
                        {...register("email", { required: true })}
                    />
                    <div className='flex flex-row  gap-x-2'>                   
                    <button className='bg-greenlime py-2 rounded-lg  w-[100%] font-bold text-graydark' onClick={setMenu}> Continuar </button>
                    </div>
                   
                </div>

                <div className={`flex flex-col w-[80%] gap-2 py-6 transition-all duration-500 
        ${nextOption ? "-translate-y-32 opacity-100"
                        : "translate-y-0 opacity-0 "
                    }`}>
                    <h6 className='text-center font-semibold text-lg  text-white'> Ingresar Contraseña</h6>
                    <input
                        type="password"
                        placeholder='Ingresar Contraseña'
                        className='p-2 rounded-lg placeholder:text-sm text-black font-semibold outline-none'
                        {...register("password", { required: true })}
                    />
                    <div className='flex flex-row w-full gap-x-2'>
                        <button className='bg-graydark py-2 font-bold text-greenlime border border-greenlime rounded-lg w-[50%]' onClick={setMenu}> Editar Email </button>
                        <button className='bg-greenlime py-2 rounded-lg font-bold text-graydark border  border-greenlime w-[50%]' type='submit'> Continuar </button>
                    </div>

                </div>
              
            </form>
  
            <footer className='bg-greylight w-full text-greenlime absolute bottom-0 py-2'>
                <h6 className='text-center text-greenlime'> 2024 Digital Money House</h6>

            </footer>
        </section >
    );
};

export default LoginPage;
