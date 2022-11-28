import { Link } from 'react-router-dom'
import { CustomTable } from '../../components/CustomTable/CustomTable'

export function RegisterScreen() {
  return (
    <div>
      <h1>Register</h1>
      <CustomTable
        columns={[
          { field: 'id', headerName: 'ID', width: 70, type: 'number' },
          { field: 'firstName', headerName: 'First name', width: 130 },
          { field: 'lastName', headerName: 'Last name', width: 130 },
        ]}
        data={[
          { id: 1, lastName: 'Snow', firstName: 'Jon' },
          { id: 2, lastName: 'Lannister', firstName: 'Cersei' },
          { id: 3, lastName: 'Lannister', firstName: 'Jaime' },
        ]}
      />
      <button>
        <Link to="/">Entrar</Link>
      </button>
    </div>
  )
}
