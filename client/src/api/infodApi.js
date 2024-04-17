import axios from "axios";

export const createProductoRequest = async (producto) => {
  return axios.post("http://localhost:4000/productos", producto);
};

export const listTaskRequest = async() => {
  return axios.get("http://localhost:4000/productos")
}