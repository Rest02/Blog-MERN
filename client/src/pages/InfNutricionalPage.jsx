import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { useParams } from "react-router-dom";
import { useInfood } from "../Context/Context";

function InfNutricionalPage() {
  const {
    creandoInformacionNutricional,
    getOneInfNutricional,
    infNutricional,
    updateInfNutricional,
  } = useInfood();

  const params = useParams();
  console.log(params.id);

  const [informacionNutricional, setinformacionNutricional] = useState({
    energia: "",
    proteinas: "",
    grasasTotales: "",
    carbohidratos: "",
    azucaresTotales: "",
    sodio: "",
  });

  useEffect(() => {
    async function loadProducto() {
      if (params.id) {
        await getOneInfNutricional(params.id);
        console.log("inf nutricional" , infNutricional);
      }
    }
    loadProducto();
  }, [params.id]);

  useEffect(() => {
    if (infNutricional && infNutricional.length > 0) {
      setinformacionNutricional({
        energia: infNutricional[0].energia,
        proteinas: infNutricional[0].proteinas,
        grasasTotales: infNutricional[0].grasasTotales,
        carbohidratos: infNutricional[0].carbohidratos,
        azucaresTotales: infNutricional[0].azucaresTotales,
        sodio: infNutricional[0].sodio,
      });
    }
  },[infNutricional]);

  return (
    <div>
      <Formik
        initialValues={informacionNutricional}
        enableReinitialize={true}
        onSubmit={async (values) => {
          if (params.id) {
            await updateInfNutricional(params.id, values);
          } else {
            await creandoInformacionNutricional(params.id, values);
          }
        }}
        
      >
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <label>Energia</label>
            <input type="number" name="energia" onChange={handleChange} />

            <label>Proteinas</label>
            <input type="number" name="proteinas" onChange={handleChange} />

            <label>Grasas Totales</label>
            <input type="number" name="grasasTotales" onChange={handleChange} />

            <label>Carbohidratos</label>
            <input type="number" name="carbohidratos" onChange={handleChange} />

            <label>Azucares Totales</label>
            <input
              type="number"
              name="azucaresTotales"
              onChange={handleChange}
            />

            <label>Sodio</label>
            <input type="number" name="sodio" onChange={handleChange} />

            {/* Para que funcione es importante poner el id del producto , aún no lo he echo */}

            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default InfNutricionalPage;
