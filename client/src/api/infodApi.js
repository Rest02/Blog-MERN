import axios from "axios";

export const createProductoRequest = async (producto) => {
  return axios.post("http://localhost:4000/productos", producto);
};


