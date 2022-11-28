import { TextField } from '@mui/material'
import { AiFillEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export function LoginScreen() {
  return (
    <div>
      <h1>Login</h1>
      <AiFillEye />
      <TextField id="standard-basic" label="E-mail" variant="standard" />

      <button>
        <Link to="/register">Criar conta</Link>
      </button>
    </div>
  )
}
