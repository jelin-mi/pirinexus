import "./Tracks.css";
import TrackMap from "../../components/TrackMap/TrackMap";
import Footer from "../../components/Footer/Footer";

function Tracks() {
  return (
    <>
      <div className="header-title">
        <h1>Tracks</h1>
      </div>
      <TrackMap />
      <Footer />
    </>
  );
}

export default Tracks;
