import {Router} from 'express'
import { createEmpresa, createCategoria, createProducto, createInf, getEmpresa, getProductos, getProducto, deleteProducto} from '../controllers/store.controllers.js'

const router = Router()

// ------------------------------------------------  METODOS POST -----------------------------------------------

// ------------- CREAR EMPRESA - RUTA ------------

router.post("/empresa"  , createEmpresa)

//------------------------------------------------

// -------- CREAR CATEGORIA Y PRODUCTO -----------
router.post("/productos/categoria", createCategoria)

router.post("/productos", createProducto)
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






export default router
