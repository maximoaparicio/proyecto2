import { useAuth } from "../context/AuthContext";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth();
  return (
    <header>
      <nav>
        <ul>
          {isAuthenticated ? (
            <>
              Bienvenido {user}
              <li>
                <Link to="/" onClick={logout}>
                  Salir
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/registro">Registro</Link>
              </li>
            </>
          )}
        </ul>
        <p>{user}</p>
      </nav>
    </header>
  );
};

export default Header;
