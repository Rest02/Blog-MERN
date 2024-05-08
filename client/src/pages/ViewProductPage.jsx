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
      <h1>{infNutricional.length > 0 ? "Información Nutricional" : "El producto aún no contiene información nutrucional"}</h1>
    </div>
  );
}

export default ViewProductPage;
