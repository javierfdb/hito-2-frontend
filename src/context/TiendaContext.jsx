import React from 'react';
import { useEffect, useState, createContext } from "react";
import { useNavigate } from 'react-router-dom';


export const TiendaContext = createContext();

const initialStateToken = localStorage.getItem("token"); // esto siempre debe estar por fuera del 'tienda provider'

export default function TiendaProvider  ({children})  {

    const navigate = useNavigate();

    const [token, setToken] = useState(initialStateToken);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);
    const [singleproduct, setSingle] = useState([]);

    const getProductos = async () => {
        try {
            const url = 'http://localhost:5000/caca';
            const response = await fetch(url)
            const allProductos = await response.json();
            setProductos(allProductos);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProductos();
    }, []);

    useEffect(() => {
        if(token){
            getUserProfile(token);
        } else {
            setUser(false);
        }
    }, []);

    const handleDetalle = async (id) => {
        
        console.log("desde hd", id);
        try {
            const url = 'http://localhost:5000/caca/'+ id;
            const response = await fetch(url)
            const detailProducto = await response.json();
            setSingle(detailProducto);
            console.log(detailProducto);
            console.log("url: ", url);
            
            
        } catch (error) {
            console.log(error)
        }
        navigate('/detalle/'+ id);
        console.log("afuera");
    };

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
        // Navigate("/Home");
    }

    return (
        <TiendaContext.Provider value={{singleproduct, productos, handleDetalle:handleDetalle, saveToken, token, getUserProfile, user, loading, setLoading, logout }}>
            {children}
        </TiendaContext.Provider>
    )
}

