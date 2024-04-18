import React, { useEffect, useState } from "react";
import { listTaskRequest } from "../api/infodApi";

function ProductsList() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function cargarTareas() {
      const response = await listTaskRequest();
      // console.log(response.data)
      setProductos(response.data);
    }
    cargarTareas();
  }, []);

  return (
    <div>
      {productos.map((producto) => (
        <div key={producto.idProducto}>
          <h1>{producto.nombreProducto}</h1>
          <p>{producto.descripcionProducto}</p>
          <img src={`http://localhost:4000/images/`+producto.imagen} alt="" />
          {console.log(producto.imagen)}
        </div>
      ))}
    </div>
  );
}

export default ProductsList;
