import { pool } from "../../Config/index.js";

export const getEmployees = async (req, res) => {
  const [rows] = await pool.query(
    `SELECT 	
      E.ID_EMPLEADO , E.NOMBRES , E.APELLIDOS , E.CORREO  , E.TELEFONO , E.PASSWORD , C.NOMBRE as 'CARGO' , ES.NOMBRE  as 'ESTADO' FROM Empleado E 
      JOIN ESTADO ES on ES.ID_ESTADO  = E.ID_ESTADO 
      JOIN CARGO C on C.ID_CARGO = E.ID_CARGO `
    );
  res.json({ Empleado: rows });
}

