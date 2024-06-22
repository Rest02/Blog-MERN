import { Form, Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useInfood } from "../Context/Context";
import { useEffect, useState } from "react";
import form from "../images/form.jpg";

function ProductForm() {
  const navigate = useNavigate();
  const params = useParams();

  const {
    getOneProductoIndv,
    createProduct,
    updateProduct,
    producto,
    getCategorias,
    categoria,
  } = useInfood();

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

    getCategorias();
    sendProducto();
  }, [params.id, getOneProductoIndv, getCategorias]);

  useEffect(() => {
    if (params.id && producto && producto.length > 0) {
      setProductoBase({
        nombreProducto: producto[0].nombreProducto,
        descripcionProducto: producto[0].descripcionProducto,
        colorProducto: producto[0].colorProducto,
        imagen: producto[0].imagen,
        idCategoria: producto[0].idCategoria,
      });
    } else {
      setProductoBase({
        nombreProducto: "",
        descripcionProducto: "",
        colorProducto: "",
        imagen: "",
        idCategoria: "1",
      });
    }
  }, [params.id, producto]);

  return (
    <div className="flex justify-center items-center mt-8 mb-8">
      <div className="flex max-w-4xl p-8 bg-white shadow-md rounded-lg border border-black">
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-6">
            {params.id ? "Editando producto" : "Creando producto"}
          </h1>

          <Formik
            initialValues={productoBase}
            enableReinitialize={true}
            onSubmit={async (values, actions) => {
              if (params.id) {
                await updateProduct(params.id, values);
                actions.resetForm();
                navigate("/");
              } else {
                await createProduct(values);
                actions.resetForm();
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
              <Form
                encType="multipart/form-data"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Nombre */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="nombreProducto"
                    placeholder="Escribe el nombre del producto"
                    onChange={handleChange}
                    value={values.nombreProducto}
                    className="mt-1 block w-full rounded-md border-black border shadow-sm p-2"
                  />
                </div>
                {/* Descripción */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Descripción
                  </label>
                  <textarea
                    name="descripcionProducto"
                    cols="30"
                    rows="10"
                    placeholder="Escribe una descripción del producto"
                    onChange={handleChange}
                    value={values.descripcionProducto}
                    className="mt-1 block w-full rounded-md border-black border shadow-sm p-2"
                  ></textarea>
                </div>
                {/* Color */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Color
                  </label>
                  <input
                    type="text"
                    name="colorProducto"
                    placeholder="Ingresa el color principal del producto"
                    onChange={handleChange}
                    value={values.colorProducto}
                    className="mt-1 block w-full rounded-md border-black border shadow-sm p-2"
                  />
                </div>
                {/* Upload file */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Subir imagen
                  </label>
                  <input
                    type="file"
                    name="imagen"
                    accept="image/*"
                    onChange={(e) =>
                      setFieldValue("imagen", e.currentTarget.files[0])
                    }
                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-600 hover:file:bg-green-100"
                  />
                </div>
                {/* Categoría */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Categoría
                  </label>
                  <select
                    name="idCategoria"
                    onChange={handleChange}
                    value={values.idCategoria}
                    className="mt-1 block w-full rounded-md border-black border shadow-sm p-2"
                  >
                    {categoria.map((cat) => (
                      <option key={cat.idCategoria} value={cat.idCategoria}>
                        {cat.nombreCategoria}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Botón */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    {isSubmitting ? "Saving..." : "Save"}
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

export default ProductForm;
