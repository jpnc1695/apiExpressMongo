import express from "express";
import db from './config/dbConnect.js'
import cors from 'cors'
import routes from './routes/index.js'
require('dotenv').config()


db.on("error", console.log.bind(console, 'erro de conexão'))
db.once("open", ()=> {
  console.log('conexão com o Banco realizada com sucesso')
})

const app = express();
app.use(cors())
app.use(express.json())
routes(app)

export default app