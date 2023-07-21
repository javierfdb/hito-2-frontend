import { useState, useContext } from 'react'
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom'

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from './pages/Home';
import Tienda from './pages/Tienda';
import Detalle from './pages/Detalle';
import Ingresar from './pages/Ingresar';
import Registro from './pages/Registro';
import Carrito from './pages/Carrito';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import MisMeGusta from './pages/MisMeGusta';
import MisPublicaciones from './pages/MisPublicaciones';
import Publicar from './pages/Publicar';
import { TiendaContext } from './context/TiendaContext';



  export default function App() {

    const {user} = useContext(TiendaContext);
    if(user === null) return <p>Cargando...</p>

    return(
      <>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/tienda' element={<Tienda/>}/>
            <Route path='/detalle/:id' element={<Detalle/>}/>
            <Route path='/ingresar' element={<Ingresar/>}/>
            <Route path='/registro' element={<Registro/>}/>
            <Route path='/carrito' element={<Carrito/>} />
            <Route path='/dashboard' element={ user ? <Dashboard/> : <Navigate to="/ingresar" />}/>
            <Route path='/dashboard/mis-me-gusta' element={ user ? <MisMeGusta/> : <Navigate to="/ingresar" />}/>
            <Route path='/dashboard/mis-publicaciones' element={ user ? <MisPublicaciones/> : <Navigate to="/ingresar" />}/>
            <Route path='/dashboard/publicar' element={ user ? <Publicar/> : <Navigate to="/ingresar" />}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        <Footer/>
      </>
    )
  }
