import { Form, Formik, validateYupSchema } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useInfood } from "../Context/Context";
import { useEffect, useState } from "react";

function ProductForm() {
  const navigate = useNavigate();
  const params = useParams();

  const { getOneProductoIndv, createProduct, updateProduct, producto } =
    useInfood();

  const [productoBase, setProductoBase] = useState({
    nombreProducto: "",
    descripcionProducto: "",
    colorProducto: "",
    imagen: "",
    idCategoria: "1",
  });

  useEffect(() => {
    async function sendProducto() {
      if (params.id) {
        await getOneProductoIndv(params.id);
      }
    }
  
    sendProducto();
  }, []);
  
  useEffect(() => {
    if (producto && producto.length > 0) {
      setProductoBase({
        nombreProducto: producto[0].nombreProducto,
        descripcionProducto: producto[0].descripcionProducto,
        colorProducto: producto[0].colorProducto,
        imagen: producto[0].imagen,
        idCategoria: producto[0].idCategoria,
      });
    }
  }, [producto]);
  

  return (
    <div>
      <h1>{params.id ? "Editando producto" : "Creando producto"}</h1>

      <Formik
        initialValues={productoBase}
        enableReinitialize={true}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          if (params.id) {
            await updateProduct(params.id, values);
          } else {
            await createProduct(values);
            resetForm();
            navigate("/");
          }
        }}
      >
        {({
          handleChange,
          handleSubmit,
          setFieldValue,
          values,
          isSubmitting,
        }) => (
          <Form encType="multipart/form-data" onSubmit={handleSubmit}>
            {/* --------------------------------------------------------------------------------- */}
            <label>Nombre</label>
            <input
              type="text"
              name="nombreProducto"
              placeholder="Escribe le nombre del producto"
              onChange={handleChange}
              value={values.nombreProducto}
            />
            {/* --------------------------------------------------------------------------------- */}
            <label>Descripción</label>
            <textarea
              name="descripcionProducto"
              cols="30"
              rows="10"
              placeholder="Escribe una descripción del producto"
              onChange={handleChange}
              value={values.descripcionProducto}
            ></textarea>
            {/* --------------------------------------------------------------------------------- */}
            <label>Color</label>
            <input
              type="text"
              name="colorProducto"
              placeholder="Ingresa el color principal del producto"
              onChange={handleChange}
              value={values.colorProducto}
            />
            {/* --------------------------------------------------------------------------------- */}
            <label>Upload file</label>
            <input
              type="file"
              name="imagen"
              accept="image/*"
              onChange={(e) => {
                setFieldValue("imagen", e.currentTarget.files[0]);
              }}
            />
            {/* --------------------------------------------------------------------------------- */}

            <label>Categoría</label>
            <select
              name="idCategoria"
              onChange={handleChange}
              value={values.idCategoria}
            >
              <option value="1">Frutas y verduras</option>
              <option value="2">Carnes y pescados</option>
              <option value="3">Categoria 3</option>
            </select>

            {/* --------------------------------------------------------------------------------- */}

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ProductForm;
