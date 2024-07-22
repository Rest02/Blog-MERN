import React from "react";

function InfNutricionalCard({ infNutricional }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-xl border border-black">
        <div className="p-4 border-b border-black">
          <h2 className="text-2xl">Información Nutricional</h2>
          <p className="text-sm text-gray-500">Detalles nutricionales del producto</p>
        </div>
        <div>
          {infNutricional.map((inf) => (
            <div key={inf.idInfNutricional}>
              <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-6 border-b border-black">
                <p className="text-gray-600 md:col-span-1">Energía del producto</p>
                <p className="md:col-span-1">{inf.energia}</p>
              </div>
              <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-6 border-b border-black">
                <p className="text-gray-600 md:col-span-1">Proteínas del producto</p>
                <p className="md:col-span-1">{inf.proteinas}</p>
              </div>
              <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-6 border-b border-black">
                <p className="text-gray-600 md:col-span-1">Grasa Total del producto</p>
                <p className="md:col-span-1">{inf.grasaTotal}</p>
              </div>
              <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-6 border-b border-black">
                <p className="text-gray-600 md:col-span-1">Carbohidratos Totales del producto</p>
                <p className="md:col-span-1">{inf.carbohidratos}</p>
              </div>
              <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-6 border-b border-black">
                <p className="text-gray-600 md:col-span-1">Azúcares Totales del producto</p>
                <p className="md:col-span-1">{inf.azucaresTotal}</p>
              </div>
              <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-6 border-b border-black">
                <p className="text-gray-600 md:col-span-1">Sodio Total del producto</p>
                <p className="md:col-span-1">{inf.sodio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfNutricionalCard;
