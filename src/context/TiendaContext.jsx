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
    const [publicaciones, setPublicaciones] = useState([]);
    const [singleproduct, setSingle] = useState([]);
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('ppsCarrito')) || [] );
    const [like, setLike] = useState(JSON.parse(localStorage.getItem('ppsLike')) || [] );
    const [isLoading, setIsLoading] = useState(true);

    const Spinner = async () => {
        setTimeout(() => {
            setIsLoading(false); 
        }, 1000);
    }

    const getProductos = async () => {
        try {
            Spinner();
            const url = import.meta.env.VITE_API_URL + '/productos';
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

    const handleTodosPro = async () => {
        try {
            setIsLoading(true);
            Spinner();
            const url = import.meta.env.VITE_API_URL + '/productos';
            const response = await fetch(url)
            const allProductos = await response.json();
            setProductos(allProductos);
        } catch (error) {
            console.log(error)
        }
    }

    const handleFiltroTop = async () => {
        try {
            setIsLoading(true);
            Spinner();
            const url = import.meta.env.VITE_API_URL + '/productos?filters[categoria][$eq]=Top de ventas';
            const response = await fetch(url)
            const allProductos = await response.json();
            setProductos(allProductos);   
        } catch (error) {
            console.log(error)
        }
    }
    
    const handleFiltroPerros = async () => {
        try {
            setIsLoading(true);
            Spinner();
            const url = import.meta.env.VITE_API_URL + '/productos?filters[categoria][$eq]=Perros';
            const response = await fetch(url)
            const allProductos = await response.json();
            setProductos(allProductos);   
        } catch (error) {
            console.log(error)
        }
    }

    const handleFiltroGatos = async () => {
        try {
            setIsLoading(true);
            Spinner();
            const url = import.meta.env.VITE_API_URL + '/productos?filters[categoria][$eq]=Gatos';
            const response = await fetch(url)
            const allProductos = await response.json();
            setProductos(allProductos);   
        } catch (error) {
            console.log(error)
        }
    }

    const handleFiltroExo = async () => {
        try {
            setIsLoading(true);
            Spinner();
            const url = import.meta.env.VITE_API_URL + '/productos?filters[categoria][$eq]=Animales exóticos';
            const response = await fetch(url)
            const allProductos = await response.json();
            setProductos(allProductos);   
        } catch (error) {
            console.log(error)
        }
    }

    const handlePrecioAsc = async () => {
        try {
            setIsLoading(true);
            Spinner();
            const url = import.meta.env.VITE_API_URL + '/productos?sort[precio]=asc';
            const response = await fetch(url)
            const allProductos = await response.json();
            setProductos(allProductos);   
        } catch (error) {
            console.log(error)
        }
    }

    const handlePrecioDesc = async () => {
        try {
            setIsLoading(true);
            Spinner();
            const url = import.meta.env.VITE_API_URL + '/productos?sort[precio]=desc';
            const response = await fetch(url)
            const allProductos = await response.json();
            setProductos(allProductos);   
        } catch (error) {
            console.log(error)
        }
    }

    const handleAlfAsc = async () => {
        try {
            setIsLoading(true);
            Spinner();
            const url = import.meta.env.VITE_API_URL + '/productos?sort[titulo]=asc';
            const response = await fetch(url)
            const allProductos = await response.json();
            setProductos(allProductos);   
        } catch (error) {
            console.log(error)
        }
    }

    const handleAlfDesc = async () => {
        try {
            setIsLoading(true);
            Spinner();
            const url = import.meta.env.VITE_API_URL + '/productos?sort[titulo]=desc';
            const response = await fetch(url)
            const allProductos = await response.json();
            setProductos(allProductos);   
        } catch (error) {
            console.log(error)
        }
    }

    const getMisPublicaciones = async () => {
        try {

            const res  = await fetch (`${import.meta.env.VITE_API_URL}/dashboard/mis-publicaciones`,{
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            
            const publicacionesPropias = await res.json();
            setPublicaciones(publicacionesPropias);
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMisPublicaciones();
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
        localStorage.removeItem('ppsCarrito');
        localStorage.removeItem('ppsLike');
        navigate("/");
    }

    const handleDetallito = (id, imagen, titulo, descripcion, precio, cantidad) => {
        if (cartItems.some((item) => id == item.id)) {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Producto ya agregado',
                showConfirmButton: false,
                timer: 1500
            })
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
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Producto agregado con éxito',
                    showConfirmButton: false,
                    timer: 1500
                })
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
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Por favor debes iniciar sesión',
            showConfirmButton: false,
            timer: 1500
        })
    }; 

    const handleLike = (id, imagen, titulo, descripcion, precio, meGusta) => {
        if (like.some((item) => id == item.id)) {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Ya estaba agregado ;)',
                showConfirmButton: false,
                timer: 1500
            })
    
        } else {
            // correccion error raro
            const newLike = {
                id: id,
                imagen: imagen,
                titulo: titulo,
                descripcion: descripcion,
                precio: precio,
                meGusta: true
               }

               setLike([...like, newLike]); 
               Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Agregado a tus Me Gusta',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    const handleDislike = (id, imagen, titulo, descripcion, precio, meGusta) => {
        const nuevoLike = like.filter((item) => id !== item.id)  
        setLike(nuevoLike);
    }; 

  
    const handleDeletePubli = async (id) => {
        try {
            const url = import.meta.env.VITE_API_URL + '/productos/'+ id;
            const response = await fetch(url, {
                method: 'DELETE',
            });
            const chale = await response.json();
            setPublicaciones(chale);
            window.location.reload();
            getMisPublicaciones();
        } catch (error) {
            console.log(error)
        }
       
    };

    return (
        <TiendaContext.Provider value={{handleDeletePubli, isLoading, handleAlfAsc, handleAlfDesc, handlePrecioAsc, handlePrecioDesc, handleTodosPro, handleFiltroPerros, handleFiltroTop, handleFiltroGatos, handleFiltroExo, publicaciones, handleDislike, like, handleLike, handleAlerta, handleDelete, handleRestar, handleSumar, cartItems, totalPrice, handleDetallito, singleproduct, productos, handleDetalle, saveToken, token, getUserProfile, user, loading, setLoading, logout }}>
            {children}
        </TiendaContext.Provider>
    )
}

