import React from 'react';
import Pdf from 'react-to-pdf';
import logo from '../elementos/img/logo1.png';
import '../elementos/BarraNav/BarraNav.css';
const ref = React.createRef();

const PDF = (props) => {
    return(
        <>
            <div className='Post' ref = {ref}>
                <div className="navbar-contenedor">
                    <figure>
                        <img src={logo} alt="Logo" title="Logotipo Reparaciones Don Pablo" />
                    </figure>
                </div>
                <div className='tabla'>
            <table class="table table-bordered">
            <tr>

                <td>Cliente</td>

                <td>Trabajo realizado</td>

                <td>Estado</td>

                <td>Total</td>

            </tr>

            <tr>

                <td>{props.nombre}</td>

                <td>{props.descripcion}</td>

                <td>{props.estado}</td>

                <td>{props.precio}</td>

            </tr>

            </table>
            </div>
            </div>
            <Pdf targetRef={ref} filename='post.pdf'>
                {({ toPdf }) => <button className='btn btn-info btn-block' onClick={toPdf}>Capture as PDF</button>}
            </Pdf>
        </>
    );

}

export default PDF;
