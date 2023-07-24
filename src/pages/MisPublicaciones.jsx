import React, { Component, useContext} from 'react';
import Banner from "../components/Banner";
import { TiendaContext } from "../context/TiendaContext";
import { useNavigate } from 'react-router-dom';
import {NavLink} from 'react-router-dom';


export default function MisPublicaciones() {
    const {publicaciones, handleDetalle, like} = useContext(TiendaContext);
    const numberOfPubli = publicaciones.length;
    const numberOfLikes = like.length;

    return (
        <>
       <Banner url="/images/banner-home.png" texto="Mis publicaciones"/>
       <div className="container">
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
                <NavLink to="/dashboard/mis-publicaciones" className="nav-link this-dash">Mis publicaciones
                {!numberOfPubli > 0 ? (
                    <></>
                ) : (
                    <span className='carrito-cantidad'> {numberOfPubli}</span>
                )}
                </NavLink>
                <NavLink to="/dashboard/publicar" className="nav-link">Publicar</NavLink>
            </div>
            <div className="col-lg-10">
                <div className="row mis-publicaciones">

                {numberOfPubli == 0 ? (<div className="col-lg-6">
      <h4 className='text-center mb-3'>Nada por acá aún.</h4>
      <figure> <img className='w-100' src="/images/empty-mis-publicaciones.png" alt="Patitas Pet Store" /></figure>

      <div class="box-btn-comprar">
        <NavLink to="/dashboard/publicar" className="nav-link btn btn-comprar">Ir a publicar</NavLink>
     </div>
   </div>) : (<>{publicaciones.map((item) => {
                    const {id,titulo,descripcion,precio, imagen} = item;
                    return <div key={id} className="col-lg-12">
                            <div className="card">
                                <figure>
                                    <img src={imagen} className="" alt="Patitas Pet Store"/>
                                </figure>
                                <div className="card-body">
                                
                                    <div className="textos">
                                        <h5 className="card-title">{titulo}</h5>
                                        <p className="card-text">{descripcion}</p>
                                        <h4 className="precio">${precio}</h4>
                                    </div>
                                    <div className="box-btn-comprar">
                                        <button onClick={() => handleDetalle(id)} className='btn btn-comprar'>Detalle</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                })}</>)}
            
                </div>
            </div>
            </div>
        
        </div>

        </>
    )
} 