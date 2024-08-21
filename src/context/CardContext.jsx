'use client'
import React, { createContext, useContext, useState } from 'react';
import { CreateCardRequest, DeleteCardRequest, getCardsRequest } from '@/axios/Cards';

const CardsContext = createContext();

export const useCards = () => {
    const context = useContext(CardsContext);
    if (!context) {
        throw new Error("useCards debe ser utilizado dentro del CardsProvider");
    }
    return context;
};

export const CardsProvider = ({ children }) => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCards = async (accountId, token) => {
        try {
            setLoading(true);
            const data = await getCardsRequest(accountId, token);
            setCards(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const createCard = async (accountId, token, cardData) => {
        try {
          const newCard = await CreateCardRequest(accountId, token, cardData);
          setCards((prevCards) => [...prevCards, newCard]);
        } catch (error) {
          console.error('Fallo en la creacion de Tarjeta:', error);
          console.log(error.response?.data)
          setError(error?.response?.data)
        }
      };

      const deleteCard = async (accountId, cardId, token) => {
        try {
            setLoading(true);
            await DeleteCardRequest(accountId, cardId, token);
            setCards(prevCards => prevCards.filter(card => card.id !== cardId));
        } catch (err) {
            setError(err.message || 'Error eliminando la tarjeta');
        } finally {
            setLoading(false);
        }
    };


    return (
        <CardsContext.Provider value={{ cards, loading, error, fetchCards,createCard,deleteCard }}>
            {children}
        </CardsContext.Provider>
    );
};