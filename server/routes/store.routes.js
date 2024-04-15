import {Router} from 'express'
import { createEmpresa, createCategoria, createProducto, createInf, getEmpresa, getProductos, getProducto, deleteProducto, updateProducto, updateInfNutricional, updateCategoria} from '../controllers/store.controllers.js'
import { upload } from '../multer.js'
const router = Router()

// ------------------------------------------------  METODOS POST -----------------------------------------------

// ------------- CREAR EMPRESA - RUTA ------------

router.post("/empresa"  , createEmpresa)

//------------------------------------------------

// -------- CREAR CATEGORIA Y PRODUCTO -----------
router.post("/productos/categoria", createCategoria)

router.post("/productos", upload.single("photo"), createProducto)
// -----------------------------------------------


// ---------CREAR INFORMACION NUTRICIONAL ---------

router.post("/productos/infnutri", createInf)

//--------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------


// -------------------------------------------------  METODOS GET -------------------------------------------------

router.get("/empresa", getEmpresa)

router.get("/productos", getProductos) 

router.get("/productos/:id", getProducto) // MAS LA INF NUTRICIONAL

// ----------------------------------------------------------------------------------------------------------------

// ------------------------------------------------ METODOS DELETE ------------------------------------------------

router.delete("/productos/opciones/:id", deleteProducto)

// ----------------------------------------------------------------------------------------------------------------

// ------------------------------------------------ METODOS PUT ---------------------------------------------------


router.put("/productos/update/:id", updateProducto)
router.put("/infNutricional/update/:id", updateInfNutricional)
router.put("/categoria/update/:id", updateCategoria)




// ----------------------------------------------------------------------------------------------------------------


export default router
