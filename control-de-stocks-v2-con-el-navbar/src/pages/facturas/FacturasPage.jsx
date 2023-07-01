import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import FacturasTable from "./FacturasTable";

const FacturasPage = () => {
  const [facturas, setFacturas] = useState([]);

  useEffect(() => {
    getFacturas();

    return () => {};
  }, []);

  const notifyDelete = () => {
    toast.success("Factura Eliminada!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const getFacturas = async () => {
    const res = await axios.get("http://localhost:3000/api/facturasj");
    setFacturas(res.data);
  };

  const deleteFactura = async (id) => {
    await axios.delete(`http://localhost:3000/api/facturas/${id}`);
    getFacturas();
    notifyDelete();
  };

  return (
    <div>
      <FacturasTable data={facturas} deleteFactura={deleteFactura} />
    </div>
  );
};

export default FacturasPage;
