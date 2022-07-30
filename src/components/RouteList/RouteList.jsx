import tracks from "../../data/tracks-db.json";
import "./RouteList.css";
import { Link } from "react-router-dom";

function RouteList() {
    return (
     <div className="routelist">
        {tracks.map(track => (
              <Link to={`/route/${track._id}`}>
            <div className={`card ${track._id}`} key={track._id}>
                <div className="box-img">
                    <div className="overlay"></div>
                    <img src={track.img} alt=""/>
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
  export default RouteList;
  