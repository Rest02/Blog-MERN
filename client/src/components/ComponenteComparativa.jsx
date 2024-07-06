import React from "react";

function ComponenteComparativa({ comparativa }) {
  if (comparativa.length > 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg border border-black w-full">
        <h1 className="text-2xl font-semibold mb-6 text-gray-700">Comparativa de Productos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {comparativa.map((comp) => (
            <div key={comp.idProducto} className="p-4 bg-gray-100 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-xl font-medium text-gray-700 mb-4">{comp.nombreProducto}</h2>
              <img 
                src={`http://localhost:4000/images/` + comp.imagen} 
                alt={comp.nombreProducto} 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="space-y-2">
                <p className="text-gray-700">Energía: {comp.infNutricional.energia}</p>
                <p className="text-gray-700">Proteína: {comp.infNutricional.proteina}</p>
                <p className="text-gray-700">Grasa Total: {comp.infNutricional.grasaTotal}</p>
                <p className="text-gray-700">Carbohidratos: {comp.infNutricional.carbohidratos}</p>
                <p className="text-gray-700">Azúcares Totales: {comp.infNutricional.azucaresTotales}</p>
                <p className="text-gray-700">Sodio: {comp.infNutricional.sodio}</p>

                {/* Puedes agregar más campos de información nutricional aquí */}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <h1 className="text-2xl font-semibold text-gray-700">Aún no se selecciona ningún producto para la comparación</h1>;
  }
}

export default ComponenteComparativa;
