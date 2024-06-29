import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useInfood } from "../Context/Context";
import CardComponent1 from "../components/CardComponent1";
import { useNavigate } from "react-router-dom";
import InfNutricionalCard from "../components/InfNutricionalCard";

function ViewProductPage() {
  const navigate = useNavigate();
  const params = useParams();
  const { getOneProductoIndv, producto, getOneInfNutricional, infNutricional } =
    useInfood();

  useEffect(() => {
    async function listOneProduct() {
      await getOneProductoIndv(params.id);
    }

    async function listInfNutricional() {
      await getOneInfNutricional(params.id);
    }

    listOneProduct();
    listInfNutricional();
  }, []);

  return (
    <div>
      <CardComponent1 producto={producto} />
      {infNutricional && infNutricional.length > 0 ? (
        <div>
          <InfNutricionalCard infNutricional = {infNutricional}/>
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
