import React, { useEffect } from "react";
import { useInfood } from '../Context/Context'

function Nosotros() {
  const { listarEmpresa, empresa } = useInfood();

  useEffect(() => {
    listarEmpresa();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen py-8 bg-white">
      {empresa.map((asd) => (
        <div key={asd.rutEmpresa} className="w-full max-w-4xl bg-gray-100 p-6 m-4 rounded-lg shadow-lg  border border-black">
          <h1 className="text-3xl font-bold mb-4 text-center">{asd.nombreEmpresa}</h1>
          <p className="text-lg mb-2"><span className="font-semibold">Descripción:</span> {asd.descripcionEmpresa}</p>
          <p className="text-lg mb-2"><span className="font-semibold">Fundador:</span> {asd.fundador}</p>
          <p className="text-lg mb-2"><span className="font-semibold">Nacionalidad:</span> {asd.nacionalidad}</p>
          {/* <img src="" alt="" className="w-full h-64 object-cover rounded-lg mb-4" /> */}
          <p className="text-lg italic text-center mt-4">"{asd.lema}"</p>
        </div>
      ))}
    </div>
  );
}

export default Nosotros;
