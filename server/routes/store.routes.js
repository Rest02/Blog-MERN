import {Router} from 'express'
import { createEmpresa } from '../controllers/store.controllers.js'

const router = Router()


router.get("/store")

router.get("/store/:id")

router.post("/empresa"  , createEmpresa)

router.put("/store/:id")

router.delete("/store/:id")


export default router
