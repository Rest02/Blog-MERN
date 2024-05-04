import React, { useEffect, useState } from "react";
import ProductoCard from "../components/ProductoCard";
import { useInfood } from "../Context/Context";
import { useNavigate } from "react-router-dom";

function ProductsList() {
  const { productos, cargarTareas } = useInfood();
  const navigate = useNavigate()

  useEffect(() => {
    cargarTareas();
  }, []);

  function renderMain() {
    if (productos.length == 0) {
      return <h1>No hay productos guardados aún...</h1>;
    } else {
      return productos.map((producto) => (
        <button onClick={()=> navigate(`http://localhost:4000/productos/${params.id}`)}>
          <ProductoCard producto={producto} key={producto.idProducto} />
        </button>
      ));
    }
  }

  return (
    <div>
      <h1>Productos</h1>
      {renderMain()}
    </div>
  );
}

export default ProductsList;
