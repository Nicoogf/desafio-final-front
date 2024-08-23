'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchServiceRequest, fetchServicesRequest } from '@/axios/services';

const ServiceContext = createContext();

export const useServices = () => {
    const context = useContext(ServiceContext);
    if (!context) {
        throw new Error('useServices debe usarse dentro de un ServiceProvider');
    }
    return context;
};


export const ServiceProvider = ({ children }) => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedServiceId, setSelectedServiceId] = useState(null); 

    const fetchServices = async () => {
        try {
            setLoading(true);
            const data = await fetchServicesRequest();
            setServices(data);
        } catch (err) {
            setError(err.message || 'Error al obtener los servicios');
        } finally {
            setLoading(false);
        }
    };

    const selectService = (id) => {
        setSelectedServiceId(id); 
    };

    const getService = async(id) => {
        try {
            setLoading(true);
            const data = await fetchServiceRequest(id);
            setServices(data);
        } catch (err) {
            setError(err.message || 'Error al obtener los servicios');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchServices();
    }, []);

    return (
        <ServiceContext.Provider value={{ getService , selectedServiceId , selectService, services, loading, error, fetchServices }}>
            {children}
        </ServiceContext.Provider>
    );
};

