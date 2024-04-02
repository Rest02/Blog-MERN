import express from 'express'
import { PORT } from './config.js'
import storeRoutes from './routes/store.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use(storeRoutes)


app.listen(PORT)
console.log(`Server on port ${PORT}`)