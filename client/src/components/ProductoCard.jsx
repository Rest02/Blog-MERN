import React from "react";
import { useNavigate } from "react-router-dom";
import { useInfood } from '../Context/Context'

function ProductoCard({ producto }) {
  const navigate = useNavigate();
  const { deleteProducto } = useInfood()
 
  return (
    <button>
      <h1>{producto.nombreProducto}</h1>
      <p>{producto.descripcionProducto}</p>
      <img src={`http://localhost:4000/images/` + producto.imagen} alt="" />
      <button onClick={() => navigate(`/editProduct/${producto.idProducto}`)}>
        Editar
      </button>
      <button onClick={() => deleteProducto(producto.idProducto)}>Eliminar</button>
    </button>
  );
}

export default ProductoCard;
