import React from "react";
import { Formik, Form } from "formik";

function CategoriasFormPage() {
  return (
    <div>
      <Formik
        initialValues={{
          nombreCategoria: "",
          descripcionCategoria: "",
          imagen: "",
        }}

        onSubmit={(values)=>{
            console.log(values)
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <label>Nombre de la categoria: </label>
            <input type="text" name="nombreCategoria" onChange={handleChange}/>

            <label>Descripciópn de la categoria: </label>
            <input type="text" name="descripcionCategoria" onChange={handleChange}/>

            <label>Imagen de la categoria: </label>
            <input type="file" name="imagen" onChange={handleChange}/>

            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CategoriasFormPage;
