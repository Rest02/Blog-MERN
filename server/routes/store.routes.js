import {Router} from 'express'
import { createEmpresa, createCategoria, createProducto } from '../controllers/store.controllers.js'

const router = Router()

// ------------- CREAR EMPRESA - RUTA ------------

router.post("/empresa"  , createEmpresa)

//------------------------------------------------

// -------- CREAR CATEGORIA Y PRODUCTO -----------
router.post("/productos/categoria", createCategoria)

router.post("/productos", createProducto)
// -----------------------------------------------




router.get("/store")

router.get("/store/:id")


router.put("/store/:id")

router.delete("/store/:id")


export default router
