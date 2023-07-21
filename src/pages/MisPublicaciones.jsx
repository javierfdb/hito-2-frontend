import React, { Component, useContext} from 'react';
import Banner from "../components/Banner";
import { TiendaContext } from "../context/TiendaContext";
import { useNavigate } from 'react-router-dom';
import {NavLink} from 'react-router-dom';


export default function MisPublicaciones() {
    
    return (
        <>
       <Banner url="/images/banner-home.png" texto="Mis publicaciones"/>
       <div className="container">
            <div className="row my-5">
            <div className="col-lg-2 cont-nav-dash">
                <NavLink to="/dashboard" className="nav-link">Mi perfil</NavLink>
                <NavLink to="/dashboard/mis-me-gusta" className="nav-link">Mis Me Gusta</NavLink>
                <NavLink to="/dashboard/mis-publicaciones" className="nav-link this-dash">Mis publicaciones</NavLink>
                <NavLink to="/dashboard/publicar" className="nav-link">Publicar</NavLink>
            </div>
            <div className="col-lg-10">
            <div className="row">

           
            </div>
            </div>
            </div>
        
        </div>

        
       

        </>
    )
} 