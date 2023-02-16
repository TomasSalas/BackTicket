import { pool } from "../Config/index.js";

export const getCargo = async (req, res) => {
  const [rows] = await pool.query(
      `SELECT  * FROM CARGO`
    );
  res.json({ Cargo: rows });
}

