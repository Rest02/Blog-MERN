import React from "react";

function ProductoCard({producto}) {
  return (
    <div>
      <h1>{producto.nombreProducto}</h1>
      <p>{producto.descripcionProducto}</p>
      <img src={`http://localhost:4000/images/` + producto.imagen} alt="" />
      <button>Editar</button>
      <button>Eliminar</button>
    </div>
  );
}

export default ProductoCard;
