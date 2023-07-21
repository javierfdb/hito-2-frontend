import React, { Component } from 'react';
import Banner from "../components/Banner";
import { useContext } from 'react';
import { TiendaContext } from '../context/TiendaContext'

export default function Carrito() {

    const {cartItems, totalPrice, handleRestar, handleSumar, handleDelete } = useContext(TiendaContext);

    return (
    <>
    <Banner url="/images/banner-home.png" texto="Compra CTM"/>
    <div className='container container-detalle mt-5'>
    <div className="row">
                    {cartItems.map((item, index) => {
                        const {id, imagen, titulo, descripcion, precio, cantidad } = item;
                        return  <div key={id} className="card-pikza card-pikza-carro col-lg-12">
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <figure className='mb-0'>
                                                <img className='w-100' src={imagen} alt="Alfredo's Pizza Cafe" />
                                            </figure>
                                        </div>
                                        <div className="col-lg-6 texto">
                                            <h4>{titulo}</h4>
                                        </div>
                                        <div className="col-lg-4 texto sumar-restar">
                                            <p className="price">
                                            ${precio} 
                                            </p>


                                            { cantidad === 1 ? <button disabled className='mx-3 first bg-danger' onClick={() => handleRestar(id, imagen, titulo, descripcion, precio, cantidad)} ><i class="fas fa-minus"></i></button> : <button className='mx-3 first bg-danger' onClick={() => handleRestar(id, imagen, titulo, descripcion, precio, cantidad)} ><i class="fas fa-minus"></i></button> }

                                            <h4 className='mx-3'>{cantidad}</h4>

                                            <button className='mx-3 last bg-primary' onClick={() => handleSumar(id, imagen, titulo, descripcion, precio, cantidad)}><i class="fas fa-plus"></i></button>

                                            <button className='mx-3 bg-dark delete' onClick={() => handleDelete(id, imagen, titulo, descripcion, precio, cantidad)}><i class="fas fa-trash-alt"></i></button>

                                        </div>
                                    </div>
                                </div>
                    })}
                        <div className="box-bajada">
                        <p className='total'>Total: ${totalPrice.toLocaleString()}</p>
                        <button className='btn btn-primary pagar'>Ir a pagar</button>
                        </div>
                    </div>
    </div>

    </>
    )
}