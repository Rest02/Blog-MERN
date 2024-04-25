import React, { useEffect } from "react";
import { useInfood } from '../Context/Context'

function Nosotros() {

  const {listarEmpresa, empresa} = useInfood()

  useEffect(() => {
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
