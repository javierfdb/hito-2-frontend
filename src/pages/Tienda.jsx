import React from 'react';
import { useState } from "react";
import Banner from "../components/Banner";
import { useContext } from 'react';
import { TiendaContext } from '../context/TiendaContext';

export default function Tienda() {
    const {productos, handleDetalle, handleLike, handleDislike} = useContext(TiendaContext);
    
   
        
    return (

        <>
        <Banner url="/images/banner-home.png" texto="Tienda"/>
            <section className="productos">
                <div className="container">
                    <div className="row my-5">
                    <div className="col-lg-3">
                        <div className="box-checkboxs">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  />
                            <label className="form-check-label" for="flexRadioDefault1">
                                Top de ventas
                            </label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                            <label className="form-check-label" for="flexRadioDefault2">
                                Perros
                            </label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                            <label className="form-check-label" for="flexRadioDefault3">
                                Gatos
                            </label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
                            <label className="form-check-label" for="flexRadioDefault4">
                                Animales exóticos
                            </label>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="row m-0 p-0">
                                
                                {productos.map((item) => {
                                    const {id,titulo,descripcion,precio, imagen, meGusta} = item;
                                    return <div key={id} className="col-lg-4">
                                            <div className="card">
                                                <img src={imagen} className="card-img-top" alt="Patitas Pet Store"/>
                                                <div className="card-body">
                                                <div className="box-svg">
                                                <svg onClick={() => handleLike(id, imagen, titulo, descripcion, precio)} className="svg-like"  width="40px" viewBox="0 0 24 24"><path fill="gray" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path></svg> 
                                                
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
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
} 