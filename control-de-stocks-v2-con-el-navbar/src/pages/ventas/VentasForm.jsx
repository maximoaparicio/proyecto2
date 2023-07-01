import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const VentasForm = () => {
  const [ventas, setVentas] = useState({
    cliente: "",
    producto: "",
    fecha: "", // ARREGLAR ESTO
    cantidad: "",
  });

  const navigate = useNavigate();

  const { id } = useParams();

  const [optionsClientes, setOptionsClientes] = useState([]);
  const [optionsProductos, setOptionsProductos] = useState([]);

  useEffect(() => {
    const getVentas = async () => {
      const res = await axios.get("http://localhost:3000/api/ventas");
    };
    getVentas();
  }, []);

  useEffect(() => {
    const getClientes = async () => {
      const res = await axios.get("http://localhost:3000/api/clientes");
      setOptionsClientes(res.data);
    };
    getClientes();
  }, []);

  useEffect(() => {
    const getProductos = async () => {
      const res = await axios.get("http://localhost:3000/api/productos");
      setOptionsProductos(res.data);
    };
    getProductos();
  }, []);

  const handleChange = (e) => {
    setVentas({
      ...ventas,
      [e.target.name]: e.target.value,
    });
  };

  const restarStock = async (producto, cantidad) => {
    try {
      const res = await axios.post(
        `http://localhost:3000/api/sp_restar_stock`,
        {
          producto,
          cantidad,
        }
      );

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/api/ventas", ventas);
      restarStock(ventas.producto, ventas.cantidad);
      navigate("/ventas");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>{id ? "Editar Venta" : "Crear Venta"}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cliente">Clientes:</label>
        <select name="cliente" onChange={handleChange} className="form-control">
          <option value="">----</option>
          {optionsClientes.map((option, index) => (
            <option key={index} value={option.cliente_id}>
              {option.nombre}
            </option>
          ))}
        </select>
        <label htmlFor="producto">Productos</label>
        <select
          name="producto"
          id="producto"
          onChange={handleChange}
          className="form-control"
        >
          <option value="">----</option>
          {optionsProductos.map((option) => (
            <option key={option.producto_id} value={option.producto_id}>
              {option.nombre}
            </option>
          ))}
        </select>
        <label htmlFor="cantidad">Cantidad:</label>
        <input
          type="number"
          name="cantidad"
          id="cantidad"
          value={ventas.cantidad}
          onChange={handleChange}
          className="form-control"
        />
        <button type="submit" className="btn btn-warning mt-2">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default VentasForm;
