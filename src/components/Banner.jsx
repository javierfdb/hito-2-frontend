import React, { Component } from 'react'

 export default function Banner({url, texto}) {
  
    return (
        <section className="banner-interior">
            <img className="bg-banner" src={url} alt="banner11"/>
            <div className="texto">
                <h1 className="text-center mb-3">{texto}</h1>
            </div>
        </section>
  )
};