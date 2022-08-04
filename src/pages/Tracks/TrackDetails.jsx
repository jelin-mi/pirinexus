import { useParams } from "react-router-dom";
import "./TrackDetails.css";
import tracks from "../../tracks-db.json";
import Footer from "../../components/Footer/Footer";

function TrackDetails() {
  const { id } = useParams();
  return (
    <>
      <div className="route-details">
        <h1>Route details - {id}</h1>
        <br />
        {tracks.map((track) => (
          <div key={track._id} className="details">
            <ul>
              <li>
                <strong>id:</strong> {track._id}
              </li>
              <li>
                <strong>title:</strong> {track.title}
              </li>
              <li>
                <strong>ruta:</strong> {track.ruta}
              </li>
              <li>
                <strong>description:</strong> {track.description}
              </li>
            </ul>
            <div className="track-details">
              <img src={track.img} alt="" />
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default TrackDetails;
