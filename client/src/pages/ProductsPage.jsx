import React, { useEffect, useState } from "react";
import ProductoCard from "../components/ProductoCard";
import { useInfood } from "../Context/Context";

function ProductsList() {
  const { productos, cargarTareas } = useInfood();


  useEffect(() => {
    cargarTareas();
  }, []);

  function renderMain() {
    if (productos.length == 0) {
      return <h1>No hay productos guardados aún...</h1>;
    } else {
      return productos.map((producto) => (
        <ProductoCard producto={producto} key={producto.idProducto} />
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
