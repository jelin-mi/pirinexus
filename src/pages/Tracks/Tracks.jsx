import "./Tracks.css";
import TrackMap from "../../components/TrackMap/TrackMap";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";

function Tracks() {
  return (
    <>
      <div className="header-title">
        <h1>Tracks - Rutas</h1>
      </div>
      <p>
        Pirinexus es una ruta circular de <strong>350 kms</strong> atravesando
        España (80%) y Francia (20%), idealmente con la bici Gravel.
        <br />
        Está recomendado hacerla por etapas y no superar 60 km/día. Como su
        comienzo se considera la ciudad de Girona y hay etapas establecidas pero
        en realidad depende de cada uno. Pero sí que se recomienda pedalear en
        el sentido de las agujas del reloj para que la Tramuntana sople a favor
        del ciclista.
      </p>
      <TrackMap />
      <Banner />
      <Footer />
    </>
  );
}

export default Tracks;
