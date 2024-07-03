import React from "react";
import { useNavigate } from "react-router-dom";
import { useInfood } from "../Context/Context";

function CategoriaCard({ categoria }) {
  const navigate = useNavigate();
  const { deleteCategoria } = useInfood();

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {categoria.map((cat) => (
            <div className="p-4 md:w-1/3" key={cat.idCategoria}>
              <div className="h-full rounded-xl border border-black bg-white overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src={`http://localhost:4000/images/${cat.imagen}`}
                  alt={cat.nombreCategoria}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {cat.nombreCategoria}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                    {cat.nombreCategoria}
                  </h1>
                  <p className="leading-relaxed mb-3">
                    {cat.descripcion}
                  </p>
                  <div className="flex items-center flex-wrap space-x-3">
                    <button
                      onClick={() => navigate(`/categoriaForm/${cat.idCategoria}`)}
                      className="transition-colors duration-500 bg-green-600 hover:bg-green-700  text-white px-4 py-1 rounded-lg"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => {
                        deleteCategoria(cat.idCategoria);
                        navigate(0);
                      }}
                      className="transition-colors duration-500 bg-green-600 hover:bg-green-700  text-white px-4 py-1 rounded-lg"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriaCard;
