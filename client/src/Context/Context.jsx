import { createContext, useContext, useState } from "react";
import {
  listProductoRequest,
  listEmpresa,
  editProducto,
  createProductoRequest,
  eliminarProducto,
  listCategorias,
  createInfNutricionalapi,
  updateProductoRequest,
  getProductInfNutricional,
  getOneProducto,
  getInfNutricionalOnly,
  postInfNutricional,
  putInfNutricional,
  postCategoria,
  putCategoria,
  oneCategoria
} from "../api/infodApi";
import { useNavigate } from "react-router";

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
  const [categoria, setCategoria] = useState([]);
  const [producto, setProducto] = useState([]);
  const [infNutricional, setInfNutricional] = useState([])
  const [OneCategoria, setOneCategoria] = useState([])

  


  const navigate = useNavigate();

  async function cargarTareas() {
    const response = await listProductoRequest();
    setProductos(response.data);
  }

  async function listarEmpresa() {
    try{
      const response = await listEmpresa();
      setEmpresa(response.data);
    }catch(error){
      console.log(error)
    }
  }

  // async function getOneProducto(id) {
  //   try {
  //     const response = await editProducto(id);
  //     return response.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async function createProduct(values) {
    try {
      const formData = new FormData();
      formData.append("nombreProducto", values.nombreProducto);
      formData.append("descripcionProducto", values.descripcionProducto);
      formData.append("colorProducto", values.colorProducto);
      formData.append("imagen", values.imagen);
      formData.append("idCategoria", values.idCategoria); // Agregar categoría

      const response = await createProductoRequest(formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function createCategoria(values){
    try{
      const formData = new FormData();
      formData.append("nombreCategoria", values.nombreCategoria);
      formData.append("descripcionCategoria", values.descripcionCategoria);
      formData.append("imagen", values.imagen);
  
      const response = await postCategoria(formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  

  async function deleteProducto(id) {
    try {
      const response = await eliminarProducto(id);
      console.log(response);
      navigate(0);
    } catch (error) {
      console.log(error);
    }
  }

  async function getCategorias() {
    try {
      const response = await listCategorias();
      setCategoria(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function createInfNutricional(id, values) {
    try {
      const response = await createInfNutricionalapi(id, values);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateProduct(id, values) {
    try {
      console.log("ID del producto:", id);
      console.log("Nuevos campos:", values);
      const formData = new FormData();
      formData.append("nombreProducto", values.nombreProducto);
      formData.append("descripcionProducto", values.descripcionProducto);
      formData.append("colorProducto", values.colorProducto);
      formData.append("imagen", values.imagen);
      formData.append("idCategoria", values.idCategoria);

      const response = await updateProductoRequest(id, formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateCategorias(id, values){
    try{
      const formdata = new FormData()
      formdata.append("")
      formdata.append("")
      formdata.append("")
      formdata.append("")
      formdata.append("")
      const response = putCategoria(id, formdata)
      console.log(response)
    }catch(error){
      console.log(error)
    }
  }


  async function getOneCategoria(id){
    try{
      const result = await oneCategoria(id)
      setOneCategoria(result.data)

    }catch(error){
      console.log(error)
    }
  }

  async function mostrarProductInfNutricional(id) {
    try {
      const response = await getProductInfNutricional(id);
      setProducto(response.data); // Devolver un array vacío si no se encuentra el producto
    } catch (error) {
      console.log(error);
      return []; // Devolver un array vacío en caso de error
    }
  }

  async function getOneProductoIndv(id) {
    try {
      const response = await getOneProducto(id);
      setProducto(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }


  async function getOneInfNutricional(id){
    try{
      const response = await getInfNutricionalOnly(id)
      setInfNutricional(response.data)
    }catch(error){
      console.log(error)
    }
  }

  async function creandoInformacionNutricional(id, values){
    try{
      const response = await postInfNutricional(id , values)
      console.log(response.data)
    }catch(error){
      console.log(error)
    }
  }

  async function updateInfNutricional(id, values){
    try{
      const response = putInfNutricional(id, values)
      console.log(response)
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
        producto,
        infNutricional,
        OneCategoria,
        cargarTareas,
        listarEmpresa,
        getOneProducto,
        createProduct,
        deleteProducto,
        getCategorias,
        createInfNutricional,
        updateProduct,
        mostrarProductInfNutricional,
        getOneProductoIndv,
        getOneInfNutricional,
        creandoInformacionNutricional,
        updateInfNutricional,
        createCategoria,
        getOneCategoria
      }}
    >
      {children}
    </InfoodContext.Provider>
  );
};
