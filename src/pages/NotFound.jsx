import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default function NotFound() {

    return (
        
        <> 
        <div className="container">
            <div className="row d-flex justify-content-center">
            <Link className='mt-4 volver-404' to="/"> <i className="fas fa-arrow-left mr-2"></i> Volver al home</Link>
                <div className="col-lg-5 pt-5 mb-5">
                    <h2 className='text-center'>Error - Página no existe.</h2>
                    <figure> 
                        <img className='w-100' src="/images/not-found.gif" alt="Patitas Pet" />
                    </figure> 
                    
                </div>
            </div>
        </div>
        </>
    )
}