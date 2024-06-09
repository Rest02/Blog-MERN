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
            <div>
              <p>Energia: {comp.infNutricional.energia}</p>
              {/* Puedes agregar más campos de información nutricional aquí */}
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return <h1>Aún no se selecciona ningun producto para la comparación</h1>;
  }
}

export default ComponenteComparativa;
