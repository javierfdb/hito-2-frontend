import React from 'react';
import { useState } from "react";
import Banner from "../components/Banner";
import { useContext } from 'react';
import { TiendaContext } from '../context/TiendaContext';

export default function Tienda() {
    const {productos, handleDetalle, handleLike, handleFiltroPerros, handleFiltroTop, handleFiltroGatos, handleFiltroExo, handleTodosPro, handlePrecioAsc, handlePrecioDesc, handleAlfAsc, handleAlfDesc, isLoading} = useContext(TiendaContext);

  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);
  const [isChecked7, setIsChecked7] = useState(false);
  const [isChecked8, setIsChecked8] = useState(false);
  const [isChecked9, setIsChecked9] = useState(false);

  const handleCheckbox1Change = () => {
    setIsChecked1(true);
    setIsChecked2(false);
    setIsChecked3(false);
    setIsChecked4(false);
    setIsChecked5(false);
    setIsChecked6(false);
    setIsChecked7(false);
    setIsChecked8(false);
    setIsChecked9(false);
  };

  const handleCheckbox2Change = () => {
    setIsChecked1(false);
    setIsChecked2(true);
    setIsChecked3(false);
    setIsChecked4(false);
    setIsChecked5(false);
    setIsChecked6(false);
    setIsChecked7(false);
    setIsChecked8(false);
    setIsChecked9(false);
  };

  const handleCheckbox3Change = () => {
    setIsChecked1(false);
    setIsChecked2(false);
    setIsChecked3(true);
    setIsChecked4(false);
    setIsChecked5(false);
    setIsChecked6(false);
    setIsChecked7(false);
    setIsChecked8(false);
    setIsChecked9(false);
  };

  const handleCheckbox4Change = () => {
    setIsChecked1(false);
    setIsChecked2(false);
    setIsChecked3(false);
    setIsChecked4(true);
    setIsChecked5(false);
    setIsChecked6(false);
    setIsChecked7(false);
    setIsChecked8(false);
    setIsChecked9(false);
  };

  const handleCheckbox5Change = () => {
    setIsChecked1(false);
    setIsChecked2(false);
    setIsChecked3(false);
    setIsChecked4(false);
    setIsChecked5(true);
    setIsChecked6(false);
    setIsChecked7(false);
    setIsChecked8(false);
    setIsChecked9(false);
  };

  const handleCheckbox6Change = () => {
    setIsChecked1(false);
    setIsChecked2(false);
    setIsChecked3(false);
    setIsChecked4(false);
    setIsChecked5(false);
    setIsChecked6(true);
    setIsChecked7(false);
    setIsChecked8(false);
    setIsChecked9(false);
  };

  const handleCheckbox7Change = () => {
    setIsChecked1(false);
    setIsChecked2(false);
    setIsChecked3(false);
    setIsChecked4(false);
    setIsChecked5(false);
    setIsChecked6(false);
    setIsChecked7(true);
    setIsChecked8(false);
    setIsChecked9(false);
  };

  const handleCheckbox8Change = () => {
    setIsChecked1(false);
    setIsChecked2(false);
    setIsChecked3(false);
    setIsChecked4(false);
    setIsChecked5(false);
    setIsChecked6(false);
    setIsChecked7(false);
    setIsChecked8(true);
    setIsChecked9(false);
  };

  const handleCheckbox9Change = () => {
    setIsChecked1(false);
    setIsChecked2(false);
    setIsChecked3(false);
    setIsChecked4(false);
    setIsChecked5(false);
    setIsChecked6(false);
    setIsChecked7(false);
    setIsChecked8(false);
    setIsChecked9(true);
  };
    
    return (

        <>
        <Banner url="/images/banner-home.png" texto="Tienda"/>
            <section className="productos">
                <div className="container">
                    <div className="row my-5">
                    <div className="col-lg-3">
                        <div className="box-checkboxs">
                            <h5 className='mb-3'>Categorías</h5>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" onClick={() => handleTodosPro()} checked={isChecked1}
          onChange={handleCheckbox1Change} />
                                <label className="form-check-label" for="flexRadioDefault6">
                                    Todos
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" onClick={() => handleFiltroTop()} checked={isChecked2}
          onChange={handleCheckbox2Change}/>
                                <label className="form-check-label" for="flexRadioDefault5">
                                    Top de ventas
                                </label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={() => handleFiltroPerros()} checked={isChecked3}
          onChange={handleCheckbox3Change}/>
                                <label className="form-check-label" for="flexRadioDefault2">
                                    Perros
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onClick={() => handleFiltroGatos()} checked={isChecked4} onChange={handleCheckbox4Change}/>
                                <label className="form-check-label" for="flexRadioDefault3">
                                    Gatos
                                </label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" onClick={() => handleFiltroExo()} checked={isChecked5} onChange={handleCheckbox5Change}/>
                                <label className="form-check-label" for="flexRadioDefault4">
                                    Animales exóticos
                                </label>
                            </div>
                        </div>
                        <div className="box-checkboxs mt-3">
                            <h5 className='mb-3'>Precio</h5>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault7" onClick={() => handlePrecioAsc()} onChange={handleCheckbox6Change}/>
                                <label className="form-check-label" for="flexRadioDefault7">
                                    De menor a mayor
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault8" onClick={() => handlePrecioDesc()} checked={isChecked7} onChange={handleCheckbox7Change}/>
                                <label className="form-check-label" for="flexRadioDefault8">
                                    De mayor a menor
                                </label>
                            </div>
                        </div>
                        <div className="box-checkboxs mt-3">
                            <h5 className='mb-3'>Nombre</h5>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault7" onClick={() => handleAlfAsc()} checked={isChecked8} onChange={handleCheckbox8Change} />
                                <label className="form-check-label" for="flexRadioDefault7">
                                    A - Z
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault8" onClick={() => handleAlfDesc()} checked={isChecked9} onChange={handleCheckbox9Change}/>
                                <label className="form-check-label" for="flexRadioDefault8">
                                   Z - A
                                </label>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="row m-0 p-0">


                            {isLoading ? ( <>

                            <div className="col-lg-12 d-flex justify-content-center">
                                <div id="spinner">
                                    <div className="sk-chase">
                                        <div className="sk-chase-dot"></div>
                                        <div className="sk-chase-dot"></div>
                                        <div className="sk-chase-dot"></div>
                                        <div className="sk-chase-dot"></div>
                                        <div className="sk-chase-dot"></div>
                                        <div className="sk-chase-dot"></div>
                                    </div>
                                </div>
                            </div>
                            
                            </> ) : (
                                <>
                                
                                {productos.map((item) => {
                                    const {id,titulo,descripcion,precio, imagen, meGusta} = item;
                                    return <div key={id} className="col-lg-4">
                                            <div className="card">
                                                <img src={imagen} className="card-img-top" alt="Patitas Pet Store"/>
                                                <div className="card-body">
                                                <div className="box-svg">
                                                <svg onClick={() => handleLike(id, imagen, titulo, descripcion, precio)} className="svg-like"  width="40px" viewBox="0 0 24 24"><path fill="gray" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path></svg> 
                                                
                                                </div>
                                                    <h5 className="card-title">{titulo}</h5>
                                                    <p className="card-text">{descripcion}</p>
                                                    <h4 className="precio">${precio}</h4>
                                                    <div className="box-btn-comprar">
                                                        <button onClick={() => handleDetalle(id)} className='btn btn-comprar'>Ver más</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                })}
                                </>
                            )}
                                
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
} 