import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-gray-800 p-4 shadow-lg">
      <h1 className="text-white text-3xl font-bold mb-4">Infood</h1>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white hover:text-gray-400">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/newProduct" className="text-white hover:text-gray-400">
            Crear Producto
          </Link>
        </li>
        <li>
          <Link to="/nosotros" className="text-white hover:text-gray-400">
            Nosotros
          </Link>
        </li>
        <li>
          <Link to="/editEmpresa" className="text-white hover:text-gray-400">
            Editar Empresa
          </Link>
        </li>
        <li>
          <Link to="/categorias" className="text-white hover:text-gray-400">
            Categorías de productos
          </Link>
        </li>
        <li>
          <Link to="/categoriaForm" className="text-white hover:text-gray-400">
            Crear categoría de productos
          </Link>
        </li>
        <li>
          <Link to="/comparativa" className="text-white hover:text-gray-400">
            Comparar productos nutricionalmente
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
