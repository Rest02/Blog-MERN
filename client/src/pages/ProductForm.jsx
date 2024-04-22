import { Form, Formik } from "formik";
import { createProductoRequest } from "../api/infodApi";
import { useNavigate, useParams } from 'react-router-dom'

function ProductForm() {
  const navigate = useNavigate()
  const params = useParams()


  return (
    <div>


      <h1>{params.id ? "Editando producto" : "Creando producto"}</h1>


      <Formik
        initialValues={{
          Nombre: "",
          Descripción: "",
          Color: "",
          photo: "",
          idCategoria: "1",
        }}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          try {
            const formData = new FormData();
            formData.append("nombreProducto", values.Nombre);
            formData.append("descripcionProducto", values.Descripción);
            formData.append("colorProducto", values.Color);
            formData.append("photo", values.photo);
            formData.append("idCategoria", values.idCategoria); // Agregar categoría
      
            const response = await createProductoRequest(formData);
            console.log(response);
            resetForm();
            navigate("/")
          } catch (error) {
            console.log(error);
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
          <Form onSubmit={handleSubmit}>
            {/* --------------------------------------------------------------------------------- */}
            <label>Nombre</label>
            <input
              type="text"
              name="Nombre"
              placeholder="Escribe le nombre del producto"
              onChange={handleChange}
              value={values.Nombre}
            />
            {/* --------------------------------------------------------------------------------- */}
            <label>Descripción</label>
            <textarea
              name="Descripción"
              cols="30"
              rows="10"
              placeholder="Escribe una descripción del producto"
              onChange={handleChange}
              value={values.Descripción}
            ></textarea>
            {/* --------------------------------------------------------------------------------- */}
            <label>Color</label>
            <input
              type="text"
              name="Color"
              placeholder="Ingresa el color principal del producto"
              onChange={handleChange}
              value={values.Color}
            />
            {/* --------------------------------------------------------------------------------- */}
            <label>Upload file</label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={(e) => {
                setFieldValue("photo", e.currentTarget.files[0]);
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
              <option value="2">Categoria 2</option>
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
