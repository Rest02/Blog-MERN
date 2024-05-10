import React from "react";
import { Formik, Form } from "formik";

function InfNutricionalPage() {
  return (
    <div>
      <Formik
        initialValues={{
          energia: "",
          proteinas: "",
          grasasTotales: "",
          carbohidratos: "",
          azucaresTotales: "",
          Sodio: "",
        }}

        onSubmit={(values)=>{
            console.log(values)
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <label>Energia</label>
            <input type="number" name="energia" onChange={handleChange}/>

            <label>Proteinas</label>
            <input type="number" name="proteinas" onChange={handleChange}/>

            <label>Grasas Totales</label>
            <input type="number" name="grasasTotales" onChange={handleChange}/>

            <label>Carbohidratos</label>
            <input type="number" name="carbohidratos" onChange={handleChange}/>

            <label>Azucares Totales</label>
            <input type="number" name="azucaresTotales" onChange={handleChange}/>

            <label>Sodio</label>
            <input type="number" name="Sodio" onChange={handleChange}/>

            {/* Para que funcione es importante poner el id del producto , aún no lo he echo */}

            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default InfNutricionalPage;
