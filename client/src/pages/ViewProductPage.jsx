import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useInfood } from "../Context/Context";
import CardComponent1 from "../components/CardComponent1";
import { useNavigate } from "react-router-dom";
import InfNutricionalCard from "../components/InfNutricionalCard";

function ViewProductPage() {
  const navigate = useNavigate();
  const params = useParams();
  const { getOneProductoIndv, producto, getOneInfNutricional, infNutricional } = useInfood();

  useEffect(() => {
    async function listOneProduct() {
      await getOneProductoIndv(params.id);
    }

    async function listInfNutricional() {
      await getOneInfNutricional(params.id);
    }

    listOneProduct();
    listInfNutricional();
  }, [params.id]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
      <CardComponent1 producto={producto} />
      {infNutricional && infNutricional.length > 0 ? (
        <div className="mt-4">
          <InfNutricionalCard infNutricional={infNutricional} />
          <button
            onClick={() => navigate(`/EditarinfNutricional/${params.id}`)}
            className="mt-4 transition-colors duration-500 bg-green-600 hover:bg-green-700 border border-black text-white px-4 py-2 rounded-lg"
          >
            Editar Información Nutricional
          </button>
        </div>
      ) : (
        <div className="mt-4">
          <button
            onClick={() => navigate(`/infNutricional/${params.id}`)}
            className="transition-colors duration-500 bg-green-600 hover:bg-green-700 border border-black text-white px-4 py-2 rounded-lg"
          >
            Crear Información Nutricional
          </button>
        </div>
      )}
    </div>
  );
}

export default ViewProductPage;
