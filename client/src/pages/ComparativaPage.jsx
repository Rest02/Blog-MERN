import React, { useEffect, useState } from "react";
import { useInfood } from "../Context/Context";
import { Formik, Form } from "formik";

function ComparativaPage() {
  const { cargarTareas, productos, getOneInfNutricional,infNutricional} = useInfood();

  const [comparativa, setComparativa] = useState([])


  useEffect(()=>{
    async function loadProducts(){
      await cargarTareas()
      setComparativa([]) 
      
    }
    loadProducts()
  },[])

  useEffect(() => {
    if (infNutricional) {
      setComparativa([...comparativa, infNutricional])
    }
  }, [infNutricional]);

  return (
    <div>
      <Formik
        initialValues={{
          idProducto: "",
          idProducto2: "",
        }}
        onSubmit={async (values) => {
          console.log(values.idProducto)
          await getOneInfNutricional(values.idProducto)
          await getOneInfNutricional(values.idProducto2)
          console.log("Comparativa", comparativa)

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
