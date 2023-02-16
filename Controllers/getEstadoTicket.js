import { pool } from "../Config/index.js";

export const getEstadoTicket = async (req, res) => {
  const [rows] = await pool.query(`SELECT  * FROM ESTADOTICKET`);
  res.json({ EstadoTicket: rows });
}

