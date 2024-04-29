import { createContext, useContext, useState } from "react";
import {
  listProductoRequest,
  listEmpresa,
  editProducto,
  createProductoRequest,
  eliminarProducto,
  listCategorias
} from "../api/infodApi";
import { useNavigate } from 'react-router'



export const InfoodContext = createContext();

export const useInfood = () => {
  const context = useContext(InfoodContext);
  if (!context) {
    throw new Error("El contexto tiene que estar dentro del provider");
  }

  return context;
};

export const InfoodContextProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [empresa, setEmpresa] = useState([]);
  const [categoria, setCategoria] = useState([])
  const navigate = useNavigate()

  async function cargarTareas() {
    const response = await listProductoRequest();
    setProductos(response.data);
  }

  async function listarEmpresa() {
    const response = await listEmpresa();
    setEmpresa(response.data);
  }

  async function getOneProducto(id) {
    try {
      const response = await editProducto(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async function createProduct(values) {
    try {
      const formData = new FormData();
      formData.append("nombreProducto", values.Nombre);
      formData.append("descripcionProducto", values.Descripción);
      formData.append("colorProducto", values.Color);
      formData.append("photo", values.photo);
      formData.append("idCategoria", values.idCategoria); // Agregar categoría

      const response = await createProductoRequest(formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteProducto(id) {
    try {
      const response = await eliminarProducto(id);
      console.log(response);
      navigate(0)
    } catch (error) {
      console.log(error);
    }
  }


  async function getCategorias() {
    try{
      const response = await listCategorias()
      setCategoria(response.data)
    }catch(error){
      console.log(error)
    }
  }

  return (
    <InfoodContext.Provider
      value={{
        productos,
        empresa,
        categoria,
        cargarTareas,
        listarEmpresa,
        getOneProducto,
        createProduct,
        deleteProducto,
        getCategorias
      }}
    >
      {children}
    </InfoodContext.Provider>
  );
};
