import React, { useState } from 'react';
import firebase from 'firebase/app';
import { fire } from './../firebase';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import logo from './elementos/img/logo1.png';

const InicioSesion = () => {
    let [email, setEmail] =useState('');
    let [password, setPassword] = useState('');

    // Autenticacion con email

    const handleLoginWithEmail = e => {
        e.preventDefault();

        fire.auth().signInWithEmailAndPassword(email, password)
        .catch(error => {
            Swal.fire(
                'Error!',
                error.message,
                'error'
            )
        });
    }

    // Autenticacion con Google

    const handleLoginWithGoogle = e => {
        e.preventDefault();

        const provider = new firebase.auth.GoogleAuthProvider();

        fire.auth().signInWithPopup(provider)
        .catch(error => {
            Swal.fire(
                'Error!',
                error.message,
                'error'
            )
        });
    };
    
    return (
        <div className="InicioSesion">
            <div className="header-login-registro">
                <figure>
                    <img src={logo} alt="Logotipo"/>
                </figure>
            </div>
            
            <h1>Iniciar sesión</h1>
            <div className="form-cuenta">
                <div className="grupo-inputs">
                    <input type="email" id='email' placeholder="Email" onChange={ e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Contraseña" onChange={ e => setPassword(e.target.value)}/>
                </div>
                <button class="botonIniciarSesion" onClick ={e => handleLoginWithEmail(e)}>Iniciar sesión</button>
                <button class="botonIniciarSesion botonGoogle" onClick ={e => handleLoginWithGoogle(e)}><i class="lab la-google"></i> Iniciar sesión con Google</button>
            </div>
            <div className="existencia-cuenta">
                <p>¿No tienes cuenta?</p>
                <Link to="/registro"><button class="botonIrRegistro">Regístrate</button></Link>
            </div>
        </div>
    );
}
 
export default InicioSesion;