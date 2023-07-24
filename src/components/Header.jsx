import * as React from 'react';
import {NavLink} from 'react-router-dom';
import { useContext, useState } from "react";
import { TiendaContext } from "../context/TiendaContext";



export default function Header() {
    const { user, logout, cartItems } = useContext(TiendaContext);
    const [isActive, setIsActive] = useState(false);
    const numberOfObjects = cartItems.length;

    const handleToggleClass = () => {
        setIsActive(!isActive); // Invierte el estado actual de isActive
    };


    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <div className="container">
                <NavLink to="/">
                    <img className="logo-web mob"
                    src="/images/logo-white.png"
                    alt="Patitas Pet Store logo"
                    loading="lazy"
                    />
                </NavLink>
                <button onClick={handleToggleClass}
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                <i className="fas fa-bars"></i>
                </button>
                <div className={`collapse navbar-collapse ${isActive ? 'show' : ''}`} id="navbarSupportedContent">
                    <NavLink to="/" className="navbar-brand mt-2 mt-lg-0">
                    <img className="logo-web desk"
                        src="/images/logo-white.png"
                        alt="Patitas Pet Store logo"
                        loading="lazy"
                        />
                    </NavLink>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li onClick={handleToggleClass} className="nav-item">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li onClick={handleToggleClass} className="nav-item">
                        <NavLink to="/tienda" className="nav-link">Tienda</NavLink>
                        </li>

                        {!user ? (<></>) : (<>

                        <li onClick={handleToggleClass} className="nav-item">
                        <NavLink to="/carrito" className="nav-link">Carrito 
                        {!numberOfObjects > 0 ? (
                            <></>
                        ) : (
                            <span className='carrito-cantidad'> {numberOfObjects}</span>
                        )}
                        </NavLink>
                        </li>

                        </>)}
                        
                        {!user ? (<></>) : (<>
                            
                        <li onClick={handleToggleClass} className="nav-item">
                            <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
                        </li>
                        
                        </>)}
                        
                        {!user ? (<>
                        
                        <li onClick={handleToggleClass} className="nav-item">
                            <NavLink to="/ingresar" className="nav-link">Ingresar</NavLink>
                        </li>

                        <li onClick={handleToggleClass} className="nav-item">
                            <NavLink to="/registro" className="nav-link">Registro</NavLink>
                        </li>
                        
                        </>) : (<></>)}

                        
                        {!user ? (<></>) : (<>
                            <li><a className='btn-logout' onClick={logout}>Salir <i className="fas fa-sign-out-alt"></i></a></li>
                        </>)}
                    </ul>
                </div>
            </div>
        </nav>
        </header>

    )
};