import express from 'express';
import * as dotenv from 'dotenv'
dotenv.config()
import routes from './Routes/index.js'
import cors from 'cors'
const app = express();
const port = process.env.PORT || 1313

app.use(cors())
app.use(routes)
app.listen(port , () => {}) 