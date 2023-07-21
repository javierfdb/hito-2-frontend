import React, { Component, useContext} from 'react';
import Banner from "../components/Banner";
import { TiendaContext } from "../context/TiendaContext";
import { useNavigate } from 'react-router-dom';
import {NavLink} from 'react-router-dom';


export default function Dashboard() {

    const {saveToken, getUserProfile, loading, setLoading, user } = useContext(TiendaContext);
    // console.log("user: ", user);
    // console.log("user-detail: ", user[0].email);
    return (
        <>
       
        <section className="banner-interior">
            <img className="bg-banner" src="/images/banner-tienda.png" alt="banner11"/>
            <div className="texto">
                <h1 className="text-center mb-3">Bienvenid@ <i>{user[0].email}</i></h1>
            </div>
        </section>

        <div className="container">
            <div className="row my-5">
            <div className="col-lg-2 cont-nav-dash">
            <NavLink to="/dashboard" className="nav-link this-dash">Mi perfil</NavLink>
            <NavLink to="/dashboard/mis-me-gusta" className="nav-link">Mis Me Gusta</NavLink>
            <NavLink to="/dashboard/mis-publicaciones" className="nav-link">Mis publicaciones</NavLink>
            <NavLink to="/dashboard/publicar" className="nav-link">Publicar</NavLink>
            </div>
            <div className="col-lg-10">
            <div className="row">
                <h2>{user[0].email}</h2>
            </div>
            </div>
            </div>
        
        </div>

        </>
    )
} 