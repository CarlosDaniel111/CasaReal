import { Barra } from "../components/ui/Barra";
import { BarraAbajo } from "../components/ui/BarraAbajo";
import perfilFoto from "../assets/perfil.png";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { PropiedadCard } from "../components/PropiedadCard";
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import axios from "axios";
import { constants } from "../constants/constants";


export const ProfilePage = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    centerPadding: "100px",
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    nombre: '',
    correo: '',
    telefono: ''
  });

  useEffect(() => {
    // Obtener datos del usuario
    axios.get(constants.URL_API + '/users', {
      headers: {
        'authentication-token': localStorage.getItem('authentication-token')
      }
    }).then((response) => {
      setUsuario(response.data);
    }).catch((error) => {
      localStorage.removeItem('authentication-token');
      navigate('/login');
    })
  });

  return (
    <>
      <Barra />
      <div className="container mx-auto py-12 text-center px-4 min-h-screen">
        <h2 className="text-4xl text-center font-bold mb-5">Mi perfil</h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="text-center">
            <img src={perfilFoto} alt="Perfil foto" className="w-2/4 mb-3 mx-auto" />
            <p className="text-2xl font-bold mb-2">
              {usuario.nombre}
            </p>
            <p className="text-lg mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              {usuario.correo}
            </p>
            <p className="text-lg mb-2">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              {usuario.telefono}
            </p>
            <Link to={"/post/"}>
              <button className="mt-4 w-1/2 bg-white text-black text-lg font-bold py-2 border-black border-2 hover:bg-black hover:text-white transition duration-300">
                Editar perfil
              </button>
            </Link>
          </div>
          <div className="mt-10 md:mt-0">
            <h2 className="text-3xl text-center font-bold mb-5">Mis propiedades</h2>

            <Slider {...settings}>
              <div className="p-2 text-left">
                <PropiedadCard
                  idPublicacion={1}
                  fotoURL="https://gpvivienda.com/blog/wp-content/uploads/2023/03/ralph-ravi-kayden-mR1CIDduGLc-unsplash-1-1-1024x680.jpg"
                  titulo="Casa en Lomas de Chapultepec"
                  calle="Sierra Candela"
                  numRecamaras={4}
                  superficieTotal={300}
                  precio={3500000}
                  btnVendedor={true}
                />
              </div>
              <div className="p-2 text-left">
                <PropiedadCard
                  idPublicacion={2}
                  fotoURL="https://gpvivienda.com/blog/wp-content/uploads/2023/03/ralph-ravi-kayden-mR1CIDduGLc-unsplash-1-1-1024x680.jpg"
                  titulo="Casa en Lomas de Chapultepec"
                  calle="Sierra Candela"
                  numRecamaras={4}
                  superficieTotal={300}
                  precio={3500000}
                  btnVendedor={true}
                />
              </div>
              <div className="p-2 text-left">
                <PropiedadCard
                  idPublicacion={3}
                  fotoURL="https://gpvivienda.com/blog/wp-content/uploads/2023/03/ralph-ravi-kayden-mR1CIDduGLc-unsplash-1-1-1024x680.jpg"
                  titulo="Casa de tilin"
                  calle="Sierra Candela"
                  numRecamaras={4}
                  superficieTotal={300}
                  precio={3500000}
                  btnVendedor={true}
                />
              </div>
              <div className="p-2 text-left">
                <PropiedadCard
                  idPublicacion={3}
                  fotoURL="https://gpvivienda.com/blog/wp-content/uploads/2023/03/ralph-ravi-kayden-mR1CIDduGLc-unsplash-1-1-1024x680.jpg"
                  titulo="Casa de tilin"
                  calle="Sierra Candela"
                  numRecamaras={4}
                  superficieTotal={300}
                  precio={3500000}
                  btnVendedor={true}
                />
              </div>
            </Slider>

            <Link to={"/post/"}>
              <button className="mt-10 w-1/2 bg-white text-black text-lg font-bold py-2 border-black border-2 hover:bg-black hover:text-white transition duration-300">
                Publicar propiedad
              </button>
            </Link>
          </div>
        </div>
      </div>
      <BarraAbajo />
    </>
  );
}