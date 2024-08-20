'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { loginRequest, registerRequest } from '@/axios/Auth'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { jwtDecode } from "jwt-decode";
import { getAccountDetails, userIdRequest } from '@/axios/profile'

const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("El useAuth debe ser utilizado dentro del AuthProvider")
    }
    return context
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errorsResponse, setErrorResponse] = useState(null)
    const [loading, setLoading] = useState(true)
    const [token, setToken] = useState(null);
    const router = useRouter()


    //Peticion de Registro
    const signUp = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log(res)

        } catch (error) {
            console.log(error.response)

        }
    }

    const signIn = async (user) => {
        try {
            const res = await loginRequest(user)
            console.log("El valor de data fue:", res.data.token)
            router.push("/dashboard")
        } catch (error) {            
            console.log(error.response?.data)
            setErrorResponse("Credenciales inválidas")
        }
    }

 
   

    useEffect(() => {       
        const storedToken = Cookies.get("token");
        console.log(storedToken)
        if (storedToken) {
            try {             
                const decodedData = jwtDecode(storedToken);
                console.log("Decoded JWT Data:", decodedData);
                setUser(decodedData);
            } catch (error) {
                console.error("Invalid token:", error);
            }
            setToken(storedToken);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ signUp, signIn ,setErrorResponse, errorsResponse, user, isAuthenticated, isAuthenticated, loading }}>
            {children}
        </AuthContext.Provider>
    )

}