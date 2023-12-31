import React, { Component, useContext} from 'react';
import { TiendaContext } from "../context/TiendaContext";
import {NavLink} from 'react-router-dom';

export default function Dashboard() {

    const { user, publicaciones, like } = useContext(TiendaContext);
    const numberOfPubli = publicaciones.length;
    const numberOfLikes = like.length;
 
    return (
        <>
        <section className="banner-interior">
            <img className="bg-banner" src="/images/banner-tienda.png" alt="banner11"/>
            <div className="texto">
                <h1 className="text-center mb-3">Bienvenid@ <i>{user[0].correo}</i></h1>
            </div>
        </section>

        <div className="container min-container">
            <div className="row my-5">
                    <div className="col-lg-2 cont-nav-dash">
                    <NavLink to="/dashboard" className="nav-link this-dash">Mi perfil</NavLink>
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
                    <NavLink to="/dashboard/publicar" className="nav-link">Publicar</NavLink>
                    </div>
                <div className="col-lg-10">
                    <div className="row">
                        <h2>{user[0].correo}</h2>
                    </div>
                </div>
            </div>
        
        </div>
        </>
    )
} 