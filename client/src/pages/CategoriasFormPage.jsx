import React from "react";
import { Formik, Form } from "formik";
import { useInfood } from "../Context/Context";
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

function CategoriasFormPage() {
  const { createCategoria } = useInfood();
  const navigate = useNavigate()
  const params = useParams()




  useEffect(()=>{
    console.log("Hola mundo")    
  },[])




  return (

    

    <div>

      <h1>{params.id ? "Editando categoria" : "Creando categoria"}</h1>


      <Formik
        initialValues={{
          nombreCategoria: "",
          descripcionCategoria: "",
          imagen: "",
        }}
        onSubmit={async (values, actions) => {
          await createCategoria(values);
          actions.resetForm();
          navigate("/categorias")

        }}
      >
        {({ handleChange, handleSubmit, setFieldValue, values }) => (
          <Form onSubmit={handleSubmit} encType="multipart/form-data">
            <label>Nombre de la categoria: </label>
            <input
              type="text"
              name="nombreCategoria"
              onChange={handleChange}
              value={values.nombreCategoria}
            />

            <label>Descripciópn de la categoria: </label>
            <textarea
              type="text"
              name="descripcionCategoria"
              cols="30"
              rows="10"
              onChange={handleChange}
              value={values.descripcionCategoria}
            />

            <label>Imagen de la categoria: </label>
            <input
              type="file"
              name="imagen"
              onChange={(e) => setFieldValue("imagen", e.target.files[0])}

            />

            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CategoriasFormPage;
