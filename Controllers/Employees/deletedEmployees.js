import { pool } from "../../Config/index.js";

export const deletedEmployees = async (req, res) => {
  const { id } = req.body
  const [rows] = await pool.query(`DELETE FROM Empleados WHERE ID_EMPLEADO = ? ` , [id])
  //res.json({ Empleados: rows });
}