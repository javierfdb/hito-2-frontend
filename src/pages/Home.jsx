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
                        titulo="Card título 01"
                        bajada="Some quick example text to build on the card title and make up the bulk of the card's content."
                        link="https://www.google.com/?hl=es"
                        />
                        <CardHome 
                        url="/images/card-home-01.jpg" 
                        titulo="Card título 02"
                        bajada="Some quick example text to build on the card title and make up the bulk of the card's content."
                        link="https://www.google.com/?hl=es"
                        />
                        <CardHome 
                        url="/images/card-home-01.jpg" 
                        titulo="Card título 03"
                        bajada="Some quick example text to build on the card title and make up the bulk of the card's content."
                        link="https://www.google.com/?hl=es"
                        />
                    </div> 
                </div>
            </section>
            <BannerCta 
            titulo="Patitas Pet Store"
            bajada="Some quick example text to build on the card title and make up the bulk of the card's content."
            link="https://www.google.com/?hl=es" 
            />
    
        </>
    )
} 