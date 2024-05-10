import React from "react";
import { Formik, Form } from "formik";
import { useParams } from 'react-router-dom'
import { useInfood } from '../Context/Context'

function InfNutricionalPage() {

    const {postInfNutricional} = useInfood()

    const params = useParams()
    console.log(params.id)
  
  
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

        onSubmit={async (values)=>{
            postInfNutricional(params.id, values)
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
