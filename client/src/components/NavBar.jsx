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
      </ul>
    </div>
  );
}

export default NavBar;
