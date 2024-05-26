import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <h1>Infood</h1>

      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/newProduct">Crear Producto</Link>
        </li>
        <li>
          <Link to="/nosotros">Nosotros</Link>
        </li>
        <li>
          <Link to="/editEmpresa">Editar Empresa</Link>
        </li>
        <li>
          <Link to="/categorias">Categorias de productos</Link>
        </li>
        <li>
          <Link to="/categoriaForm">Crear categoria de productos</Link>
        </li>
        <li>
          <Link to="/comparativa">Comparar productos nutricionalmente</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
