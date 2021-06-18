import React, { useEffect, useState } from "react";
import ProductosForm from "./productosForm";

import { db } from "../../firebase";
import { toast } from "react-toastify";

const Productos = () => {
  const [Productos, setProductos] = useState([]);
  const [currentId, setCurrentId] = useState("");
 

  const getProductos = async () => {
    db.collection("Productos").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductos(docs);
    });
  };

  const onDeleteProducto = async (id) => {
    if (window.confirm("Estas seguro de eliminar este producto?")) {
      await db.collection("Productos").doc(id).delete();
      toast("Se elimino un Producto", {
        type: "error",
        //autoClose: 2000
      });
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  const addOrEditProducto = async (ProductoObject) => {
    try {
      if (currentId === "") {
        await db.collection("Productos").doc().set(ProductoObject);
        toast("Se agrego un Producto", {
          type: "success",
        });
      } else {
        await db.collection("Productos").doc(currentId).update(ProductoObject);
        toast("Se actualizo un Producto", {
          type: "info",
        });
        setCurrentId("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>    
      <div className="col-md-4 p-2">
        <h2>Agrega Nuevos Productos</h2>
        <ProductosForm {...{ addOrEditProducto, currentId, Productos }} />
      </div>

      <div className="col-md-8 p-2">
        <div class="container">
          <h2>Lista de Productos</h2>
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Estilo</th>                
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Estado</th>
                <th>Aciones</th>
              </tr>
            </thead>
            <tbody>
              {Productos.map((Producto) => (
                <tr key={Producto.id}>
                  <td>{Producto.nombre}</td>
                  <td>{Producto.estilo}</td>
                  <td>{Producto.descripcion}</td>
                  <td>{Producto.precio}</td>
                  <td>{Producto.estado}</td>
                  <td>
                    <button className="btn btn-primary" onClick={() => setCurrentId(Producto.id)}>Editar</button>
                    &nbsp;
                    &nbsp;
                    <button className="btn btn-danger" onClick={() => onDeleteProducto(Producto.id)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Productos;