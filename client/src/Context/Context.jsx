import { createContext, useContext, useState } from "react";
import { listProductoRequest, listEmpresa, editProducto } from "../api/infodApi";

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

  return (
    <InfoodContext.Provider
      value={{ productos, empresa, cargarTareas, listarEmpresa, getOneProducto }}
    >
      {children}
    </InfoodContext.Provider>
  );
};
