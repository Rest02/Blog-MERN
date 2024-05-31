import React, { useEffect } from "react";
import { useInfood } from "../Context/Context";
import { Formik, Form } from "formik";

function ComparativaPage() {
  const { cargarTareas, productos } = useInfood();

  useEffect(() => {
    async function loadProducts() {
      await cargarTareas();
    }
    loadProducts();
  }, []);

  return (
    <div>
      <Formik
        initialValues={{
          idProducto: "",
          idProducto2: "",
        }}
        onSubmit={async (values, { setSubmitting }) => {
          if (values.idProducto === "" || values.idProducto2 === "") {
            alert("Debe seleccionar una opción para ambos productos");
          } else {
            console.log(values);
            // Aquí podrías enviar los datos al backend o hacer lo que necesites con ellos
          }
          setSubmitting(false);
        }}
      >
        {(
          { handleChange, handleSubmit } // Aquí usamos handleChange y handleSubmit de Formik
        ) => (
          <Form onSubmit={handleSubmit}>
            <label>Seleccione alternativa A</label>
            <select name="idProducto" onChange={handleChange}>
              <option>Selecciona la opcion</option>
              {productos.map((cat) => (
                <option key={cat.idProducto} value={cat.idProducto}>
                  {cat.nombreProducto}
                </option>
              ))}
            </select>
            <label>Seleccione producto B</label>
            <select name="idProducto2" onChange={handleChange}>
              <option>Selecciona la opcion</option>
              {productos.map((cat) => (
                <option key={cat.idProducto} value={cat.idProducto}>
                  {cat.nombreProducto}
                </option>
              ))}
            </select>

            <button type="submit">save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ComparativaPage;
