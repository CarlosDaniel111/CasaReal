import { Barra } from "../components/ui/Barra";
import { BarraAbajo } from "../components/ui/BarraAbajo";

export const MapaPage = () => {
  return (
    <>
      <Barra />
      <div className="container mx-auto py-12 text-center px-4 min-h-screen">
        <h2 className="text-4xl font-bold mb-2">Mapa</h2>
        <p>Encuentra tu vivienda ideal</p>
      </div>
      <BarraAbajo />
    </>
  );
}