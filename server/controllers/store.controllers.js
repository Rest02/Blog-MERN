import { query } from "express";
import { pool } from "../db.js";
import { upload } from "../multer.js";
import router from "../routes/store.routes.js";

//------------------------------------- METODOS POST --------------------------------------------

// APARTADO CREAR EMPRESA

export const createEmpresa = async (req, res) => {
  try {
    const { filename } = req.file;
    const {
      rutEmpresa,
      nombreEmpresa,
      descripcionEmpresa,
      fundador,
      nacionalidad,
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
        filename,
        lema,
      ]
    );
    console.log(result);
    res.json({
      rutEmpresa: result.rutEmpresa,
      nombreEmpresa,
      descripcionEmpresa,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

// APARTADO CREAR PRODUCTO
export const createProducto = async (req, res) => {
  // try {
  const rutEmpresa = 211251026;
  const { filename } = req.file;
  const { nombreProducto, descripcionProducto, colorProducto, idCategoria } =
    req.body;

  const result = await pool.query(
    "INSERT INTO productos(nombreProducto, descripcionProducto, colorProducto, imagen, rutEmpresa, idCategoria) VALUES(?,?,?,?,?,?)",
    [
      nombreProducto,
      descripcionProducto,
      colorProducto,
      filename,
      rutEmpresa,
      idCategoria,
    ]
  );
  console.log(result);
  res.json({
    nombreProducto,
    descripcionProducto,
    colorProducto,
    filename,
    rutEmpresa,
    idCategoria,
  });
  // } catch (error) {
  //   return res.status(404).json({
  //     message: error.message,
  //   });
  // }
};

// APARTADO CREAR CATEGORIA

export const createCategoria = async (req, res) => {
  try {
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
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

// APARTADO CREAR INF NUTRICIONAL

export const createInf = async (req, res) => {
  // try {
    const { id } = req.params;
    console.log(id);
    const {
      energia,
      proteinas,
      grasaTotal,
      carbohidratos,
      azucaresTotal,
      sodio,
    } = req.body;
    const result = pool.query(
      "INSERT INTO infNutricional(energia, proteinas, grasaTotal, carbohidratos, azucaresTotal, sodio, idProducto) VALUES(?,?,?,?,?,?,?)",
      [energia, proteinas, grasaTotal, carbohidratos, azucaresTotal, sodio, id]
    );
    console.log(result);
    res.json({
      energia,
      proteinas,
      grasaTotal,
      carbohidratos,
      azucaresTotal,
      sodio,
      id,
    });
  // } catch (error) {
  //   return res.status(404).json({
  //     message: error.message,
  //   });
  // }
};

//-------------------------------------- METODO GET -----------------------------------------------

export const getEmpresa = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM empresa");
    res.json(result);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

export const getProductos = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM productos");
    res.json(result);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

export const getInfNutricional = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM infNutricional WHERE idProducto = ?",[req.params.id])
  res.json(result)
  console.log(result)
}

export const getOneProduct = async (req, res) => {
  // try {
    const [result] = await pool.query("SELECT * FROM productos where idProducto = ?", [
      req.params.id,
    ]);
    res.json(result);
    console.log(result)
  // } catch (error) {
  //   return res.status(400).json({
  //     message: error.message,
  //   });
  // }
};

export const getProducto = async (req, res) => {
  try {
    const idProducto = req.params.id;
    const query = `
      SELECT p.*, i.*
      FROM productos p
      JOIN infNutricional i ON p.idProducto = i.idProducto
      WHERE p.idProducto = ?
    `;
    const [result] = await pool.query(query, [idProducto]);

    if (result) {
      res.json(result);
      console.log(result[0]);
    } else {
      res.status(404).json({
        message: "No se encontro el producto deseado",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Hubo un error al procesar la solicitud",
      error: error.message,
    });
  }
};

export const getCategoria = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM categoria");
    res.json(result);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
//-------------------------------------------------------------------------------------------------

//------------------------------------ METODO DELETE ----------------------------------------------

export const deleteProducto = async (req, res) => {
  try {
    console.log(req.params.id);
    const [result] = await pool.query(
      "DELETE FROM productos WHERE idProducto = ?",
      [req.params.id]
    );
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "Producto no encontrado en la base de datos" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

//-------------------------------------------------------------------------------------------------

//------------------------------------- METODO PUT ------------------------------------------------

export const updateProducto = async (req, res) => {
  try {
    let filename;
    if (req.file) {
      filename = req.file.filename; // Si la imagen se actualiza
    }

    const { nombreProducto, descripcionProducto, colorProducto, idCategoria } =
      req.body;

    let updateFields = {
      nombreProducto,
      descripcionProducto,
      colorProducto,
      idCategoria,
    };

    if (filename) {
      updateFields.imagen = filename;
    }

    const [result] = await pool.query(
      "UPDATE productos SET ? WHERE idProducto = ?",
      [updateFields, req.params.id]
    );

    res.json(result);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

export const updateInfNutricional = async (req, res) => {
  try {
    const [result] = await pool.query(
      "UPDATE infNutricional SET ? WHERE idInfNutricional = ?",
      [req.body, req.params.id]
    );
    res.json(result);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

export const updateCategoria = async (req, res) => {
  try {
    const [result] = await pool.query(
      "UPDATE categoria SET ? WHERE idCategoria = ?",
      [req.body, req.params.id]
    );

    res.json(result);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

//-------------------------------------------------------------------------------------------------
