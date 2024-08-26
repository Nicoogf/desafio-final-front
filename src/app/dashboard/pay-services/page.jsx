'use client'
import Link from 'next/link';
import React from 'react';
import { useServices } from '@/context/ServicesContext';

const PayServicesPage = () => {
  const { services, loading, error ,selectedServiceId, selectService} = useServices();

  const handleSelectService = (id) => {
    selectService(id); 
  };

  console.log(services)



  return (
    <main className='h-[calc(100%-112px)] overflow-y-auto'>
      <section className='mt-8 w-[90%] mx-auto max-w-[720px]'>
        <input placeholder='Busca entre más de 5.000 empresas' className='block w-full p-2 rounded-md shadow-sm outline-none px-4'/>
      </section>

      <section className='mt-8 w-[90%] mx-auto max-w-[720px] bg-white rounded-lg shadow-md p-8'>
        <h6 className='text-lg font-semibold'>Más recientes</h6>

        <section>
          {loading && <p>Cargando servicios...</p>}
          {error && <p>Error: {error}</p>}
          {services.length === 0 && !loading ? (
            <p>No se encontraron servicios disponibles.</p>
          ) : (
            services.map(service => (
              <article key={service.id} className='py-4 flex flex-row justify-between px-4 border-b border-gray-400'>
                <div className='flex flex-row gap-x-3'>
                  <div className='bg-greenlime h-5 w-5 rounded-full'/>
                  <h6>{service.name}</h6>
                </div>
                <Link 
                 onClick={() => handleSelectService(service.id)}
                className='font-semibold' href={`/dashboard/pay-services/${service.id}`}>
                  Seleccionar
                </Link>
              </article>
            ))
          )}
        </section>
      </section>
    </main>
  );
};

export default PayServicesPage;
