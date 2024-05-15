import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../auth/AuthProvider";

export const NavbarComponent = ({ children }) => {
  const auth = useAuth();
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    fill="#FF6154"
                    d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14"
                  ></path>
                </g>
              </svg>
            </a>
            {auth.isAuthenticated && <input className="search"></input>}
          </div>

          {auth.isAuthenticated ? (
            <div className="menu">
              <ul className="nav-links">
                <li>
                  <Link to="/home">Inicio</Link>
                </li>
                <li>
                  <a href="#">Mis Productos</a>
                </li>
                <li>
                  <Link to="/create-product">Crear Producto</Link>
                </li>
                <li>
                  <a href="#">Contacto</a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="login">
              <ul className="nav-links">
                <li>
                  <Link to="/">login</Link>
                </li>
                <li>
                  <Link to="/signup">SignUp</Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>

      <main>{children}</main>
    </>
  );
};
