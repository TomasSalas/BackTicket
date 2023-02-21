import { pool } from "../../Config/index.js";
import uniqid from 'uniqid';

export const addTicket = async (req, res) => {
  const Id = uniqid().toUpperCase()

  const { Nombre , Descripcion , Empleado , Estado ,  FechaInicio , FechaTermino } = req.body
  const [rows] = await pool.query(
    'INSERT INTO TICKET (ID_TICKET, NOMBRE, DESCRIPCION, FECHA_INICIO, FECHA_TERMINO, ID_EMPLEADO, ID_ESTADO) VALUES(?,?,?,?,?,?,?)',
    [Id , Nombre, Descripcion , FechaInicio , FechaTermino , Empleado , Estado])
  res.json('OK');
}
