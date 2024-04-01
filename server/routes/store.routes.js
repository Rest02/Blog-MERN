import {Router} from 'express'

const router = Router()


router.get("/store")

router.get("/store/:id")

router.post("/store")

router.put("/store/:id")

router.delete("/store/:id")


export default router
