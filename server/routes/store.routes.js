import {Router} from 'express'
import { createEmpresa, createCategoria } from '../controllers/store.controllers.js'

const router = Router()


router.post("/empresa"  , createEmpresa)

router.post("/productos/categoria", createCategoria)

router.get("/store")

router.get("/store/:id")


router.put("/store/:id")

router.delete("/store/:id")


export default router
