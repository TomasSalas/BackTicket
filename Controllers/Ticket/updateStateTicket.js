import { pool } from "../../Config/index.js";

export const updateStateTicket = async (req, res) => {
  console.log('reqBody' , req.body)
  const { idTicket , Estado} = req.body
  const [rows] = 
  await pool.query(`UPDATE TICKET set ID_ESTADO = ? WHERE ID_TICKET = ?` , [Estado , idTicket])
  res.json({ error: null , data: true })
}