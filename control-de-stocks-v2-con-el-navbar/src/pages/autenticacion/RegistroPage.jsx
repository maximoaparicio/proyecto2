import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const RegistroPage = () => {
  const { signup, isAuthenticated } = useAuth();

  const [usuarios, setUsuarios] = useState({
    username: "",
    contrasenia: "",
    rol: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  const handleChange = (e) => {
    setUsuarios({
      ...usuarios,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(usuarios);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="maximo514"
          onChange={handleChange}
          value={usuarios.username}
          required
        />
        <input
          type="password"
          name="contrasenia"
          onChange={handleChange}
          value={usuarios.contrasenia}
          required
          placeholder="1234"
        />
        <input
          type="text"
          name="rol"
          onChange={handleChange}
          value={usuarios.rol}
          required
        />
        <button type="submit">Registrar</button>
      </form>
      <p>
        Ya tienes una cuenta? <Link to="/login">Logeate!</Link>
      </p>
    </div>
  );
};

export default RegistroPage;
