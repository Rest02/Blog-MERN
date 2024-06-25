import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useInfood } from "../Context/Context";

function InfNutricionalPage() {
  const {
    creandoInformacionNutricional,
    getOneInfNutricional,
    infNutricional,
    updateInfNutricional,
  } = useInfood();

  const params = useParams();
  const navigate = useNavigate();

  const [informacionNutricional, setInformacionNutricional] = useState({
    energia: "",
    proteinas: "",
    grasaTotal: "",
    carbohidratos: "",
    azucaresTotal: "",
    sodio: "",
  });

  useEffect(() => {
    async function loadProducto() {
      if (params.id) {
        await getOneInfNutricional(params.id);
      }
    }
    loadProducto();
  }, [params.id]);

  useEffect(() => {
    if (infNutricional && infNutricional.length > 0) {
      const nutricionalData = {
        energia: infNutricional[0].energia,
        proteinas: infNutricional[0].proteinas,
        grasaTotal: infNutricional[0].grasaTotal,
        carbohidratos: infNutricional[0].carbohidratos,
        azucaresTotal: infNutricional[0].azucaresTotal,
        sodio: infNutricional[0].sodio,
      };
      setInformacionNutricional(nutricionalData);
    }
  }, [infNutricional]);

  return (
    <div className="flex justify-center items-center mt-8 mb-8">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-8 border border-black">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          {params.id ? "Editando Información Nutricional" : "Creando Información Nutricional"}
        </h1>
        <Formik
          initialValues={informacionNutricional}
          enableReinitialize={true}
          onSubmit={async (values) => {
            if (infNutricional.length > 0) {
              await updateInfNutricional(params.id, values);
              alert("Has actualizado los valores de Información Nutricional");
            } else {
              await creandoInformacionNutricional(params.id, values);
              navigate("/");
            }
          }}
        >
          {({ handleChange, handleSubmit, values }) => (
            <Form
              encType="multipart/form-data"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Energía
                </label>
                <input
                  type="number"
                  name="energia"
                  onChange={handleChange}
                  value={values.energia}
                  className="mt-1 block w-full rounded-md border-black border shadow-sm p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Proteínas
                </label>
                <input
                  type="number"
                  name="proteinas"
                  onChange={handleChange}
                  value={values.proteinas}
                  className="mt-1 block w-full rounded-md border-black border shadow-sm p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Grasas Totales
                </label>
                <input
                  type="number"
                  name="grasaTotal"
                  onChange={handleChange}
                  value={values.grasaTotal}
                  className="mt-1 block w-full rounded-md border-black border shadow-sm p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Carbohidratos
                </label>
                <input
                  type="number"
                  name="carbohidratos"
                  onChange={handleChange}
                  value={values.carbohidratos}
                  className="mt-1 block w-full rounded-md border-black border shadow-sm p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Azúcares Totales
                </label>
                <input
                  type="number"
                  name="azucaresTotal"
                  onChange={handleChange}
                  value={values.azucaresTotal}
                  className="mt-1 block w-full rounded-md border-black border shadow-sm p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Sodio
                </label>
                <input
                  type="number"
                  name="sodio"
                  onChange={handleChange}
                  value={values.sodio}
                  className="mt-1 block w-full rounded-md border-black border shadow-sm p-2"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Save
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default InfNutricionalPage;
