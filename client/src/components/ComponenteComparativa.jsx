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
              <p>Energia: {comp.infNutricional.proteina}</p>
              <p>Energia: {comp.infNutricional.grasaTotal}</p>
              <p>Energia: {comp.infNutricional.carbohidratos}</p>
              <p>Energia: {comp.infNutricional.azucaresTotales}</p>
              <p>Energia: {comp.infNutricional.sodio}</p>

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
