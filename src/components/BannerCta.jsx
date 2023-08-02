import React, { Component } from 'react'

export default function BannerCta({titulo, bajada, link}) {
  
    return (
        <section className="banner-cta-home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <h2>{titulo}</h2>
                            <p>{bajada}</p>
                        </div>
                        <div className="col-lg-3 box-btn">
                            <a href={link} className="btn btn-card-home btn-lg">Descubrir</a>
                        </div>
                    </div>
                </div>
            </section>
  )
};