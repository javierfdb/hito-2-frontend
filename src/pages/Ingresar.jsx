import React, { Component} from 'react';
import { Button } from "@mui/material";
import { useState, useContext } from 'react';
import { TiendaContext } from "../context/TiendaContext";
import { useNavigate } from 'react-router-dom';

import Banner from "../components/Banner";


export default function Ingresar() { 

    const navigate = useNavigate();

    const {saveToken, getUserProfile, loading, setLoading, getMisPublicaciones} = useContext(TiendaContext);

    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await fetch (import.meta.env.VITE_API_URL + "/ingresar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    correo,
                    contrasena,
                }),
            });
            const data = await res.json();
            if(data.message == "No existe el usuario") {
                Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    title: 'Correo no registrado',
                    showConfirmButton: false,
                    timer: 1500
                });
            } else if(data.message == "Contraseña incorrecta") {
                Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    title: 'Contraseña incorrecta',
                    showConfirmButton: false,
                    timer: 1500
                });
            }  else if(data.message) {
                Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    title: 'Credenciales inválidas',
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                saveToken(data.token);
                await getUserProfile(data.token); 
                navigate("/dashboard");
                window.location.reload();
                getMisPublicaciones();
            }                 
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false); 
        }        
    };

    return (
    <>    
    <Banner url="/images/banner-ingresar.jpg" texto="¡Volviste! :)"/>
     <section className='ingresar'>
         <div className='container my-5'> 
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="wrap-form">
                    <h2>Por favor ingresa tus datos</h2>
                    <form onSubmit={handleSubmit}>
                    <input required type="email" placeholder='Ingresa tu email' value={correo} onChange={(e) => setCorreo(e.target.value.toLowerCase())} />
                    <input required type="password" placeholder='Ingresa tu contraseña' value={contrasena} onChange={(e) => setContrasena(e.target.value.toLowerCase())} />
                        <div className="box-btn-submit">
                            <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={loading}
                            >
                                Ingresar
                            </Button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
     </section>
     </> 
    )
    };