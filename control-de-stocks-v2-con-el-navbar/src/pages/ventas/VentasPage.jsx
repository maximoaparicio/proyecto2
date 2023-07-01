import { useState, useEffect } from "react";
import axios from "axios";
import VentasTable from "./VentasTable";

const VentasPage = () => {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    getVentas();
  }, []);

  const getVentas = async () => {
    const res = await axios.get("http://localhost:3000/api/ventasjoin");
    setVentas(res.data);
  };

  const deleteVenta = async (id) => {
    await axios.delete(`http://localhost:3000/api/ventas/${id}`);
    getVentas();
  };

  return (
    <div>
      <h1>Lista de Ventas realizadas</h1>
      <VentasTable data={ventas} deleteVenta={deleteVenta} />
    </div>
  );
};

export default VentasPage;
