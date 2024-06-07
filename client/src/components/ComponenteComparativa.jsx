import React from "react";

function ComponenteComparativa({ comparativa }) {
  if (comparativa.length > 0) {
    return (
      <div>
        <h1>Si contiene productos</h1>

        {comparativa.map((comp) => (
          <div key={comp.idProducto}>
            <h1>{comp.nombreProducto}</h1>
            <img src={`http://localhost:4000/images/` + comp.imagen} alt="" />
          </div>
        ))}
      </div>
    );
  } else {
    return <h1>Aún no se selecciona ningun producto</h1>;
  }
}

export default ComponenteComparativa;
