import React from "react";

function InfNutricionalCard({infNutricional}) {
  return (
    <div>
      {infNutricional.map((inf) => (
        <div key={inf.idInfNutricional}>
          <h2>Energia del producto: {inf.energia}</h2>
          <h2>Proteinas del producto: {inf.proteinas}</h2>
          <h2>Grasa Total del producto: {inf.grasaTotal}</h2>
          <h2>Carbohidratos Total del producto: {inf.carbohidratos}</h2>
          <h2>Azucares Totales del producto: {inf.azucaresTotal}</h2>
          <h2>Sodio Total del producto: {inf.sodio}</h2>
        </div>
      ))}
    </div>
  );
}

export default InfNutricionalCard;
