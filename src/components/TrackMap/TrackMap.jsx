import tracks from "../../data/tracks-db.json";
import "./TrackMap.css";
import { Link } from "react-router-dom";

function TrackMap() {
  return (
    <div className="trackslist">
      {tracks.map((track) => (
        <Link to={`/tracks/${track._id}`}>
          <div className={`card ${track._id}`} key={track._id}>
            <div className="box-img">
              <div className="overlay"></div>
              <img src={track.img} alt="" />
            </div>
            <div className="box-text">
              <h2>{track.title}</h2>
              <p>{track.ruta}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default TrackMap;
