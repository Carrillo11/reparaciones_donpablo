import React, { useContext} from 'react';
import { Link } from 'react-router-dom';

// Importar contexto
import { UserContext } from './../../../Contexto/Contexto';

import './BarraNav.css';
import logo from './../img/logo1.png';

function BarraNav() {
    let { user, handleLogOut } = useContext(UserContext);

    const cambioMenu = () => {
        const menu = document.getElementById('navMenu'),
              boton = document.getElementById('botonMenu'); 
        
        menu.classList.toggle('menu-activo');

        if(boton.classList.contains('la-bars')) {
            boton.classList.remove('la-bars');
            boton.classList.add('la-times');
        }
        else {
            boton.classList.remove('la-times');
            boton.classList.add('la-bars');
        }
    }

    const cambioMenuUsuario = () => {
        const menuUsuario = document.getElementById('navMenuUsuario');
        
        menuUsuario.classList.toggle('menu-usuario-activo');
    }

    return(
        <div className="navbar-contenedor">
            <nav className="navbar">
                <figure>
                    <Link to="/"><img src={logo} alt="Logo" title="Logotipo Reparaciones Don Pablo" /></Link>
                </figure>
            </nav>
            <nav className="navbar-usuario">
                <figure onClick={() => cambioMenuUsuario()}>
                    <p>Hola, <strong>{user.displayName ? user.displayName : "Anónimo"}</strong></p>
                    <img src={user.photoURL ? user.photoURL : "img/userImage.png"} alt=""/>
                </figure>

                <ul id="navMenuUsuario">
                    <li>
                        <a href="#" onClick={() => handleLogOut()}>Cerrar sesión</a>                            
                    </li>                       
                </ul>
            </nav>
        </div>
    );
}

export default BarraNav;