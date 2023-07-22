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
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('ppsCarrito')) || [] );
    const [like, setLike] = useState(JSON.parse(localStorage.getItem('ppsLike')) || [] );

    const getProductos = async () => {
        try {
            const url = import.meta.env.VITE_API_URL + '/tienda';
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

    useEffect(() => {
        localStorage.setItem('ppsCarrito', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem('ppsLike', JSON.stringify(like));
    }, [like]);

    const totalPrice = cartItems.reduce((total, item) => total + item.precio, 0);

    const handleDetalle = async (id) => {
        try {
            const url = import.meta.env.VITE_API_URL + '/detalle/'+ id;
            const response = await fetch(url)
            const detailProducto = await response.json();
            setSingle(detailProducto);
        } catch (error) {
            console.log(error)
        }
        navigate('/detalle/'+ id);
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
        navigate("/");
    }

    const handleDetallito = (id, imagen, titulo, descripcion, precio, cantidad) => {
        if (cartItems.some((item) => id == item.id)) {
            alert('Producto ya agregado');
        } else {
            // correccion error raro
            const newBuenoWorker = {
                id: id,
                imagen: imagen,
                titulo: titulo,
                precio: precio,
                cantidad: 1
               }
               setCartItems([...cartItems, newBuenoWorker]);
            const totalPrice = cartItems.reduce((total, item) => total + item.precio, 0);
            alert('Producto agregado con éxito');
        }
    }

    const handleSumar = (id, imagen, titulo, descripcion, precio, cantidad) => {
        const nuevoCarrito = cartItems.map(producto => {
            if (producto.id === id) {
              return { ...producto, cantidad: producto.cantidad + 1, precio: producto.precio + precio/cantidad};
            }
            return producto;
          });
          
          setCartItems(nuevoCarrito);
    }   

    const handleRestar = (id, imagen, titulo, descripcion, precio, cantidad) => {
        const nuevoCarrito = cartItems.map(producto => {
            if (producto.id === id) {
                const nuevaCantidad = producto.cantidad - 1 < 1 ? 1 : producto.cantidad - 1;
                return { ...producto, cantidad: nuevaCantidad, precio: producto.precio - precio/cantidad};
            } 
            return producto;
          });
          
          setCartItems(nuevoCarrito);
    }
    
    const handleDelete = (id, imagen, titulo, descripcion, precio, cantidad) => {
        const nuevoArray = cartItems.filter((item) => id !== item.id)  
        setCartItems(nuevoArray);
    }; 

    const handleAlerta= () => {
        alert('Debes iniciar sesión CTM')
    }; 

    const handleLike = (id, imagen, titulo, descripcion, precio, meGusta) => {
        if (like.some((item) => id == item.id)) {
            alert('Producto ya agregado');
        } else {
            // correccion error raro
            const newLike = {
                id: id,
                imagen: imagen,
                titulo: titulo,
                precio: precio,
                meGusta: true
               }

               setLike([...like, newLike]);
            
            
        }
    }

   

    const handleDislike = (id, imagen, titulo, descripcion, precio, meGusta) => {
        const nuevoLike = like.filter((item) => id !== item.id)  
        setLike(nuevoLike);
    }; 

    return (
        <TiendaContext.Provider value={{handleDislike, like, handleLike, handleAlerta, handleDelete, handleRestar, handleSumar, cartItems, totalPrice, handleDetallito, singleproduct, productos, handleDetalle, saveToken, token, getUserProfile, user, loading, setLoading, logout }}>
            {children}
        </TiendaContext.Provider>
    )
}

