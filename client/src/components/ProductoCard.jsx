import React from "react";
import { useNavigate } from "react-router-dom";
import { useInfood } from "../Context/Context";

function ProductoCard({ producto }) {
  const navigate = useNavigate();
  const { deleteProducto } = useInfood();

  return (
    <div className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="cursor-pointer" onClick={() => navigate(`/viewProduct/${producto.idProducto}`)}>
        <img
          src={`http://localhost:4000/images/` + producto.imagen}
          alt="Product Image"
          width={600}
          height={600}
          className="aspect-square object-cover w-full group-hover:scale-105 transition-transform"
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1">{producto.nombreProducto}</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{producto.descripcionProducto}</p>
        </div>
      </div>
      <div className="px-4 pb-4 flex gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/editProduct/${producto.idProducto}`);
          }}
          className="border border-gray-300 rounded px-2 py-1 text-sm hover:bg-gray-100"
        >
          Editar
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteProducto(producto.idProducto);
          }}
          className="text-red-500 hover:bg-red-100 dark:hover:bg-red-900 rounded px-2 py-1 text-sm"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default ProductoCard;
