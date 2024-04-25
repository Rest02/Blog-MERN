import React from "react";
import { useNavigate } from "react-router-dom";

function ProductoCard({ producto }) {
  const navigate = useNavigate();

  return (
    <div>
      <h1>{producto.nombreProducto}</h1>
      <p>{producto.descripcionProducto}</p>
      <img src={`http://localhost:4000/images/` + producto.imagen} alt="" />
      <button onClick={() => navigate(`/editProduct/${producto.idProducto}`)}>
        Editar
      </button>
      <button>Eliminar</button>
    </div>
  );
}

export default ProductoCard;
