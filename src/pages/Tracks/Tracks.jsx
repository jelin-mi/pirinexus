import "./Tracks.css";
import TrackMap from "../../components/TrackMap/TrackMap";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";

function Tracks() {
  return (
    <>
      <div className="header-title">
        <h1>Tracks</h1>
      </div>
      <TrackMap />
      <Banner/>
      <Footer />
    </>
  );
}

export default Tracks;
