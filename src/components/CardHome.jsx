import React, { Component } from 'react'

 export default function CardHome({url, titulo, bajada, link}) {
  
    return (
        <div className="col-lg-4">
            <div className="card" style={{ width: '18rem' }}>
                <img src={url} className="card-img-top" alt="Patitas Pet Store"/>
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{bajada}</p>
                    <a href={link} className="btn btn-card-home">Ver más</a>
                </div>
            </div>
        </div>
  )
};