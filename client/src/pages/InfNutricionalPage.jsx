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
  }, []);

  useEffect(() => {
    console.log(infNutricional);
    if (infNutricional && infNutricional.length > 0) {
      const nutricionalData = {
        energia: infNutricional[0].energia,
        proteinas: infNutricional[0].proteinas,
        grasaTotal: infNutricional[0].grasaTotal,
        carbohidratos: infNutricional[0].carbohidratos,
        azucaresTotal: infNutricional[0].azucaresTotal,
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
          if (infNutricional.length>0) {
            await updateInfNutricional(params.id, values);
          }else{
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
            <input type="number" name="grasaTotal" onChange={handleChange}
            value={values.grasaTotal} />

            <label>Carbohidratos</label>
            <input type="number" name="carbohidratos" onChange={handleChange} 
            value={values.carbohidratos}/>

            <label>Azucares Totales</label>
            <input
              type="number"
              name="azucaresTotal"
              onChange={handleChange}
              value={values.azucaresTotal}
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
