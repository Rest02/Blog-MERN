import React from "react";
import { useInfood } from "../Context/Context";
import { Formik, Form } from "formik";

function ComparativaPage() {
  const { getOneProductoIndv, producto } = useInfood();

  return (
    <div>
      <Formik
        initialValues={{
          producto1: "",
          producto2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(
          { handleChange, handleSubmit } // Aquí usamos handleChange y handleSubmit de Formik
        ) => (
          <Form onSubmit={handleSubmit}>
            <label>Seleccione alternativa A</label>
            <select name="producto1" onChange={handleChange}>
              <option value="hola2">hola2</option>
              <option value="hola3">hola3</option>
            </select>
            <label>Seleccione producto B</label>
            <select name="producto2" onChange={handleChange}>
              <option value="hola1">hola1</option>
              <option value="hola4">hola4</option>
            </select>

            <button type="submit">save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ComparativaPage;
