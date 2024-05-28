import React from "react";
import { useInfood } from "../Context/Context";
import { Formik, Form } from "formik";

function ComparativaPage() {
  // const { getOneProductoIndv, producto } = useInfood();

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
        {(handleChange, handleSubmit) => (
          <Form onSubmit={handleSubmit}>
            <label>Seleccione alternativa A</label>
            <select name="producto1" onChange={handleChange}>
              <option>hola2</option>
            </select>
            <label>Seleccione producto B</label>
            <select name="producto2" onChange={handleChange}>
              <option>hola1</option>
            </select>

            <button type="submit">save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ComparativaPage;
