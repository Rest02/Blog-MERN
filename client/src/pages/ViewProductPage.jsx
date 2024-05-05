import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useInfood } from "../Context/Context";

function ViewProductPage() {
  const params = useParams();
  const { mostrarProductInfNutricional, producto } = useInfood();


  useEffect(() => {
    async function listOneProduct() {
      mostrarProductInfNutricional(params.id);
    }
    listOneProduct();
  }, []);

  return (
    <div>
      {producto.map((pro) => (
        <div key={pro.idProducto}>
          <h1>{pro.nombreProducto}</h1>
          <h2>{pro.descripcionProducto}</h2>
          <p>{pro.colorProducto}</p>
          <h1>{pro.idInfNutricional ? "Informacion Nutricional" : "Aún no existe la informacion" }</h1>
          <p>Proteinas : {pro.proteinas}</p>
          <img src={`http://localhost:4000/images/` + pro.imagen} alt="" />
        </div>
      ))}
    </div>
  );
}

export default ViewProductPage;
