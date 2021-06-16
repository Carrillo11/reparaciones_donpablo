import React, { useState, useEffect, useContext } from "react";
import { db } from "../../firebase";
import Swal from "sweetalert2";

const ProductosForm = (props) => {
  
  
  const initialStateValues = {
    nombre: "",
    descripcion: "",
    precio: "",
    cantidad: 1,
  };

  const [values, setValues] = useState(initialStateValues);
  


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(values.nombre != "" && values.descripcion != "" && values.precio !=""){

    props.addOrEditProducto(values);
    setValues({ ...initialStateValues });
    }else{
    Swal.fire({
      title: 'Llena todos los campos',
      text: "Te hace falta llenar campos revisa por favor",
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'ok',
  })}
  };

  const getProductoById = async (id) => {
    const doc = await db.collection("Productos").doc(id).get();
    setValues({ ...doc.data() });
  };

  useEffect(() => {
    if (props.currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      if (props.currentId !== null && props.currentId !== undefined) {
        getProductoById(props.currentId);
      }
    }
  }, [props.currentId]);

  return (
    <form onSubmit={handleSubmit} className="card card-body border-primary">
      
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
        <i class="las la-tags"></i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese nombre del producto"
          value={values.nombre }
          name="nombre"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">assignment</i>
        </div>
        <textarea
          rows = "3"
          value={values.descripcion}
          name="descripcion"
          placeholder="Describe el producto"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">exposure</i>
        </div>
        <input
          type="number"
          value={values.precio}
          name="precio"
          placeholder="Ingresa el precio del producto"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group input-group">
        </div>
        <div className="form-group input-group">
        <div className="input-group-text bg-light">
        </div>
      </div>
      <button className="btn btn-primary btn-block">
        {props.currentId === "" ? "Guardar" : "Actualizar"}
      </button>
    </form>
  );
};

export default ProductosForm;