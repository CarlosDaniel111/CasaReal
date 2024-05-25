import { Barra } from "../components/ui/Barra";
import { BarraAbajo } from "../components/ui/BarraAbajo";
import { PropiedadCard } from "../components/PropiedadCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export const PropiedadesPage = () => {
  return (
    <>
      <Barra />
      <div className="container mx-auto py-12 px-4 min-h-screen">
        <h2 className="text-4xl text-center font-bold mb-5">Propiedades Disponibles</h2>
        <button className="flex items-center border rounded-lg px-4 py-2 bg-white mb-5 hover:bg-gray-100">
          <FontAwesomeIcon icon={faFilter} className="mr-2" />
          Filtros
          <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <PropiedadCard
            idPublicacion={1}
            fotoURL="https://gpvivienda.com/blog/wp-content/uploads/2023/03/ralph-ravi-kayden-mR1CIDduGLc-unsplash-1-1-1024x680.jpg"
            titulo="Casa en Lomas de Chapultepec"
            calle="Sierra Candela"
            numRecamaras={4}
            superficieTotal={300}
            precio={3500000}
          />
          <PropiedadCard
            idPublicacion={2}
            fotoURL="https://gpvivienda.com/blog/wp-content/uploads/2023/03/ralph-ravi-kayden-mR1CIDduGLc-unsplash-1-1-1024x680.jpg"
            titulo="Casa en Lomas de Chapultepec"
            calle="Sierra Candela"
            numRecamaras={4}
            superficieTotal={300}
            precio={3500000}
          />
          <PropiedadCard
            idPublicacion={3}
            fotoURL="https://gpvivienda.com/blog/wp-content/uploads/2023/03/ralph-ravi-kayden-mR1CIDduGLc-unsplash-1-1-1024x680.jpg"
            titulo="Casa en Lomas de Chapultepec"
            calle="Sierra Candela"
            numRecamaras={4}
            superficieTotal={300}
            precio={3500000}
          />
        </div>
      </div>
      <BarraAbajo />
    </>
  );
}