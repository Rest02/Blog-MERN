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

  useEffect(()=>{
    async function loatInfNutricional(){
      await getOneInfNutricional(productos.idProducto)
    }
    loatInfNutricional()
    console.log(infNutricional)
  },[])

  return (
    <div>
      <Formik
        initialValues={{
          producto1: "",
          producto2: "",
        }}
        onSubmit={async (values) => {
          console.log(values)
        }}
      >
        {(
          { handleChange, handleSubmit } // Aquí usamos handleChange y handleSubmit de Formik
        ) => (
          <Form onSubmit={handleSubmit}>
            <label>Seleccione alternativa A</label>
            <select name="producto1" onChange={handleChange}>
              {productos.map((cat)=>(
                <option key={cat.idProducto} value={cat.idProducto}>{cat.nombreProducto}</option>
              ))}
            </select>
            <label>Seleccione producto B</label>
            <select name="producto2" onChange={handleChange}>
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
