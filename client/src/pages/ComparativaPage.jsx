import React, { useEffect } from "react";
import { useInfood } from "../Context/Context";
import { Formik, Form } from "formik";
import ComponenteComparativa from "../components/ComponenteComparativa";

function ComparativaPage() {
  const { cargarTareas, productos, listarComparativa, comparativa } = useInfood();

  useEffect(() => {
    async function loadProducts() {
      await cargarTareas();
    }
    loadProducts();
  }, []);

  useEffect(() => {
    console.log("Comparativa: ", comparativa);
  }, [comparativa]);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen py-8 bg-white">
      <Formik
        initialValues={{
          idProducto: "",
          idProducto2: "",
        }}
        onSubmit={async (values) => {
          if (values.idProducto === "" || values.idProducto2 === "") {
            alert("Debe seleccionar una opción para ambos productos");
          } else {
            console.log(values);
            await listarComparativa(values.idProducto, values.idProducto2);
          }
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg border border-black w-full max-w-lg">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Seleccione alternativa A
              </label>
              <select
                name="idProducto"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-green-500"
              >
                <option>Selecciona la opción</option>
                {productos.map((cat) => (
                  <option key={cat.idProducto} value={cat.idProducto}>
                    {cat.nombreProducto}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Seleccione producto B
              </label>
              <select
                name="idProducto2"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-green-500"
              >
                <option>Selecciona la opción</option>
                {productos.map((cat) => (
                  <option key={cat.idProducto} value={cat.idProducto}>
                    {cat.nombreProducto}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Guardar
            </button>
          </Form>
        )}
      </Formik>

      <div className="mt-8 w-full max-w-4xl">
        <ComponenteComparativa comparativa={comparativa} />
      </div>
    </div>
  );
}

export default ComparativaPage;
