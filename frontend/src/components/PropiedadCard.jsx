import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBed, faExpandArrowsAlt, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const PropiedadCard = ({ idPublicacion, fotoURL, titulo, calle, numRecamaras, superficieTotal, precio, btnVendedor = false }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden">
      <img src={fotoURL} alt={titulo} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{titulo}</h3>
        <p className="text-gray-700 mb-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> {calle}
        </p>
        <p className="text-gray-700 mb-2">
          <FontAwesomeIcon icon={faBed} className="mr-2" /> {numRecamaras} recámaras
        </p>
        <p className="text-gray-700 mb-2">
          <FontAwesomeIcon icon={faExpandArrowsAlt} className="mr-2" /> {superficieTotal} m2
        </p>
        <p className="text-gray-700 mb-2">
          <FontAwesomeIcon icon={faDollarSign} className="mr-2" /> {precio} pesos
        </p>
        <Link to={"/post/" + idPublicacion}>
          <button className="mt-4 w-full bg-white text-black text-lg font-bold py-2 border-black border-2 hover:bg-black hover:text-white transition duration-300">
            Ver Más
          </button>
        </Link>
        {btnVendedor ?
          <Link to={"/post/" + idPublicacion}>
            <button className="mt-4 w-full bg-white text-black text-lg font-bold py-2 border-black border-2 hover:bg-black hover:text-white transition duration-300">
              Solicitar vendedor
            </button>
          </Link>
          : null
        }

      </div>
    </div>
  );
};