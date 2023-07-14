import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default function NotFound() {

    return (
        
        <> 
            <div className="row d-flex justify-content-center">
                <div className="col-lg-5 pt-5 mb-5">
                    <Link to="/">Volver al home</Link>
                    <figure> 
                        <img className='w-100' src="https://media0.giphy.com/media/jOpLbiGmHR9S0/giphy.gif" alt="Alfredo's Pizza Cafe" />
                    </figure> 
                </div>
            </div>
        </>
    )
}