import React from "react";
import { useNavigate } from "react-router-dom";
import { useInfood } from "../Context/Context";

function CategoriaCard({ categoria }) {
  const navigate = useNavigate();
  const { deleteCategoria } = useInfood();

  return (
    <div className="min-w-screen min-h-screen flex items-center p-5 lg:p-10 overflow-hidden relative">
      <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <h1 className="font-bold text-3xl mb-10 text-center">Categorías</h1>
        {categoria.map((cat) => (
          <div className="md:flex items-center -mx-10 border border-black mb-10" key={cat.idCategoria}>
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="relative">
                <img
                  src={`http://localhost:4000/images/${cat.imagen}`}
                  className="w-full relative z-10"
                  alt={cat.nombreCategoria}
                />
                <div className="border border-black absolute top-10 bottom-10 left-10 right-10 z-0"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-10">
                <h1 className="font-bold uppercase text-2xl mb-5">
                  {cat.nombreCategoria}
                </h1>
                <p className="text-sm mb-5">
                  {cat.descripcionCategoria}
                </p>
              </div>
              <div>
                <button
                  onClick={() => navigate(`/categoriaForm/${cat.idCategoria}`)}
                  className="bg-blue-500 text-white rounded-full px-5 py-2 mr-5 hover:bg-blue-700"
                >
                  Editar Categoría
                </button>
                <button
                  onClick={() => {
                    deleteCategoria(cat.idCategoria);
                    navigate(0);
                  }}
                  className="bg-red-500 text-white rounded-full px-5 py-2 hover:bg-red-700"
                >
                  Eliminar Categoría
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriaCard;
