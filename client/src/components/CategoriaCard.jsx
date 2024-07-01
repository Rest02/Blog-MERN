import React from "react";
import { useNavigate } from "react-router-dom";
import { useInfood } from "../Context/Context";

function CategoriaCard({ categoria }) {
  const navigate = useNavigate();
  const { deleteCategoria } = useInfood();

  return (
    <div className="flex justify-center items-center">
      <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
        <div className="flex flex-col justify-center items-center space-y-10">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white">Categorías</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
            {categoria.map((cat) => (
              <div className="relative group flex justify-center items-center h-full w-full" key={cat.idCategoria}>
                <img
                  className="object-center object-cover h-full w-full"
                  src={`http://localhost:4000/images/${cat.imagen}`}
                  alt={cat.nombreCategoria}
                />
                <div className="absolute bottom-4 z-10 flex flex-col items-center">
                  <button
                    onClick={() => navigate(`/categoriaForm/${cat.idCategoria}`)}
                    className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white mb-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => {
                      deleteCategoria(cat.idCategoria);
                      navigate(0);
                    }}
                    className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                  >
                    Eliminar
                  </button>
                </div>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriaCard;

