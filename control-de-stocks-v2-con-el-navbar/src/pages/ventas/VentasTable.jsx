import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const VentasTable = ({ data, deleteVenta }) => {
  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", options);
  };
  return (
    <div>
      <Link to="./new" className="btn btn-primary mt-2 mb-2">
        Crear
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Producto</th>
            <th>Fecha</th>
            <th>Cantidad Comprada</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elemento) => (
            <tr key={elemento.venta_id}>
              <td>{elemento.cliente_nombre}</td>
              <td>{elemento.producto_nombre}</td>
              <td>{formatDate(elemento.fecha)}</td>
              <td>{elemento.cantidad}</td>
              <td>
                <Link to={`./edit/${elemento.venta_id}`}>
                  {/* <button className="btn btn-success">
                    <FontAwesomeIcon icon={faPencil} size="xl" />
                  </button> */}
                </Link>
                <button
                  onClick={() => deleteVenta(elemento.venta_id)}
                  className="btn btn-danger ms-2"
                ></button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default VentasTable;
