import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import {createContext} from "react";
import {Navigate} from 'react-router-dom'


export const TiendaContext = createContext();

const initialStateToken = localStorage.getItem("token"); // esto siempre debe estar por fuera del 'tienda provider'

const TiendaProvider = ({children}) => {

    const [token, setToken] = useState(initialStateToken);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(token){
            getUserProfile(token);
        } else {
            setUser(false);
        }
    }, []);

    const getUserProfile = async (accessToken) => {
        try {
            setLoading(true);
          const res = await fetch(import.meta.env.VITE_API_URL + "/dashboard", {
              method: "GET",
              headers: {
                  Authorization: `Bearer ${accessToken}`,
              },
          });
    
        const data = await res.json();
        
        setUser(data);  
        // console.log("data: ", data);
        // console.log("user: ", user);
      } catch (error) {
          console.log(error);
      } finally {
          setLoading(false);
      }
    }

    const saveToken = (accessToken) => {
        setToken(accessToken);
        localStorage.setItem("token", accessToken);
    }

    const logout = () => {
        setUser();
        setToken(null);        
        localStorage.removeItem('token');
        Navigate("/Home");
    }

    return (
        <TiendaContext.Provider value={{saveToken, token, getUserProfile, user, loading, setLoading, logout }}>
            {children}
        </TiendaContext.Provider>
    )
}

export default TiendaProvider;