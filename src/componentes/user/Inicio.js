import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Inicio extends Component {
    render() { 
        return (
            <div className="Inicio">
                <div class="row">
                <div class="col-sm-6 p-2">
                    <div class="card">
                        <h2>Reparacion de todo tipo de calzado</h2>
                        <br></br><br></br><br></br><br></br><br></br>
                    <div class="card-body">
                        <img class="card-img-top" src="https://crm.academiaintegral.com.es/uploads/courses/4251/5655ebcbd783bd0cbf1a1aa_ll.jpg" alt="Card image cap"></img>
                        <button  type="button" class="btn btn-light"> 
                        <Link to="/productos"><i class="las la-toolbox"></i> Cobrar Reparacion </Link>
                        </button>
                    </div>
                    <br></br><br></br><br></br><br></br>
                    </div>
                </div>
                </div>
                
            </div>
        );
    }
}
 
export default Inicio;