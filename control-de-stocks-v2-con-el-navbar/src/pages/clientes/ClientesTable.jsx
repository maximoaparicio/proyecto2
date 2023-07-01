import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const ClientesTable = ({ data, deleteCliente }) => {
  return (
    <div>
      <Link to="./new" className="btn btn-primary mt-2 mb-2">
        Crear
      </Link>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>DNI</th>
            <th>Correo</th>
            <th>Direccion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elemento) => (
            <tr key={elemento.cliente_id}>
              <td>{elemento.nombre}</td>
              <td>{elemento.dni}</td>
              <td>{elemento.correo}</td>
              <td>{elemento.direccion}</td>
              <td>
                <Link to={`./edit/${elemento.cliente_id}`}>
                  <button>Editar</button>
                </Link>
                <button onClick={() => deleteCliente(elemento.cliente_id)}>
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

export default ClientesTable;
