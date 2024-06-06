import React, { useEffect } from "react";
import { useInfood } from "../Context/Context";
import { Formik, Form } from "formik";

function ComparativaPage() {
  const { cargarTareas, productos, listarComparativa, comparativa } =
    useInfood();

  useEffect(() => {
    async function loadProducts() {
      await cargarTareas();
    }
    loadProducts();
  }, []);

  useEffect(() => {
    console.log(comparativa);
  }, [comparativa]);

  function mostrarProductos() {
    if (comparativa.length > 0) {
      return <h1>Si contiene productos</h1>;
    } else {
      return <h1>Aún no se selecciona ningun producto</h1>;
    }
  }

  return (
    <div>
      <Formik
        initialValues={{
          idProducto: "",
          idProducto2: "",
        }}
        onSubmit={async (values) => {
          if (values.idProducto === "" || values.idProducto2 === "") {
            alert("Debe seleccionar una opción para ambos productos");
          } else {
            console.log(values);
            await listarComparativa(values.idProducto, values.idProducto2);
          }
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

      <div>{mostrarProductos()}</div>
    </div>
  );
}

export default ComparativaPage;
