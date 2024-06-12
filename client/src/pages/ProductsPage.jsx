import React, { useEffect } from "react";
import ProductoCard from "../components/ProductoCard";
import { useInfood } from "../Context/Context";

function ProductsList() {
  const { productos, cargarTareas } = useInfood();

  useEffect(() => {
    cargarTareas();
  }, []);

  function renderMain() {
    if (productos.length === 0) {
      return <h1>No hay productos guardados aún...</h1>;
    } else {
      return (
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-12">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productos.map((producto) => (
              <ProductoCard producto={producto} key={producto.idProducto} />
            ))}
          </div>
        </div>
      );
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
