import axios from "axios";

export const createProductoRequest = async (producto) => {
  return axios.post("http://localhost:4000/productos", producto);
};

export const listProductoRequest = async () => {
  return axios.get("http://localhost:4000/productos");
};

export const listEmpresa = async () => {
  return axios.get("http://localhost:4000/empresa");
};

export const editProducto = async (id) => {
  return axios.get(`http://localhost:4000/productos/${id}`);
};
