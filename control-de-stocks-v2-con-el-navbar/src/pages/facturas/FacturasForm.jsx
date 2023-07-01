import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const FacturasForm = () => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/clientes")
      .then((data) => setOptions(data.data))
      .catch((error) => console.log(error));
  }, []);

  // console.log(options);
  const [facturas, setFacturas] = useState({
    cliente: "",
    tipo: "",
  });

  useEffect(() => {
    getFacturasById();
  }, []);

  const { id } = useParams();

  const navigate = useNavigate();

  const getFacturasById = async () => {
    try {
      if (id) {
        const res = await axios.get(
          `http://localhost:3000/api/facturasj/${id}`
        );
        setFacturas({
          cliente: res.data.cliente,
          tipo: res.data.tipo,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFacturas({
      ...facturas,
      [e.target.name]: e.target.value,
    });
  };

  const notifyAdd = () => {
    toast.success("Factura Agregada!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const notifyUpdate = () => {
    toast.success("Factura Actualizada!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        const res = await axios.patch(
          `http://localhost:3000/api/facturas/${id}`,
          facturas
        );
        navigate("/facturas");
        notifyUpdate();
      } else {
        const res = await axios.post(
          "http://localhost:3000/api/facturas",
          facturas
        );
        navigate("/facturas");
        notifyAdd();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h3>{id ? "Editar Factura" : "Crear Factura"}</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="Cliente">
            Cliente:
          </label>
          <select
            name="cliente"
            onChange={handleChange}
            className="form-control"
          >
            {options.map((option) => (
              <option key={option.cliente_id} value={option.cliente_id}>
                {option.nombre}
              </option>
            ))}
          </select>
          <label className="form-label" htmlFor="tipo">
            Tipo:
          </label>
          <input
            type="text"
            name="tipo"
            id="tipo"
            value={facturas.tipo}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FacturasForm;
