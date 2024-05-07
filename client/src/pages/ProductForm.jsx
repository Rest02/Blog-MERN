import { Form, Formik, validateYupSchema } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useInfood } from "../Context/Context";
import { useEffect, useState } from "react";
import Formik2 from '../components/Formik2'
function ProductForm() {
  const navigate = useNavigate();
  const params = useParams();

  const {getOneProductoIndv, createProduct, updateProduct } = useInfood();

  const [producto, setProducto] = useState({
    nombreProducto: "",
    descripcionProducto: "",
    colorProducto: "",
    imagen: "",
    idCategoria: "1",
  });

  

  useEffect(() => {
    async function sendProducto() {
      if (params.id) {
        const producto1 = await getOneProductoIndv(params.id);
        setProducto({
          nombreProducto: producto1[0].nombreProducto,
          descripcionProducto: producto1[0].descripcionProducto,
          colorProducto: producto1[0].colorProducto,
          imagen: producto1[0].imagen[0],
          idCategoria: producto1[0].idCategoria.toString(),
        })
        console.log(producto1)
      }
    }

    sendProducto();
    console.log(producto)
  }, []);

  
  return (
    <div>
      <h1>{params.id ? "Editando producto" : "Creando producto"}</h1>

      <Formik
        initialValues={producto}
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

            {/* <h1>Información Nutricional</h1>
            <label>Energia</label>
            <input
              type="number"
              name="Energia"
              placeholder="Ingresar un numero referente a la energia del producto"
              onChange={handleChange}
              value={values.Energia}
            /> */}

            {/* --------------------------------------------------------------------------------- */}

            {/* <label>Proteinas</label>
            <input
              type="number"
              name="proteinas"
              placeholder="Ingresar un numero referente a la proteina del producto"
              onChange={handleChange}
              value={values.proteinas}
            /> */}

            {/* --------------------------------------------------------------------------------- */}

            {/* <label>Grasa Total</label>
            <input
              type="number"
              name="grasaTotal"
              placeholder="Ingresar un numero referente a la Grasa total del producto"
              onChange={handleChange}
              value={values.grasaTotal}
            /> */}

            {/* --------------------------------------------------------------------------------- */}

            {/* <label>Carbohidratos</label>
            <input
              type="number"
              name="Carbohidratos"
              placeholder="Ingresar un numero referente a los carbohidratos totales del producto"
              onChange={handleChange}
              value={values.Carbohidratos}
            /> */}

            {/* --------------------------------------------------------------------------------- */}
            
            {/* <label>Azucares Totales</label>
            <input
              type="number"
              name="azucaresTotal"
              placeholder="Ingresar un numero referente a los azucares totales del producto"
              onChange={handleChange}
              value={values.azucaresTotal}
            /> */}

            {/* --------------------------------------------------------------------------------- */}

            {/* <label>Sodio</label>
            <input
              type="number"
              name="sodio"
              placeholder="Ingresar un numero referente a el sodio total del producto"
              onChange={handleChange}
              value={values.sodio}
            /> */}

            {/* --------------------------------------------------------------------------------- */}

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
      <Formik2/>
    </div>
  );
}

export default ProductForm;
