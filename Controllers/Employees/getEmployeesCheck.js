import { pool } from "../../Config/index.js";

export const getEmployeesCheck = async (req, res) => {
  const [rows] = await pool.query(
    `SELECT 	
    E.ID_EMPLEADO , CONCAT(E.NOMBRES , ' ' ,E.APELLIDOS) AS NOMBRE
    FROM Empleado E 
    JOIN Estado ES on ES.ID_ESTADO  = E.ID_ESTADO 
    JOIN Cargo C on C.ID_CARGO = E.ID_CARGO
    WHERE E.ID_ESTADO = '1'
    `
  );
  res.json({ Empleado: rows });
}

