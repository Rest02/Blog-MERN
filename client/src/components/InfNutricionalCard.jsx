import React from "react";

function InfNutricionalCard({ infNutricional }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl bg-white w-full rounded-lg shadow-xl border border-black">
        <div className="p-4 border-b border-black">
          <h2 className="text-2xl">Información Nutricional</h2>
          <p className="text-sm text-gray-500">Detalles nutricionales del producto</p>
        </div>
        <div>
          {infNutricional.map((inf) => (
            <div key={inf.idInfNutricional}>
              <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b border-black">
                <p className="text-gray-600">Energía del producto</p>
                <p>{inf.energia}</p>
              </div>
              <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b border-black">
                <p className="text-gray-600">Proteínas del producto</p>
                <p>{inf.proteinas}</p>
              </div>
              <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b border-black">
                <p className="text-gray-600">Grasa Total del producto</p>
                <p>{inf.grasaTotal}</p>
              </div>
              <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b border-black">
                <p className="text-gray-600">Carbohidratos Totales del producto</p>
                <p>{inf.carbohidratos}</p>
              </div>
              <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b border-black">
                <p className="text-gray-600">Azúcares Totales del producto</p>
                <p>{inf.azucaresTotal}</p>
              </div>
              <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b border-black">
                <p className="text-gray-600">Sodio Total del producto</p>
                <p>{inf.sodio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfNutricionalCard;
