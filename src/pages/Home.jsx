import React, { Component} from 'react';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import CardHome from "../components/CardHome";
import BannerCta from "../components/BannerCta";

export default function Home() {
    return (
        <>
            <Splide aria-label="My Favorite Images" 
            options={ {
            autoplay     : true,
            interval: 3000,
            type    : 'loop',
            rewind: true,
            gap   : '1rem'
            }}>
                <SplideSlide>
                    <img src="/images/slide-01.png" alt="Image 1" className='slide-img'/>
                    <div className="texto">
                        <h1>Patitas Pet Store</h1>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <img src="/images/slide-02.png" alt="Image 1" className='slide-img'/>
                    <div className="texto">
                        <h2>Los mejores productos</h2>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <img src="/images/slide-03.png" alt="Image 1" className='slide-img'/>
                    <div className="texto">
                        <h2>Despacho gratis</h2>
                    </div>
                </SplideSlide>
            </Splide>
            
            <section className="cards-home my-5">
                <div className="container">
                    <div className="row">
                        <CardHome 
                        url="/images/card-home-01.jpg" 
                        titulo="Accesorios"
                        bajada="Tenemos los mejores accesorios para tu mascota, y todo con los mejores precios y promociones."
                        link="/"
                        />
                        <CardHome 
                        url="/images/card-home-03.jpg" 
                        titulo="Alimentación"
                        bajada="Descubre la mejor variedad de opciones de alimentación saludable. ¡Tu mascota te lo agradecerá!"
                        link="/"
                        />
                        <CardHome 
                        url="/images/card-home-02.jpg" 
                        titulo="Cuidados"
                        bajada="Brinda a tu mascota el cuidado que se merece con nuestros productos de higiene, salud y bienestar."
                        link="/"
                        />
                    </div> 
                </div>
            </section>
            <BannerCta 
            titulo="Patitas Pet Store"
            bajada="Somos Patitas Pet Store, contamos con despacho express y más de 5.000 productos para hacer feliz a tu mascota."
            link="/" 
            />
    
        </>
    )
} 