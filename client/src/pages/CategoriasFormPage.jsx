import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { useInfood } from "../Context/Context";
import { useNavigate, useParams } from "react-router-dom";
import form from "../images/form.jpg";

function CategoriasFormPage() {
  const { createCategoria, getOneCategoria, OneCategoria, updateCategorias } = useInfood();
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
  }, [params.id, getOneCategoria]);

  useEffect(() => {
    if (params.id && OneCategoria && OneCategoria.length > 0) {
      setCategoria({
        nombreCategoria: OneCategoria[0].nombreCategoria,
        descripcionCategoria: OneCategoria[0].descripcionCategoria,
        imagen: OneCategoria[0].imagen,
      });
    } else {
      setCategoria({
        nombreCategoria: "",
        descripcionCategoria: "",
        imagen: "",
      });
    }
  }, [params.id, OneCategoria]);

  return (
    <div className="flex justify-center items-center mt-8 mb-8">
      <div className="flex max-w-4xl p-8 bg-white shadow-md rounded-lg border border-black">
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-6">
            {params.id ? "Editando categoría" : "Creando categoría"}
          </h1>

          <Formik
            initialValues={Categoria}
            enableReinitialize={true}
            onSubmit={async (values, actions) => {
              if (params.id) {
                await updateCategorias(params.id, values);
                actions.resetForm();
                navigate("/categorias");
                alert("Se ha Actualizado la categoría");
              } else {
                await createCategoria(values);
                actions.resetForm();
                navigate("/categorias");
                alert("Se ha Creado la categoría");
              }
            }}
          >
            {({ handleChange, handleSubmit, setFieldValue, values, isSubmitting }) => (
              <Form encType="multipart/form-data" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nombre de la categoría
                  </label>
                  <input
                    type="text"
                    name="nombreCategoria"
                    placeholder="Escribe el nombre de la categoría"
                    onChange={handleChange}
                    value={values.nombreCategoria}
                    className="mt-1 block w-full rounded-md border-black border shadow-sm p-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Descripción de la categoría
                  </label>
                  <textarea
                    name="descripcionCategoria"
                    cols="30"
                    rows="10"
                    placeholder="Escribe una descripción de la categoría"
                    onChange={handleChange}
                    value={values.descripcionCategoria}
                    className="mt-1 block w-full rounded-md border-black border shadow-sm p-2"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Subir imagen
                  </label>
                  <input
                    type="file"
                    name="imagen"
                    accept="image/*"
                    onChange={(e) => setFieldValue("imagen", e.currentTarget.files[0])}
                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-600 hover:file:bg-green-100"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    {isSubmitting ? "Guardando..." : "Guardar"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="flex-1 ml-8 flex items-center justify-center">
          <img
            src={form}
            alt="Formulario"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default CategoriasFormPage;
