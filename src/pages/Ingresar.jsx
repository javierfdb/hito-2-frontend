import React, { Component} from 'react';
import { Button } from "@mui/material";
import { useState, useContext } from 'react';
import { TiendaContext } from "../context/TiendaContext";
import { useNavigate } from 'react-router-dom';

import Banner from "../components/Banner";


export default function Ingresar() { 

    const navigate = useNavigate();

    const {saveToken, getUserProfile, loading, setLoading, setUser, token } = useContext(TiendaContext);

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
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    correo,
                    contrasena,
                }),
            });
            const data = await res.json();
            // console.log("data: ", data);
            // console.log("token: ", token);
            if(data.message) {
                Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    title: 'Credenciales incorrectas',
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                console.log('holanda');
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
    <Banner url="/images/banner-home.png" texto="Bienvenid@"/>
     <section className='ingresar'>
         <div className='container my-5'> 
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="wrap-form">
                    <h2>Por favor ingresa tus datos</h2>

                    <form onSubmit={handleSubmit}>
                    <input required type="email" placeholder='Ingrese un correo' value={correo} onChange={(e) => setCorreo(e.target.value)} />
                    <input required type="password" placeholder='Ingrese su password' value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
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