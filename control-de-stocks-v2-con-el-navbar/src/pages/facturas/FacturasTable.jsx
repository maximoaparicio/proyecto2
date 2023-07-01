import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const FacturasTable = ({ data, deleteFactura }) => {
  return (
    <div>
      <Link to="./new" className="btn btn-primary mt-2 mb-2">
        Crear
      </Link>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nº Factura</th>
            <th>Cliente</th>
            <th>Apellido</th>
            <th>Tipo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <tr key={el.factura_id}>
              <td>{el.factura_id}</td>
              <td>{el.cliente}</td>
              <td>{el.apellido}</td>
              <td>{el.tipo}</td>
              <td>
                <Link to={`./edit/${el.factura_id}`}>
                  <button>Editar</button>
                </Link>
                <button onClick={() => deleteFactura(el.factura_id)}>
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

export default FacturasTable;
