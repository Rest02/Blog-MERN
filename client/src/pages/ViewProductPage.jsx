import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useInfood } from "../Context/Context";
import CardComponent1 from "../components/CardComponent1";
import { useNavigate } from "react-router-dom";

function ViewProductPage() {
  const navigate = useNavigate();
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
      {infNutricional && infNutricional.length > 0 ? (
        <div>
          <h1>Informacion Nutricional</h1>
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
          <button
            onClick={() => navigate(`/EditarinfNutricional/${params.id}`)}
          >
            Editar Informacion Nutricional
          </button>
        </div>
      ) : (
        <div>
          <button onClick={() => navigate(`/infNutricional/${params.id}`)}>
            Crear InfNutricional
          </button>
        </div>
      )}
    </div>
  );
}

export default ViewProductPage;
