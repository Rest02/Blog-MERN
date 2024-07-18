import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-12">
      <header className="bg-white border border-black rounded-lg shadow-lg w-full px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-gray-900">
            Infood
          </Link>
          <nav className="flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Inicio
            </Link>
            <Link to="/newProduct" className="text-gray-600 hover:text-gray-900 transition-colors">
              Crear Producto
            </Link>
            <Link to="/nosotros" className="text-gray-600 hover:text-gray-900 transition-colors">
              Nosotros
            </Link>
            <Link to="/categorias" className="text-gray-600 hover:text-gray-900 transition-colors">
              Categorías de productos
            </Link>
            <Link to="/categoriaForm" className="text-gray-600 hover:text-gray-900 transition-colors">
              Crear categoría de productos
            </Link>
            <Link to="/comparativa" className="text-gray-600 hover:text-gray-900 transition-colors">
              Comparar productos nutricionalmente
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
