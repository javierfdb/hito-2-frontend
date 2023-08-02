import React, { Component, useContext, useState} from 'react';
import { Button } from "@mui/material";
import Banner from "../components/Banner";
import { TiendaContext } from "../context/TiendaContext";
import { useNavigate } from 'react-router-dom';
import {NavLink} from 'react-router-dom';

export default function Publicar() {
    const navigate = useNavigate();
    const {loading, setLoading, publicaciones, like, saveToken, getUserProfile, token} = useContext(TiendaContext);

    const numberOfPubli = publicaciones.length;
    const numberOfLikes = like.length;

    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [correo, setCorreo] = useState("");
    const [imagen, setImagen] = useState("");
    const [precio, setPrecio] = useState("");
    const [categoria, setCategoria] = useState("");
    const [megusta, setMegusta] = useState("");

    const handlePublicar = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await fetch (import.meta.env.VITE_API_URL + "/dashboard/publicar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    titulo,
                    descripcion,
                    correo,
                    imagen,
                    precio,
                    categoria,
                    megusta,
                }),
            });
            const data = await res.json();
            navigate("/dashboard/mis-publicaciones");
            window.location.reload();
            getMisPublicaciones();
        } catch (error) {
            console.log(error); 
        } finally {
            setLoading(false);
        } 

        };

    return (
        <>
       <Banner url="/images/banner-home.png" texto="Publicar"/>
       <div className="container min-container">
            <div className="row my-5">
            <div className="col-lg-2 cont-nav-dash">
                <NavLink to="/dashboard" className="nav-link">Mi perfil</NavLink>
                <NavLink to="/dashboard/mis-me-gusta" className="nav-link">Mis Me Gusta
                {!numberOfLikes > 0 ? (
                <></>
                ) : (
                    <span className='carrito-cantidad'> {numberOfLikes}</span>
                )}
                </NavLink>
                <NavLink to="/dashboard/mis-publicaciones" className="nav-link">Mis publicaciones
                {!numberOfPubli > 0 ? (
                <></>
                ) : (
                    <span className='carrito-cantidad'> {numberOfPubli}</span>
                )}
                </NavLink>
                <NavLink to="/dashboard/publicar" className="nav-link this-dash">Publicar</NavLink>
            </div>
            <div className="col-lg-10">
            <div className="row">
            <div className="publicar wrap-form">
                    <h2>Ingresa un producto</h2>
                    <form onSubmit={handlePublicar}>
                        <div className="box-form">
                        <input required type="text" placeholder='Ingrese un titulo' value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                        <input required type="text" placeholder='Ingresa una descripción' value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                        <input required type="email" placeholder='Ingrese un email' value={correo} onChange={(e) => setCorreo(e.target.value)} />
                        <input required type="text" placeholder='Link imagen' value={imagen} onChange={(e) => setImagen(e.target.value)} />
                        <input required type="text" placeholder='Ingresa un precio' value={precio} onChange={(e) => setPrecio(e.target.value)} />
                        <input required type="text" placeholder='Categoria' value={categoria} onChange={(e) => setCategoria(e.target.value)} />
                        
                        <input required type="text" placeholder='Like'  value={megusta} onChange={(e) => setMegusta(e.target.value)} />
                        <div className="box-btn-submit">
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                disabled={loading}
                                >
                            Publicar
                            </Button>
                        </div>
                        </div>
                    </form>
                    </div>
            </div>
            </div>
            </div>
        
        </div>
        </>
    )
} 