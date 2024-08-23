// 'use client'
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import MenuSuperior from '@/components/MenuSuperior';

// import { useAuth } from '@/context/AuthContex';
// import { useForm } from 'react-hook-form';

// const RegisterPage = () => {
//   const { signUp } = useAuth();
//   const router = useRouter();
//   const { register, handleSubmit, formState: { errors } ,watch} = useForm();
//   const [error, setError] = useState('');

//   const onSubmit = handleSubmit(async (data) => {
//     try {
//       data.dni = parseInt(data.dni, 10);
//       const res = await signUp(data);
//       router.push("/login");
//     } catch (error) {
//       console.log(error);
//       setError('Hubo un problema al crear la cuenta.');
//     }
//   });

//   return (
//     <section className='bg-graydark h-[100%] flex justify-center flex-col relative'>
//       <MenuSuperior link="login" text="Iniciar sesión" />

//       <section className={`border ${error ? "border-red-400 bg-gray-950" : "border-transparent"} w-[95%] bg-graydark h-[135px] max-w-[450px] border-red-300 -mt-32 mx-auto rounded-lg transition-all duration-300`}>
//         {error && (
//           <section>
//             <h6 className='font-semibold text-center border-b border-red-400 w-[90%] mx-auto py-2 text-red-400'>No pudiste Iniciar sesión por los siguientes motivos:</h6>
//             <p className='w-[90%] mx-auto text-sm text-center mt-6 text-white'>{error}</p>
//           </section>
//         )}
//       </section>

//       <h6 className='text-center font-semibold text-lg mt-8 mb-4 text-white'>Crear Cuenta</h6>
//       <form onSubmit={onSubmit} className='flex flex-col items-center lg:grid grid-cols-1 lg:grid-cols-2 max-w-[720px] mx-auto gap-2'>

//         <div className='w-full flex flex-col items-center'>
//           <input
//             type="text"
//             name="firstname"
//             placeholder='Ingresar Nombre'
//             className={`p-2 rounded-lg max-w-[450px] lg:col-span-1 border outline-none text-black font-semibold placeholder:font-thin ${errors.firstname ? 'border-red-500' : ''}`}
//             {...register("firstname", { required: "El nombre es obligatorio" })}
//           />
//           {errors.firstname && <p className='text-red-500 text-sm text-center'>{errors.firstname.message}</p>}
//         </div>

//         <div className='w-full flex flex-col items-center'>
//           <input
//             type="text"
//             name="lastname"
//             placeholder='Ingresar Apellido'
//             className={`p-2 rounded-lg max-w-[450px] outline-none text-black font-semibold placeholder:font-thin ${errors.lastname ? 'border-red-500' : ''}`}
//             {...register("lastname", { required: "El apellido es obligatorio" })}
//           />
//           {errors.lastname && <p className='text-red-500 text-sm'>{errors.lastname.message}</p>}
//         </div>

//         <div className='w-full flex flex-col items-center'>
//           <input
//             type="text"
//             name="dni"
//             placeholder='Ingresar Documento'
//             className={`p-2 rounded-lg max-w-[450px] outline-none text-black font-semibold placeholder:font-thin ${errors.dni ? 'border-red-500' : ''}`}
//             {...register("dni", { required: "El DNI es obligatorio", pattern: { value: /^[0-9]+$/, message: "El DNI debe ser un número válido" } })}
//           />
//           {errors.dni && <p className='text-red-500 text-sm'>{errors.dni.message}</p>}
//         </div>

//         <div className='w-full flex flex-col items-center'>
//           <input
//             type="email"
//             name="email"
//             placeholder='Ingresar Email'
//             className={`p-2 rounded-lg max-w-[450px] outline-none text-black font-semibold placeholder:font-thin ${errors.email ? 'border-red-500' : ''}`}
//             {...register("email", { required: "El email es obligatorio", pattern: { value: /^\S+@\S+$/, message: "El email debe ser válido" } })}
//           />
//           {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
//         </div>

//         <div className='w-full flex flex-col items-center'>
//           <input
//             type="password"
//             name="password"
//             placeholder='Ingresar Contraseña'
//             className={`p-2 rounded-lg max-w-[450px] outline-none text-black font-semibold placeholder:font-thin ${errors.password ? 'border-red-500' : ''}`}
//             {...register("password", { required: "La contraseña es obligatoria", minLength: { value: 6, message: "La contraseña debe tener al menos 6 caracteres" } })}
//           />
//           {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}
//         </div>

//         <div className='w-full flex flex-col items-center'>
//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder='Confirmar contraseña'
//             className={`p-2 rounded-lg max-w-[450px] outline-none text-black font-semibold placeholder:font-thin ${errors.confirmPassword ? 'border-red-500' : ''}`}
//             {...register("confirmPassword", { required: "La confirmación de la contraseña es obligatoria", validate: value => value === watch("password") || "Las contraseñas no coinciden" })}
//           />
//           {errors.confirmPassword && <p className='text-red-500 text-sm'>{errors.confirmPassword.message}</p>}
//         </div>

//         <div className='w-full flex flex-col items-center'>
//           <input
//             type="text"
//             name="phone"
//             placeholder='Ingresar Telefono'
//             className={`p-2 rounded-lg max-w-[450px] outline-none text-black font-semibold placeholder:font-thin ${errors.phone ? 'border-red-500' : ''}`}
//             {...register("phone", { required: "El teléfono es obligatorio", pattern: { value: /^[0-9]+$/, message: "El teléfono debe ser un número válido" } })}
//           />
//           {errors.phone && <p className='text-red-500 text-sm'>{errors.phone.message}</p>}
//         </div>

//         <button type="submit" className='bg-greenlime p-2 rounded-lg text-graydark w-full font-semibold'>Crear Cuenta</button>
//       </form>

//       <footer className='bg-greylight w-full text-greenlime absolute bottom-0 py-2'>
//         <h6 className='text-center text-greenlime'>2024 Digital Money House</h6>
//       </footer>
//     </section>
//   );
// };

// export default RegisterPage;

'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import MenuSuperior from '@/components/MenuSuperior';

import { useAuth } from '@/context/AuthContex';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
  const { signUp } = useAuth();
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [error, setError] = useState('');

  const onSubmit = handleSubmit(async (data) => {
    try {
      data.dni = parseInt(data.dni, 10);
      await signUp(data);
      router.push("/login");
    } catch (error) {
      console.log(error);
      setError('Hubo un problema al crear la cuenta.');
    }
  });

  // Convertir los errores a un array de mensajes
  const errorMessages = Object.values(errors).map(err => err.message);

  return (
    <section className='bg-graydark h-[100%] flex justify-center flex-col relative'>
      <MenuSuperior link="login" text="Iniciar sesión" />

      <section className={`border ${error || errorMessages.length ? "border-red-400 bg-gray-950" : "border-transparent"} absolute top-32 left-1/2 transform -translate-x-1/2 w-[95%] bg-graydark h-auto max-w-[450px] mx-auto rounded-lg transition-all duration-300 py-4`}>
        {error && (
          <section>
            <h6 className='font-semibold text-center border-b border-red-400 w-[90%] mx-auto py-2 text-red-400'>No pudiste crear la cuenta por los siguientes motivos:</h6>
            <p className='w-[90%] mx-auto text-sm text-center mt-6 text-white'>{error}</p>
          </section>
        )}
        {errorMessages.length > 0 && (
          <ul className='text-red-500 text-sm list-disc list-inside px-4'>
            {errorMessages.map((msg, index) => (
              <li key={index} className='list-none text-center'>{msg}</li>
            ))}
          </ul>
        )}
      </section>

      <h6 className='text-center font-semibold text-lg mt-8 mb-4 text-white'>Crear Cuenta</h6>
      <form onSubmit={onSubmit} className='flex flex-col items-center lg:grid grid-cols-1 lg:grid-cols-2 max-w-[720px] mx-auto gap-2'>

        <div className='w-full flex flex-col items-center'>
          <input
            type="text"
            name="firstname"
            placeholder='Ingresar Nombre'
            className={`p-2 rounded-lg max-w-[450px] lg:col-span-1 border outline-none text-black font-semibold placeholder:font-thin ${errors.firstname ? 'border-red-500' : ''}`}
            {...register("firstname", { required: "El nombre es obligatorio" })}
          />
        </div>

        <div className='w-full flex flex-col items-center'>
          <input
            type="text"
            name="lastname"
            placeholder='Ingresar Apellido'
            className={`p-2 rounded-lg max-w-[450px] outline-none text-black font-semibold placeholder:font-thin ${errors.lastname ? 'border-red-500' : ''}`}
            {...register("lastname", { required: "El apellido es obligatorio" })}
          />
        </div>

        <div className='w-full flex flex-col items-center'>
          <input
            type="text"
            name="dni"
            placeholder='Ingresar Documento'
            className={`p-2 rounded-lg max-w-[450px] outline-none text-black font-semibold placeholder:font-thin ${errors.dni ? 'border-red-500' : ''}`}
            {...register("dni", { required: "El DNI es obligatorio", pattern: { value: /^[0-9]+$/, message: "El DNI debe ser un número válido" } })}
          />
        </div>

        <div className='w-full flex flex-col items-center'>
          <input
            type="email"
            name="email"
            placeholder='Ingresar Email'
            className={`p-2 rounded-lg max-w-[450px] outline-none text-black font-semibold placeholder:font-thin ${errors.email ? 'border-red-500' : ''}`}
            {...register("email", { required: "El email es obligatorio", pattern: { value: /^\S+@\S+$/, message: "El email debe ser válido" } })}
          />
        </div>

        <div className='w-full flex flex-col items-center'>
          <input
            type="password"
            name="password"
            placeholder='Ingresar Contraseña'
            className={`p-2 rounded-lg max-w-[450px] outline-none text-black font-semibold placeholder:font-thin ${errors.password ? 'border-red-500' : ''}`}
            {...register("password", { required: "La contraseña es obligatoria", minLength: { value: 6, message: "La contraseña debe tener al menos 6 caracteres" } })}
          />
        </div>

        <div className='w-full flex flex-col items-center'>
          <input
            type="password"
            name="confirmPassword"
            placeholder='Confirmar contraseña'
            className={`p-2 rounded-lg max-w-[450px] outline-none text-black font-semibold placeholder:font-thin ${errors.confirmPassword ? 'border-red-500' : ''}`}
            {...register("confirmPassword", { required: "La confirmación de la contraseña es obligatoria", validate: value => value === watch("password") || "Las contraseñas no coinciden" })}
          />
        </div>

        <div className='w-full flex flex-col items-center'>
          <input
            type="text"
            name="phone"
            placeholder='Ingresar Telefono'
            className={`p-2 rounded-lg max-w-[450px] outline-none text-black font-semibold placeholder:font-thin ${errors.phone ? 'border-red-500' : ''}`}
            {...register("phone", { required: "El teléfono es obligatorio", pattern: { value: /^[0-9]+$/, message: "El teléfono debe ser un número válido" } })}
          />
        </div>

        <button type="submit" className='bg-greenlime p-2 rounded-lg text-graydark w-full font-semibold'>Crear Cuenta</button>
      </form>

      <footer className='bg-greylight w-full text-greenlime absolute bottom-0 py-2'>
        <h6 className='text-center text-greenlime'>2024 Digital Money House</h6>
      </footer>
    </section>
  );
};

export default RegisterPage;