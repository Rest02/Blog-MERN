import { pool } from "../db.js";
import router from "../routes/store.routes.js";

//------------------------------------- METODOS POST --------------------------------------------

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

export const createProducto = async (req, res) => {
  const rutEmpresa = 211251026;
  const {
    nombreProducto,
    descripcionProducto,
    colorProducto,
    imagen,
    idCategoria,
  } = req.body;

  const result = pool.query(
    "INSERT INTO productos(nombreProducto, descripcionProducto, colorProducto, imagen, rutEmpresa, idCategoria) VALUES(?,?,?,?,?,?)",
    [
      nombreProducto,
      descripcionProducto,
      colorProducto,
      imagen,
      rutEmpresa,
      idCategoria,
    ]
  );
  console.log(result);
  res.json({
    nombreProducto,
    descripcionProducto,
    colorProducto,
    imagen,
    rutEmpresa,
    idCategoria,
  });
};

// APARTADO CREAR CATEGORIA

export const createCategoria = async (req, res) => {
  const { nombreCategoria, descripcionCategoria, imagen } = req.body;
  const result = pool.query(
    "INSERT INTO categoria(nombreCategoria, descripcionCategoria, imagen) VALUES(?,?,?)",
    [nombreCategoria, descripcionCategoria, imagen]
  );
  console.log(result);
  res.json({
    nombreCategoria,
    descripcionCategoria,
    imagen,
  });
};

// APARTADO CREAR INF NUTRICIONAL
export const createInf = async (req, res) => {
  const {
    energia,
    proteinas,
    grasaTotal,
    carbohidratos,
    azucaresTotal,
    sodio,
    idProducto,
  } = req.body;
  const result = pool.query(
    "INSERT INTO infNutricional(energia, proteinas, grasaTotal, carbohidratos, azucaresTotal, sodio, idProducto) VALUES(?,?,?,?,?,?,?)",
    [
      energia,
      proteinas,
      grasaTotal,
      carbohidratos,
      azucaresTotal,
      sodio,
      idProducto,
    ]
  );
  console.log(result);
  res.json({
    energia,
    proteinas,
    grasaTotal,
    carbohidratos,
    azucaresTotal,
    sodio,
    idProducto,
  });
};

//-------------------------------------- METODO GET -----------------------------------------------

export const getEmpresa = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM empresa");
  res.json(result[0]);
};

export const getProductos = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM productos")
  res.json(result) 
};

export const getProducto = async (req, res) =>{
  const [result] = await pool.query("SELECT * FROM productos WHERE idProducto = ? ", [req.params.id])
  if(result.length >= 1){
    res.json(result[0])
  }else{
    res.json({
      message : "No se encontro el producto deseado"
    })
  }

}
//-------------------------------------------------------------------------------------------------
