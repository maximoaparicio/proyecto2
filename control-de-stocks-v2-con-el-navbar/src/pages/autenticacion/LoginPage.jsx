import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, Navigate, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [usuarios, setUsuarios] = useState({
    username: "",
    contrasenia: "",
  });

  const { signin } = useAuth();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUsuarios({
      ...usuarios,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signin(usuarios);
    navigate("/");
  };

  return (
    <div>
      <h1>Login</h1>
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

        <button type="submit">Login</button>
      </form>
      <p>
        Aun no tienes una cuenta? <Link to="/registro">Registrate!</Link>
      </p>
    </div>
  );
};

export default LoginPage;
