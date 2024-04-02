import { pool } from "../db.js";

// APARTADO CREAR EMPRESA

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

// APARTADO CREAR PRODUCTO

// APARTADO CREAR CATEGORIA

export const createCategoria = async (req, res) => {
  const { nombreCategoria, descripcionCategoria, imagen } = req.body;
  const result = pool.query("INSERT INTO categoria(nombreCategoria, descripcionCategoria, imagen) VALUES(?,?,?)", [
    nombreCategoria,
    descripcionCategoria,
    imagen
  ])
  console.log(result)
  res.json({
    nombreCategoria,
    descripcionCategoria,
    imagen
  })
};
