import React, { Component } from 'react'

export default function Banner({url, texto}) {
  
    return (
        <section className="banner-interior">
            <img className="bg-banner" src={url} alt="Patitas Pet Store"/>
            <div className="texto">
                <h1 className="text-center mb-3">{texto}</h1>
            </div>
        </section>
  )
};