import { pool } from "../db.js";

export const createEmpresa = async (req, res) => {
  const {
    rutEmpresa,
    nombreEmpresa,
    descripcionEmpresa,
    fundador,
    nacionalidad,
    imagen,
    lema,
  } = req.body;
  const result = await pool.query(
    "INSERT INTO empresa(rutEmpresa, nombreEmpresa, descripcionEmpresa, fundador, nacionalidad, imagen, lema) VALUES(?,?,?,?,?,?,?)",
    [
      rutEmpresa,
      nombreEmpresa,
      descripcionEmpresa,
      fundador,
      nacionalidad,
      imagen,
      lema,
    ]
  );
  console.log(result);
  res.json({
    rutEmpresa: result.rutEmpresa,
    nombreEmpresa,
    descripcionEmpresa,
  });
};
