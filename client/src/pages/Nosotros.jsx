import React, { useEffect, useState } from "react";
import { listEmpresa } from "../api/infodApi";

function Nosotros() {
  const [empresa, setEmpresa] = useState([]);

  useEffect(() => {
    async function listarEmpresa() {
      const response = await listEmpresa();
      setEmpresa(response.data);
    }
    listarEmpresa();
  }, []);

  return (
    <div>
      {empresa.map((asd) => (
        <div key={asd.rutEmpresa}>
          <h1>{asd.nombreEmpresa}</h1>
          <p>{asd.descripcionEmpresa}</p>
          <p>{asd.fundador}</p>
          <p>{asd.nacionalidad}</p>
          {/*   <img src="" alt="" /> */}
          <p>{asd.lema}</p>
        </div>
      ))}
    </div>
  );
}

export default Nosotros;
