
import { Button, Navbar } from "flowbite-react";
import logo from "../../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function Barra() {

  const [isLogging, setIsLogging] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('authentication-token')) {
      setIsLogging(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authentication-token');
    setIsLogging(false);
    navigate('/');
  }

  return (
    <Navbar fluid rounded>
      <NavLink to="/">
        <Navbar.Brand>
          <img src={logo} className="ml-5 h-6 sm:h-9" alt="CasaReal Logo" />
        </Navbar.Brand>
      </NavLink>
      <div className="flex md:order-2">
        {
          isLogging ? (
            <>
              <Button as={NavLink} to="/perfil" color="blue">
                Mi Perfil
              </Button>
              <Button onClick={handleLogout} className="ml-2 md:ml-5" color="gray">
                Cerrar Sesión
              </Button>
            </>
          ) : (
            <Button as={NavLink} to="/login" color="blue">
              Iniciar Sesión
            </Button>
          )
        }
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink className="md:font-bold md:text-lg" to="/">
          Inicio
        </NavLink>
        <NavLink className="md:font-bold md:text-lg" to="/propiedades">Propiedades</NavLink>
        <NavLink className="md:font-bold md:text-lg" to="/mapa">Mapa</NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
}
