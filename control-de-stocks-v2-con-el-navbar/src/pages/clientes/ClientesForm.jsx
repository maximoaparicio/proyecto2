import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const ClientesForm = () => {
  const [clientes, setClientes] = useState({
    nombre: "",
    dni: "",
    correo: "",
    direccion: "",
  });

  useEffect(() => {
    getClienteById();
  }, []);

  const { id } = useParams();

  const navigate = useNavigate();

  const getClienteById = async () => {
    try {
      if (id) {
        const res = await axios.get(`http://localhost:3000/api/clientes/${id}`);
        setClientes({
          nombre: res.data.nombre,
          dni: res.data.dni,
          correo: res.data.correo,
          direccion: res.data.direccion,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setClientes({
      ...clientes,
      [e.target.name]: e.target.value,
    });
  };

  const notifyAdd = () => {
    toast.success("Cliente Agregado!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const notifyUpdate = () => {
    toast.success("Cliente Actualizado!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        const res = await axios.patch(
          `http://localhost:3000/api/clientes/${id}`,
          clientes
        );
        navigate("/clientes");
        notifyUpdate();
      } else {
        const res = await axios.post(
          "http://localhost:3000/api/clientes",
          clientes
        );
        navigate("/clientes");
        notifyAdd();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h3>{id ? "Editar Cliente" : "Crear Cliente"}</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="nombre">
            Nombre:
          </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            value={clientes.nombre}
            onChange={handleChange}
            className="form-control"
          />
          <label className="form-label" htmlFor="dni">
            DNI:
          </label>
          <input
            type="text"
            name="dni"
            id="dni"
            value={clientes.dni}
            onChange={handleChange}
            className="form-control"
          />
          <label className="form-label" htmlFor="correo">
            Correo:
          </label>
          <input
            type="text"
            name="correo"
            id="correo"
            value={clientes.correo}
            onChange={handleChange}
            className="form-control"
          />
          <label className="form-label" htmlFor="direccion">
            Direccion:
          </label>
          <input
            type="text"
            name="direccion"
            id="direccion"
            value={clientes.direccion}
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

export default ClientesForm;
