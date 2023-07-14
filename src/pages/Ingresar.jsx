import React, { Component} from 'react';
import { Button } from "@mui/material";
import { useState, useContext } from 'react';
import { TiendaContext } from "../context/TiendaContext";
import { useNavigate } from 'react-router-dom';

import Banner from "../components/Banner";


export default function Ingresar() { 

    const navigate = useNavigate();

    const {saveToken, getUserProfile, loading, setLoading } = useContext(TiendaContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await fetch (import.meta.env.VITE_API_URL + "/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });
            const {access_token} = await res.json(); // ESTO DE VOLVER A CONSUMIR NO ME QUEDA CLARO :/
            saveToken(access_token);
            await getUserProfile(access_token); 
            navigate("/dashboard");
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
                    <input required type="email" placeholder='Ingrese un email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input required type="password" placeholder='Ingrese un password' value={password} onChange={(e) => setPassword(e.target.value)} />
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
            <div className="row">
                <div className="col-lg-12">
                    <p><small><i>email: john@mail.com</i></small><br />
                    <small><i>password: changeme</i></small></p>
                </div>
            </div>
        </div>
     </section>
     </> 
    )
    };