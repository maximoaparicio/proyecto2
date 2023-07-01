import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const UsuariosForm = () => {
  const [usuarios, setUsuarios] = useState({
    username: "",
    contrasenia: "",
    rol: "",
  });

  useEffect(() => {
    getUsuariosById();
  }, []);

  const { id } = useParams();

  const navigate = useNavigate();

  const getUsuariosById = async () => {
    try {
      if (id) {
        const res = await axios.get(`http://localhost:3000/api/usuarios/${id}`);
        setUsuarios({
          username: res.data.username,
          contrasenia: res.data.contrasenia,
          rol: res.data.rol,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setUsuarios({
      ...usuarios,
      [e.target.name]: e.target.value,
    });
  };

  const notifyAdd = () => {
    toast.success("Usuario Agregado!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const notifyUpdate = () => {
    toast.success("Usuario Actualizado!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        const res = await axios.patch(
          `http://localhost:3000/api/usuarios/${id}`,
          usuarios
        );
        navigate("/usuarios");
        notifyUpdate();
      } else {
        const res = await axios.post(
          "http://localhost:3000/api/usuarios",
          usuarios
        );
        navigate("/usuarios");
        notifyAdd();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h3>{id ? "Editar Usuario" : "Crear Usuario"}</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={usuarios.username}
            onChange={handleChange}
            className="form-control"
          />
          <label className="form-label" htmlFor="contrasenia">
            Password:
          </label>
          <input
            type="password"
            name="contrasenia"
            id="contrasenia"
            value={usuarios.contrasenia}
            onChange={handleChange}
            className="form-control"
          />
          <label className="form-label" htmlFor="rol">
            Rol:
          </label>
          <input
            type="text"
            name="rol"
            id="rol"
            value={usuarios.rol}
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

export default UsuariosForm;
