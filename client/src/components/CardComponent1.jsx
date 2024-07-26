import React from "react";

function CardComponent1({ producto, infNutricional }) {
  return (
    <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left border border-black">
      {producto.map((pro) => (
        <div className="md:flex items-center -mx-10" key={pro.idProducto}>
          <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
            <div className="relative">
              <img
                src={`http://localhost:4000/images/${pro.imagen}`}
                className="w-full relative z-10"
                alt={pro.nombreProducto}
              />
              <div className="absolute top-10 bottom-10 left-10 right-10 z-0"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-10">
            <div className="mb-10">
              <h1 className="font-bold uppercase text-2xl mb-5">
                {pro.nombreProducto}
              </h1>
              <p className="text-sm">
                {pro.descripcionProducto} <br />
                Color: {pro.colorProducto}
              </p>
              <a
                href="#"
                className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
              >
                MORE <i className="mdi mdi-arrow-right"></i>
              </a>
            </div>
            <div>
              <div className="inline-block align-bottom mr-5">
                <span className="text-2xl leading-none align-baseline">$</span>
                <span className="font-bold text-5xl leading-none align-baseline">
                  59
                </span>
                <span className="text-2xl leading-none align-baseline">
                  .99
                </span>
              </div>
              <div className="inline-block align-bottom">
                <button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                  <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex flex-col items-center justify-center px-4 mt-10">
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-xl border border-black">
          <div className="p-4 border-b border-black">
            <h2 className="text-2xl">Información Nutricional</h2>
            <p className="text-sm text-gray-500">
              Detalles nutricionales del producto
            </p>
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
        <button
          onClick={() => navigate(`/EditarinfNutricional/${params.id}`)}
          className="mt-11 transition-colors duration-500 bg-green-600 hover:bg-green-700 border border-black text-white px-4 py-2 rounded-lg self-start"
        >
          Editar Información Nutricional
        </button>
      </div>
    </div>
  );
}

export default CardComponent1;
