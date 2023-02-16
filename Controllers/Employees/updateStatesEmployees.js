import { pool } from "../../Config/index.js";

export const updateStateEmployees = async (req, res) => {
  const data = await req.body
  let id = data.id
  let estado = "2"
  const [rowsSelect] = await pool.query(`SELECT * FROM Empleado WHERE ID_EMPLEADO = ?` , [id])
  if(rowsSelect[0].ID_ESTADO === "2"){
    estado = "1"
  }
  const [rows] = await pool.query(`UPDATE Empleado set ID_ESTADO = ? WHERE ID_EMPLEADO = ?` , [estado , id])
  res.json({ error: null , data: true })
}