import React from "react";
import { useState } from "react";
import { Formik, Form } from "formik";
import { useInfood } from "../Context/Context";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function CategoriasFormPage() {
  const { createCategoria, getOneCategoria, OneCategoria, updateCategorias } =
    useInfood();
  const navigate = useNavigate();
  const params = useParams();

  const [Categoria, setCategoria] = useState({
    nombreCategoria: "",
    descripcionCategoria: "",
    imagen: ""
  });

  useEffect(() => {
    async function loadOneCategoria() {
      if (params.id) {
        await getOneCategoria(params.id);
      }
    }
    loadOneCategoria();
  }, []);

  useEffect(() => {
    if (params.id && OneCategoria && OneCategoria.length > 0) {
      const categoriaData = {
        nombreCategoria: OneCategoria[0].nombreCategoria,
        descripcionCategoria: OneCategoria[0].descripcionCategoria,
        imagen: OneCategoria[0].imagen,
      };
      setCategoria(categoriaData);
    } else {
      setCategoria({
        nombreCategoria: "",
        descripcionCategoria: "",
        imagen: "",
      });
    }
  }, [params.id, OneCategoria]);

  return (
    <div>
      <h1>{params.id ? "Editando categoria" : "Creando categoria"}</h1>

      <Formik
        initialValues={Categoria}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updateCategorias(params.id, values);
            actions.resetForm();
            navigate("/categorias");
            alert("Se ha Actualizado la categoria");
          } else {
            await createCategoria(values);
            actions.resetForm();
            navigate("/categorias");
            alert("Se ha Creado la categoria");
          }
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
