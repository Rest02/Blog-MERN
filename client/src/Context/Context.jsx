import { createContext, useContext, useState } from "react";
import { listProductoRequest } from '../api/infodApi'

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


    async function cargarTareas() {
      const response = await listProductoRequest();
      setProductos(response.data);
    }



  return (
    <InfoodContext.Provider value={{ productos, cargarTareas}}>
      {children}
    </InfoodContext.Provider>
  );
};
