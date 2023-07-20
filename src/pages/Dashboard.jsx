import React, { Component, useContext} from 'react';
import { TiendaContext } from '../context/TiendaContext';
import Banner from "../components/Banner";


export default function Dashboard() {
    const {user} = useContext(TiendaContext);
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

        <section className='perfil'>
            <div className="container">
                <div className="row justify-content-center my-5">
                    <div className="col-lg-6 d-flex justify-content-center">
                    <div className="card" style={{ width: '18rem' }}>
                        {/* <img src={user.avatar} className="card-img-top" alt="avatar usuario"/> */}
                        <img  className="card-img-top" alt="avatar usuario"/>
                        <div className="card-body">
                        <h5 className="card-title text-center">{user.email}</h5>
                        {/* <p className="card-text">{user.role}</p> */}
                        <p className="card-text"></p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 

        </>
    )
} 