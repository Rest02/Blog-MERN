import {Router} from 'express'
import { createEmpresa, createCategoria, createProducto, createInf, getEmpresa, getProductos, getProducto, deleteProducto, updateProducto, updateInfNutricional, updateCategoria, getCategoria, getOneProduct, getInfNutricional, getOneCategoria, deleteCategoria, comparativa, comparativaInfNutricional} from '../controllers/store.controllers.js'
import { upload } from '../multer.js'
const router = Router()

// ------------------------------------------------  METODOS POST -----------------------------------------------

// ------------- CREAR EMPRESA - RUTA ------------

router.post("/empresa", upload.single("photo"), createEmpresa)

//------------------------------------------------

// -------- CREAR CATEGORIA Y PRODUCTO -----------
router.post("/Crearcategoria", upload.single("imagen"), createCategoria)

router.post("/productos", upload.single("imagen"), createProducto)
// -----------------------------------------------


// ---------CREAR INFORMACION NUTRICIONAL ---------

router.post("/infnutri/:id", createInf)

//--------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------


// -------------------------------------------------  METODOS GET -------------------------------------------------

router.get("/empresa", getEmpresa)

router.get("/categorias", getCategoria)

router.get("/productos", getProductos) 

router.get("/producto/:id", getOneProduct)

router.get("/productos/:id", getInfNutricional)

router.get("/productos/:id", getProducto) // MAS LA INF NUTRICIONAL

router.get("/onecategoria/:id", getOneCategoria)

// ----------------------------------------------------------------------------------------------------------------

// ------------------------------------------------ METODOS DELETE ------------------------------------------------

router.delete("/productos/opciones/:id", deleteProducto)

router.delete("/categoria/:id", deleteCategoria)

// ----------------------------------------------------------------------------------------------------------------

// ------------------------------------------------ METODOS PUT ---------------------------------------------------


router.put("/productos/update/:id", upload.single("imagen"), updateProducto)
router.put("/infNutricional/:id", updateInfNutricional)
router.put("/categoria/:id", upload.single("imagen"), updateCategoria)




// ----------------------------------------------------------------------------------------------------------------




router.get("/comparativa/:id1/:id2", comparativa)
router.get("/comparativaInf/:id1/:id2", comparativaInfNutricional)




export default router
