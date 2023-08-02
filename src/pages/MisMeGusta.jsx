import React, { Component, useContext} from 'react';
import Banner from "../components/Banner";
import { TiendaContext } from "../context/TiendaContext";
import { useNavigate } from 'react-router-dom';
import {NavLink} from 'react-router-dom';


export default function MisMeGusta() {
    const {like, handleDetalle, handleDislike, publicaciones } = useContext(TiendaContext);  
    const numberOfLikes = like.length;
    const numberOfPubli = publicaciones.length;
    console.log(numberOfLikes);
    return (
        <>
       <Banner url="/images/banner-home.png" texto="Mis Me Gusta"/>
       <div className="container min-container">
            <div className="row my-5">
            <div className="col-lg-2 cont-nav-dash">
                <NavLink to="/dashboard" className="nav-link">Mi perfil</NavLink>
                <NavLink to="/dashboard/mis-me-gusta" className="nav-link this-dash">Mis Me Gusta
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
            <div className="row mis-me-gusta">
            
            {numberOfLikes == 0 ? (<div className="col-lg-6">
      <h4 className='text-center mb-3'>Nada por acá aún.</h4>
      <figure> <img className='w-100' src="/images/empty-me-gusta.png" alt="Patitas Pet Store" /></figure>

      <div className="box-btn-comprar">
        <NavLink to="/tienda" className="nav-link btn btn-comprar">Ir a la Tienda</NavLink>
     </div>
   </div>) : (<>{like.map((item) => {
                const {id, imagen, titulo, descripcion, precio, meGusta} = item;
                return <div key={id} className="col-lg-4">
                        <div className="card">
                            <img src={imagen} className="card-img-top" alt="Patitas Pet Store"/>
                            <div className="card-body">
                            <div className="box-svg">
                            <svg onClick={() => handleDislike( id, imagen, titulo, descripcion, precio, meGusta )} classname="svg-like" width="40px" viewBox="0 0 24 24">
                                
                            { meGusta === false ? <path fill="gray" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" /> : <path fill="red" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" /> 
                            }
                            
                            </svg>
                            </div>
                                <h5 className="card-title">{titulo}</h5>
                                <p className="card-text">{descripcion}</p>
                                <h4 className="precio">${precio}</h4>
                                <div className="box-btn-comprar">
                                    <button onClick={() => handleDetalle(id)} className='btn btn-comprar'>Ver más</button>
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