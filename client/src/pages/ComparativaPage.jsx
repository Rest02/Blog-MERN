import React, { useEffect } from "react";
import { useInfood } from "../Context/Context";
import { Formik, Form } from "formik";

function ComparativaPage() {
  const { cargarTareas, productos, getOneInfNutricional,infNutricional} = useInfood();


  useEffect(()=>{
    async function loadProducts(){
      await cargarTareas()
      
    }
    loadProducts()
  },[])

  return (
    <div>
      <Formik
        initialValues={{
          idProducto: "",
          idProducto2: "",
        }}
        onSubmit={async (values) => {
          console.log(values)
          await getOneInfNutricional(values.idProducto)
          console.log(infNutricional)
        }}
      >
        {(
          { handleChange, handleSubmit } // Aquí usamos handleChange y handleSubmit de Formik
        ) => (
          <Form onSubmit={handleSubmit}>
            <label>Seleccione alternativa A</label>
            <select name="idProducto" onChange={handleChange}>
              {productos.map((cat)=>(
                <option key={cat.idProducto} value={cat.idProducto}>{cat.nombreProducto}</option>
              ))}
            </select>
            <label>Seleccione producto B</label>
            <select name="idProducto2" onChange={handleChange}>
              {productos.map((cat)=>(
                <option key={cat.idProducto} value={cat.idProducto}>{cat.nombreProducto}</option>
              ))}
            </select>

            <button type="submit">save</button>
          </Form>
        )}
      </Formik>

      

    </div>
  );
}

export default ComparativaPage;
