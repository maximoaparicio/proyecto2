import { useEffect, useState } from "react";
import axios from "axios";
import ClientesTable from "./ClientesTable";

const ClientesPage = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    getClientes();
  }, []);

  //procedimiento mostrar clientes
  const getClientes = async () => {
    const res = await axios.get(`http://localhost:3000/api/clientes`);
    setClientes(res.data);
  };

  //procedimiento para eliminar un cliente
  //comunicacion entre hijo a padre
  const deleteCliente = async (id) => {
    await axios.delete(`http://localhost:3000/api/clientes/${id}`);
    getClientes();
  };

  return (
    <div>
      <ClientesTable data={clientes} deleteCliente={deleteCliente} />
    </div>
  );
};

export default ClientesPage;
