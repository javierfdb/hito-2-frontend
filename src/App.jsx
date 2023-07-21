import { useState, useContext } from 'react'
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom'

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from './pages/Home';
import Tienda from './pages/Tienda';
import Detalle from './pages/Detalle';
import Ingresar from './pages/Ingresar';
import Registro from './pages/Registro';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
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
            <Route path='/dashboard' element={ user ? <Dashboard/> : <Navigate to="/ingresar" />}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        <Footer/>
      </>
    )
  }
