import React, { useEffect, useState } from "react";
import { listTaskRequest } from "../api/infodApi";
import ProductoCard from '../components/ProductoCard'


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
        <ProductoCard producto = {producto} key = {producto.idProducto}/>
      ))}
    </div>
  );
}

export default ProductsList;
