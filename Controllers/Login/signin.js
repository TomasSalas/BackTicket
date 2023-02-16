import { pool } from "../../Config/index.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const signToken = (user) => {
  const payload = {
    sub: user.ID_EMPLEADO,
    role: user.ID_CARGO
  }
  let token = jwt.sign( payload, process.env.SECRET_TOKEN , { expiresIn: "600s"})
  return { user , token }
}

export const signin = async (req, res) => {
  const { email , password } = req.body;
  try {
    const [rows] = await pool.query(`SELECT  * FROM EMPLEADO WHERE CORREO = ?` , [email]);
    if(rows.length === 0){
      return res.json({error: 'error'})
    }
  
    let isMatch = await bcrypt.compare( password , rows[0].PASSWORD )
    if(!isMatch){
      return res.json({error: 'password mismatch'})
    }
    let user = rows[0]
    return res.json({error: null , loginMatch: signToken(user)})
  }
  catch (err) {
    return res.json({error: 'err'})
  }

}

