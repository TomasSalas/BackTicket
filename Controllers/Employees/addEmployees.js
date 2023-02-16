import { pool } from "../../Config/index.js";
import uniqid from 'uniqid';
import bcrypt from 'bcrypt'

export const addEmployees = async (req, res) => {
  const Id = uniqid().toUpperCase()
  const { Nombre , Apellidos , Correo , Telefono ,  Cargo } = req.body
  const Password = await (await bcrypt.hash(`${Nombre.toUpperCase()}${Telefono.substr(-4)}`.split(" ").join("") , 10))
  const Estado = 1

  try {
    const [rows] = await pool.query(
      'INSERT INTO Empleado (ID_EMPLEADO, NOMBRES, APELLIDOS, CORREO, TELEFONO, PASSWORD, ID_CARGO, ID_ESTADO) VALUES (?,?,?,?,?,?,?,?)',
      [Id , Nombre, Apellidos , Correo , Telefono , Password , Cargo , Estado])

    res.json('OK');
  }catch(e){
    res.json(e.code)
  }
}
