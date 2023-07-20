import React, { Component} from 'react';
import { Button } from "@mui/material";
import { useState, useContext } from 'react';
import { TiendaContext } from "../context/TiendaContext";
import { useNavigate } from 'react-router-dom';


export default function Registro() {
    const navigate = useNavigate();
    const {saveToken, getUserProfile, loading, setLoading } = useContext(TiendaContext);
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await fetch (import.meta.env.VITE_API_URL + "/registro", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    email,
                    contrasena,
                }),
            });
            const data = await res.json();
            // console.log("solo data: ", data); 
            // console.log("access_token: ", data.token); 
            saveToken(data.token);
            await getUserProfile(data.token); 
            navigate("/dashboard");
        } catch (error) {
            console.log(error); 
        } finally {
            setLoading(false);
        } 

        };

    return (
        <>
        <section className='ingresar'>
         <div className='container my-5'> 
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="wrap-form">
                    <h2>Por favor ingresa tus datos</h2>

                    <form onSubmit={handleSubmit}>
                    <input required type="email" placeholder='Ingrese un email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input required type="password" placeholder='Ingrese un password' value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
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
} 