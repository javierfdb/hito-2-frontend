import React, { Component, useContext} from 'react';
import Banner from "../components/Banner";
import { TiendaContext } from "../context/TiendaContext";
import { useNavigate } from 'react-router-dom';
import {NavLink} from 'react-router-dom';


export default function MisMeGusta() {
    const { like, handleDetalle, handleDislike } = useContext(TiendaContext);  
    return (
        <>
       <Banner url="/images/banner-home.png" texto="Mis Me Gusta"/>
       <div className="container">
            <div className="row my-5">
            <div className="col-lg-2 cont-nav-dash">
                <NavLink to="/dashboard" className="nav-link">Mi perfil</NavLink>
                <NavLink to="/dashboard/mis-me-gusta" className="nav-link this-dash">Mis Me Gusta</NavLink>
                <NavLink to="/dashboard/mis-publicaciones" className="nav-link">Mis publicaciones</NavLink>
                <NavLink to="/dashboard/publicar" className="nav-link">Publicar</NavLink>
            </div>
            <div className="col-lg-10">
            <div className="row">
            
            {like.map((item, index) => {
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
                                <h4 className="precio">{precio}</h4>
                                <div className="box-btn-comprar">
                                    <button onClick={() => handleDetalle(id)} className='btn btn-comprar'>Ver más</button>
                                </div>
                            </div>
                        </div>
                    </div>
            })}

            </div>
            </div>
            </div>
        
        </div>

        
       

        </>
    )
} 