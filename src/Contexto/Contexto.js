import React, { createContext, useState, useEffect } from 'react';
import { fire, db } from '../firebase';
import 'firebase/auth';

import Swal from 'sweetalert2';

let UserContext = createContext();
let { Provider } = UserContext;

function UserProvider({children}) {
    let [user, setUser] = useState(null);
    let [load, setLoad] = useState(false);
    let [carrito, setCarrito] = useState([]);

    // Cerrar sesion
    const handleLogOut = () => {
        Swal.fire({
            title: '¿Está seguro?',
            text: "Se cerrará la sesión actual",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                fire.auth().signOut();
            }
        })
    }

    const getUser = async () => {
        setLoad(false);

        await fire.auth().onAuthStateChanged(async (userAuth) => {
            if(userAuth) {
                // Si existe el usuario, lo va a agregar al estado Usuario
                setUser(userAuth);

                // Revisa cada producto agregado al carrito y que pertenezca al usuario registrado
                await db.collection("Carrito").onSnapshot((querySnapshot) => {
                    const docs = [];
                    
                    querySnapshot.forEach((doc) => {
                        if(doc.data().idUsuario === userAuth.uid) {
                            docs.push({ ...doc.data(), id: doc.id });
                        }
                    });
                    
                    setCarrito(docs);
                });
            }
            else {
                setUser(null);
            }

            setLoad(true);
        });
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <Provider value={{user, setUser, carrito, handleLogOut, load}}>
            {children}
        </Provider>
    );
}

export { UserContext, UserProvider };