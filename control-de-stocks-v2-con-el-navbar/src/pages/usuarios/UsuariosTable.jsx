import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const UsuariosTable = ({ data, deleteUsuario }) => {
  return (
    <div>
      <Link to="./new" className="btn btn-primary mt-2 mb-2">
        Crear
      </Link>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Username</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elemento) => (
            <tr key={elemento.usuario_id}>
              <td>{elemento.username}</td>
              <td>{elemento.rol}</td>
              <td>
                <Link to={`./edit/${elemento.usuario_id}`}>
                  <button>Editar</button>
                </Link>
                <button onClick={() => deleteUsuario(elemento.usuario_id)}>
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UsuariosTable;
