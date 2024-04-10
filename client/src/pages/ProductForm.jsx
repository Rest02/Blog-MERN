import { Form, Formik } from "formik";
import { createProductoRequest } from "../api/infodApi";

function ProductForm() {
  return (
    <div>
      <Formik
        initialValues={{
          Nombre: "",
          Descripción: "",
          Color: "",
        }}
        onSubmit={async (values) => {
          console.log(values);
          try {
            const response = await createProductoRequest(values);
            console.log(response);
            actions.resetForm()
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
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
