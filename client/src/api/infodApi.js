import axios from "axios";

//----------------------------------------------------------------------------------------------------

export const getOneProducto = async (id) => {
  return axios.get(`http://localhost:4000/producto/${id}`);
};

export const createProductoRequest = async (producto) => {
  return axios.post("http://localhost:4000/productos", producto);
};

export const listProductoRequest = async () => {
  return axios.get("http://localhost:4000/productos");
};

export const updateProductoRequest = async (id, newfileds) => {
  return axios.put(`http://localhost:4000/productos/update/${id}`, newfileds);
};

export const editProducto = async (id) => {
  return axios.get(`http://localhost:4000/productos/${id}`);
};

export const eliminarProducto = async (id) => {
  return axios.delete(`http://localhost:4000/productos/opciones/${id}`);
};

//----------------------------------------------------------------------------------------------------

export const listEmpresa = async () => {
  return axios.get("http://localhost:4000/empresa");
};

//----------------------------------------------------------------------------------------------------

export const listCategorias = async () => {
  return axios.get("http://localhost:4000/categorias");
};

//----------------------------------------------------------------------------------------------------

export const createInfNutricionalapi = async (id, inf) => {
  return axios.post(`http://localhost:4000/productos/infnutri/${id}`, inf);
};

//----------------------

export const getProductInfNutricional = async (id) => {
  return axios.get(`http://localhost:4000/productos/${id}`);
};
