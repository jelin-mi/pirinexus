import "./Tracks.css";
import desnivel from "../../assets/images/desnivel.png";
import TrackMap from "../../components/TrackMap/TrackMap";
import Footer from "../../components/Footer/Footer";

function Tracks() {
  return (
    <>
      <div className="header-title">
        <h1>PirineXus, allá vamos</h1>
      </div>
      <p>
        <strong>Pirinexus</strong> es una ruta circular de{" "}
        <strong>350 kms</strong> atravesando <strong>España</strong> (80%) y{" "}
        <strong>Francia</strong> (20%), idealmente con la bici Gravel.
        <br />
        Está recomendado hacerla por etapas y no superar 60 km/día. Como su
        comienzo se considera la ciudad de <strong>Girona</strong> y hay etapas
        establecidas pero en realidad depende de cada uno. Pero sí que se
        recomienda pedalear en el sentido de las agujas del reloj para que la
        Tramuntana sople a favor del ciclista.
      </p>
      <p>Nosotros decidimos hacer la ruta de Pirinexus en <strong>3 etapas</strong> individuales.</p>
      <TrackMap />
      <img src={desnivel} alt="desnivel" className="desnivel" />
      <Footer />
    </>
  );
}

export default Tracks;
