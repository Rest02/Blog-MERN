import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useInfood } from "../Context/Context";
import CardComponent1 from "../components/CardComponent1";

function ViewProductPage() {
  const params = useParams();
  const { getOneProductoIndv, producto, getOneInfNutricional, infNutricional } =
    useInfood();

  useEffect(() => {
    async function listOneProduct() {
      getOneProductoIndv(params.id);
    }

    async function listInfNutricional() {
      getOneInfNutricional(params.id);
    }

    listOneProduct();
    listInfNutricional();
  }, []);

  return (
    <div>
      <CardComponent1 producto={producto} />
      {infNutricional.length > 0 ? (
        <h1>Informacion Nutricional</h1>
      ) : (
        <button
          onClick={() => navigate(`/infNutricional/${producto.idProducto}`)}
        >
          Crear InfNutricional
        </button>
      )}
    </div>
  );
}

export default ViewProductPage;
