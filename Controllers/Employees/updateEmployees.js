import { pool } from "../../Config/index.js";

export const updateEmployees = async (req, res) => {
  let estadoID = 2
  const {idEmpleado , nombre , apellido , correo , telefono , estado , cargo} = await req.body
  if(estado === 'Disponible'){
    estadoID = 1
  }
  const [rows] = await pool.query(`UPDATE Empleado set NOMBRES = ?,APELLIDOS = ? ,CORREO = ? ,TELEFONO = ? , ID_CARGO = ?, ID_ESTADO = ? WHERE ID_EMPLEADO = ?` , [nombre , apellido , correo , telefono , cargo , estadoID , idEmpleado])
  res.json({ error: null , data: true })
}