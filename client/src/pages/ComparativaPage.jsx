import React, { useEffect } from "react";
import { useInfood } from "../Context/Context";
import { Formik, Form } from "formik";
import ComponenteComparativa from "../components/ComponenteComparativa";

function ComparativaPage() {
  const {
    cargarTareas,
    productos,
    listarComparativa,
    comparativa,
    listarComparativaInfNutricional,
    comparativaInfNutricional,
  } = useInfood();

  useEffect(() => {
    async function loadProducts() {
      await cargarTareas();
    }
    loadProducts();
  }, []);

  useEffect(() => {
    console.log("Comparativa Nombres y phto: ", comparativa);
    console.log("InfNutricional: ", comparativaInfNutricional);
  }, [comparativa, comparativaInfNutricional]);

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
            await listarComparativaInfNutricional(
              values.idProducto,
              values.idProducto2
            );
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

      <div>
        <ComponenteComparativa comparativa={comparativa} />
      </div>
    </div>
  );
}

export default ComparativaPage;
