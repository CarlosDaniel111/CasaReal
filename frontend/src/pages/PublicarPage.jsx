import { Barra } from "../components/ui/Barra";
import { BarraAbajo } from "../components/ui/BarraAbajo";
import { PublicacionCard } from "../components/publicar/PublicacionCard";
import { EspecificacionesCard } from "../components/publicar/EspecificacionesCard";
import { useState } from "react";
import { UbicacionCard } from "../components/publicar/UbicacionCard";
import { PrecioCard } from "../components/publicar/PrecioCard";
import { constants } from '../constants/constants';
import axios from 'axios';

export const PublicarPage = () => {


  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    foto: null,
    fotosCocina: [],
    fotosSala: [],
    fotosComedor: [],
    fotosPatio: [],
    fotosCochera: [],
    fotosRecamara: [],
    fotosBano: [],
    fotosMedioBano: [],
    numRecamaras: '',
    numBanosCompletos: '',
    numMediosBanos: '',
    numAutos: '',
    numPisos: '',
    superficieTotal: '',
    tamPatio: '',
    anosAntiguedad: '',
    precio: '',
    calle: '',
    colonia: '',
    codigoPostal: '',
    ciudad: '',
    estado: '',
    numExterior: '',
    numInterior: null,
    tipo: ''
  });

  const [pagina, setPagina] = useState(1);

  const handlePublicar = async () => {



    const fotos = [];
    let formFoto = new FormData();
    formFoto.append('foto', formData.foto);
    let response = await axios.post(constants.URL_API + '/posts/foto', formFoto, {
      headers: {
        'authentication-token': localStorage.getItem('authentication-token'),
      }
    })
    fotos.push({
      fotoURL: response.data.url,
      lugar: 'principal'
    });

    const subirFotosRecamara = new Promise((resolve, reject) => {
      const res = [];
      formData.fotosRecamara.forEach(async (foto) => {
        let formFoto = new FormData();
        formFoto.append('foto', foto);
        response = await axios.post(constants.URL_API + '/posts/foto', formFoto, {
          headers: {
            'authentication-token': localStorage.getItem('authentication-token'),
            'Content-Type': 'multipart/form-data',
          },
          transformRequest: foto => foto,
        })
        res.push({
          fotoURL: response.data.url,
          lugar: 'recamara'
        });
      });
      resolve(res);
    });

    const fotosRecamara = await subirFotosRecamara;
    fotosRecamara.forEach(foto => {
      fotos.push(foto);
    });

    const subirFotosBano = new Promise((resolve, reject) => {
      const res = [];
      formData.fotosBano.forEach(async (foto) => {
        let formFoto = new FormData();
        formFoto.append('foto', foto);
        response = await axios.post(constants.URL_API + '/posts/foto', formFoto, {
          headers: {
            'authentication-token': localStorage.getItem('authentication-token'),
            'Content-Type': 'multipart/form-data',
          },
          transformRequest: foto => foto,
        })
        res.push({
          fotoURL: response.data.url,
          lugar: 'bano'
        });
      });
      resolve(res);
    });

    const fotosBano = await subirFotosBano;
    fotosBano.forEach(foto => {
      fotos.push(foto);
    });

    const subirFotosMedioBano = new Promise((resolve, reject) => {
      const res = [];
      formData.fotosMedioBano.forEach(async (foto) => {
        let formFoto = new FormData();
        formFoto.append('foto', foto);
        response = await axios.post(constants.URL_API + '/posts/foto', formFoto, {
          headers: {
            'authentication-token': localStorage.getItem('authentication-token'),
            'Content-Type': 'multipart/form-data',
          },
          transformRequest: foto => foto,
        })
        res.push({
          fotoURL: response.data.url,
          lugar: 'medio bano'
        });
      });
      resolve(res);
    });

    const fotosMedioBano = await subirFotosMedioBano;
    fotosMedioBano.forEach(foto => {
      fotos.push(foto);
    });


    const subirFotosCocina = new Promise((resolve, reject) => {
      const res = [];
      formData.fotosCocina.forEach(async (foto) => {
        let formFoto = new FormData();
        formFoto.append('foto', foto);
        response = await axios.post(constants.URL_API + '/posts/foto', formFoto, {
          headers: {
            'authentication-token': localStorage.getItem('authentication-token'),
            'Content-Type': 'multipart/form-data',
          },
          transformRequest: foto => foto,
        })
        res.push({
          fotoURL: response.data.url,
          lugar: 'cocina'
        });
      });
      resolve(res);
    });

    const fotosCocina = await subirFotosCocina;
    fotosCocina.forEach(foto => {
      fotos.push(foto);
    });

    const subirFotosSala = new Promise((resolve, reject) => {
      const res = [];
      formData.fotosSala.forEach(async (foto) => {
        let formFoto = new FormData();
        formFoto.append('foto', foto);
        response = await axios.post(constants.URL_API + '/posts/foto', formFoto, {
          headers: {
            'authentication-token': localStorage.getItem('authentication-token'),
            'Content-Type': 'multipart/form-data',
          },
          transformRequest: foto => foto,
        })
        res.push({
          fotoURL: response.data.url,
          lugar: 'sala'
        });
      });
      resolve(res);
    });

    const fotosSala = await subirFotosSala;
    fotosSala.forEach(foto => {
      fotos.push(foto);
    });

    const subirFotosComedor = new Promise((resolve, reject) => {
      const res = [];
      formData.fotosComedor.forEach(async (foto) => {
        let formFoto = new FormData();
        formFoto.append('foto', foto);
        response = await axios.post(constants.URL_API + '/posts/foto', formFoto, {
          headers: {
            'authentication-token': localStorage.getItem('authentication-token'),
            'Content-Type': 'multipart/form-data',
          },
          transformRequest: foto => foto,
        })
        res.push({
          fotoURL: response.data.url,
          lugar: 'comedor'
        });
      });
      resolve(res);
    });

    const fotosComedor = await subirFotosComedor;
    fotosComedor.forEach(foto => {
      fotos.push(foto);
    });

    const subirFotosPatio = new Promise((resolve, reject) => {
      const res = [];
      formData.fotosPatio.forEach(async (foto) => {
        let formFoto = new FormData();
        formFoto.append('foto', foto);
        response = await axios.post(constants.URL_API + '/posts/foto', formFoto, {
          headers: {
            'authentication-token': localStorage.getItem('authentication-token'),
            'Content-Type': 'multipart/form-data',
          },
          transformRequest: foto => foto,
        })
        res.push({
          fotoURL: response.data.url,
          lugar: 'patio'
        });
      });
      resolve(res);
    });

    const fotosPatio = await subirFotosPatio;
    fotosPatio.forEach(foto => {
      fotos.push(foto);
    });

    const subirFotosCochera = new Promise((resolve, reject) => {
      const res = [];
      formData.fotosCochera.forEach(async (foto) => {
        let formFoto = new FormData();
        formFoto.append('foto', foto);
        response = await axios.post(constants.URL_API + '/posts/foto', formFoto, {
          headers: {
            'authentication-token': localStorage.getItem('authentication-token'),
            'Content-Type': 'multipart/form-data',
          },
          transformRequest: foto => foto,
        })
        res.push({
          fotoURL: response.data.url,
          lugar: 'cochera'
        });
      });
      resolve(res);
    });

    const fotosCochera = await subirFotosCochera;
    fotosCochera.forEach(foto => {
      fotos.push(foto);
    });


    const subir = {
      calle: formData.calle,
      numeroExterior: formData.numExterior,
      numeroInterior: formData.numInterior,
      estado: formData.estado,
      ciudad: formData.ciudad,
      colonia: formData.colonia,
      codigoPostal: formData.codigoPostal,
      referencia: formData.referencias,
      titulo: formData.titulo,
      descripcion: formData.descripcion,
      numRecamaras: formData.numRecamaras,
      numBanosCompletos: formData.numBanosCompletos,
      numMediosBanos: formData.numMediosBanos,
      numAutos: formData.numAutos,
      numPisos: formData.numPisos,
      superficieTotal: formData.superficieTotal,
      tamPatio: formData.tamPatio,
      anosAntiguedad: formData.anosAntiguedad,
      precio: formData.precio,
      tipo: formData.tipo,
      fotos: fotos
    }

    axios.post(constants.URL_API + '/posts/post', subir, {
      headers: {
        'authentication-token': localStorage.getItem('authentication-token')
      }
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    }
    );





  }

  return (
    <>
      <Barra />
      <div className="container mx-auto py-12 px-4 min-h-screen">
        <h2 className="text-xl font-bold mb-2">Publicar propiedad</h2>
        <p className="mb-10">Asegurate de documentar todos los datos de tu propiedad y verifica que sean correctos</p>

        <div className="flex gap-52">
          <ol className="hidden md:block list-decimal">
            <li>Publicación</li>
            <li>Especificaciones y fotos</li>
            <li>Ubicación</li>
            <li>Precio</li>
          </ol>

          <div className="grow md:pr-20">

            {
              pagina === 1 &&
              <PublicacionCard
                formData={formData}
                setFormData={setFormData}
                setPagina={setPagina}
              >
              </PublicacionCard>
            }

            {
              pagina === 2 &&
              <div>
                <EspecificacionesCard
                  formData={formData}
                  setFormData={setFormData}
                  setPagina={setPagina}
                >
                </EspecificacionesCard>
              </div>
            }

            {
              pagina === 3 &&
              <div>
                <UbicacionCard
                  formData={formData}
                  setFormData={setFormData}
                  setPagina={setPagina}
                >
                </UbicacionCard>
              </div>
            }

            {
              pagina === 4 &&
              <div>
                <PrecioCard
                  formData={formData}
                  setFormData={setFormData}
                  setPagina={setPagina}
                  handlePublicar={handlePublicar}
                >
                </PrecioCard>
              </div>
            }
          </div>

        </div>


      </div>
      <BarraAbajo />
    </>
  )
}