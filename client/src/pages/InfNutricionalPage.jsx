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
      }
    }
    loadProducto();
  }, []);

  useEffect(() => {
    console.log(infNutricional);
    if (infNutricional && infNutricional.length > 0) {
      const nutricionalData = {
        energia: infNutricional[0].energia,
        proteinas: infNutricional[0].proteinas,
        grasasTotales: infNutricional[0].grasaTotal,
        carbohidratos: infNutricional[0].carbohidratos,
        azucaresTotales: infNutricional[0].azucaresTotal,
        sodio: infNutricional[0].sodio,
      };
      console.log(nutricionalData)
      setinformacionNutricional(nutricionalData);
    }
  }, [infNutricional]);

  return (
    <div>
      <Formik
        initialValues={informacionNutricional}
        enableReinitialize={true}
        onSubmit={async (values) => {
          if (params.id) {
            // await updateInfNutricional(params.id, values);
            await creandoInformacionNutricional(params.id, values);
          }
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <Form encType="multipart/form-data" onSubmit={handleSubmit}>
            <label>Energia</label>
            <input type="number" name="energia" onChange={handleChange} 
            value={values.energia}/>

            <label>Proteinas</label>
            <input type="number" name="proteinas" onChange={handleChange}
            value={values.proteinas} />

            <label>Grasas Totales</label>
            <input type="number" name="grasasTotales" onChange={handleChange}
            value={values.grasasTotales} />

            <label>Carbohidratos</label>
            <input type="number" name="carbohidratos" onChange={handleChange} 
            value={values.carbohidratos}/>

            <label>Azucares Totales</label>
            <input
              type="number"
              name="azucaresTotales"
              onChange={handleChange}
              value={values.azucaresTotales}
            />

            <label>Sodio</label>
            <input type="number" name="sodio" onChange={handleChange} 
            value={values.sodio}/>

            {/* Para que funcione es importante poner el id del producto , aún no lo he echo */}

            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default InfNutricionalPage;
