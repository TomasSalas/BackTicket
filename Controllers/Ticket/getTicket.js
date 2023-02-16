import { pool } from "../../Config/index.js";

export const getTickets = async (req, res) => {
  const [rows] = await pool.query(
    `SELECT 
    T.ID_TICKET , T.NOMBRE as NOM_TAREA, T.DESCRIPCION , date_format(T.FECHA_INICIO, "%d-%m-%Y") as FECHA_INICIO, 
    date_format(T.FECHA_TERMINO, "%d-%m-%Y") as FECHA_TERMINO, CONCAT(E.NOMBRES, ' ', E.APELLIDOS) as EMPLEADO, ET.NOMBRE  
    FROM TICKET T 
    JOIN EMPLEADO E ON E.ID_EMPLEADO = T.ID_EMPLEADO 
    JOIN ESTADOTICKET ET ON ET.ID_ESTADO = T.ID_ESTADO `
    );
  res.json({ 
    Tickets: rows 
  });
}

