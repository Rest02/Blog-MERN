import React, { useEffect } from "react";
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
      <CardComponent1 producto={producto} />
      {infNutricional && infNutricional.length > 0 ? (
        <div className="mt-4">
          <InfNutricionalCard infNutricional={infNutricional} />
          <button
            onClick={() => navigate(`/EditarinfNutricional/${params.id}`)}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Editar Información Nutricional
          </button>
        </div>
      ) : (
        <div className="mt-4">
          <button
            onClick={() => navigate(`/infNutricional/${params.id}`)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Crear Información Nutricional
          </button>
        </div>
      )}
    </div>
  );
}

export default ViewProductPage;
