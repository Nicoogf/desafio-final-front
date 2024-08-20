'use client'
import React, { createContext, useContext, useState } from 'react'
import { loginRequest, registerRequest } from '@/axios/Auth'
import { useRouter } from 'next/navigation'

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
            console.log("El valor de data fue:", res)
            setUser(res.data)
            setIsAuthenticated(true)
            setErrorResponse(null)
            router.push("/dashboard")
        } catch (error) {            
            console.log(error.response?.data)
            setErrorResponse("Credenciales inválidas")
        }
    }
    return (
        <AuthContext.Provider value={{ signUp, signIn, setErrorResponse, errorsResponse, user, isAuthenticated, isAuthenticated, loading }}>
            {children}
        </AuthContext.Provider>
    )

}