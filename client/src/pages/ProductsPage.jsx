import React, { useEffect } from "react";
import ProductoCard from "../components/ProductoCard";
import { useInfood } from "../Context/Context";

function ProductsList() {
  const { productos, cargarTareas } = useInfood();

  useEffect(() => {
    cargarTareas();
  }, []);

  function renderMain() {
    if (productos.length === 0) {
      return <h1>No hay productos guardados aún...</h1>;
    } else {
      return (
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-12">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productos.map((producto) => (
              <ProductoCard producto={producto} key={producto.idProducto} />
            ))}
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      <div>
        <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
          {/* Image Column */}
          <div className="w-full h-64 lg:w-1/2 lg:h-auto border border-black">
            <img
              className="h-full w-full object-cover"
              src="https://picsum.photos/id/1018/2000"
              alt="Winding mountain road"
            />
          </div>
          {/* Close Image Column */}

          {/* Text Column */}
          <div className="max-w-lg bg-white border border-black md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
            {/* Text Wrapper */}
            <div className="flex flex-col p-12 md:px-16">
              <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">
                Alimentate con Infood
              </h2>
              <p className="mt-4">
                Infood es una empresa encargada de brindar como servicio una simple pero efectiva forma de comprarar tus comidas y tus alimentos para que mantengas una dieta sana y saludable respecto a lo que deseas conseguir, proporcionandote la informacion nutricional , haciendo comparaciones y mas...
              </p>
              {/* Button Container */}
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48"
                >
                  Productos
                </a>
              </div>
            </div>
            {/* Close Text Wrapper */}
          </div>
          {/* Close Text Column */}
        </div>
      </div>

      <h1 className="text-8xl font-bold text-gray-900 container mx-auto lg:px-10 pt-32">
        Productos
      </h1>
      {renderMain()}
    </div>
  );
}

export default ProductsList;
