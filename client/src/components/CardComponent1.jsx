import React from "react";

function CardComponent1({ producto }) {
  return (
    <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left border border-black">
      {producto.map((pro) => (
        <div
          className="md:flex items-center -mx-10"
          key={pro.idProducto}
        >
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
    </div>
  );
}

export default CardComponent1;
