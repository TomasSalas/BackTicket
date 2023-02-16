import { createPool } from "mysql2/promise";
import * as dotenv from 'dotenv'
dotenv.config()

export const pool = createPool({
  host: process.env.HOST || 'localhost',
  user: process.env.USERNAME || 'root',
  password: process.env.PASSWORD || 'root' ,
  database: process.env.DATABASE || 'ticketera',
  port: process.env.PORTDB || 3306,
})