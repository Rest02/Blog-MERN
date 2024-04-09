import { Form, Formik } from "formik";

function ProductForm() {
  return (
    <div>
      <Formik
        initialValues={{
          Nombre: "",
          Descripción: "",
          Color: "",
        }}
      >
        {({handleChange}) => (
          <Form>
            {/* --------------------------------------------------------------------------------- */}
            <label>Nombre</label>
            <input
              type="text"
              name="Nombre"
              placeholder="Escribe le nombre del producto"
            />
            {/* --------------------------------------------------------------------------------- */}
            <label>Descripción</label>
            <textarea
              name="Descripción"
              cols="30"
              rows="10"
              placeholder="Escribe una descripción del producto"
            ></textarea>
            {/* --------------------------------------------------------------------------------- */}
            <label>Color</label>
            <input
              type="text"
              name="Color"
              placeholder="Ingresa el color principal del producto"
            />
            {/* --------------------------------------------------------------------------------- */}

            <button>Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ProductForm;
