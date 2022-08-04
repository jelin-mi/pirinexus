//import tracks from "../../data/tracks-db.json";
import "./RouteList.css";
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function RouteList() {
  const [dataTracks, setDataTracks] = useState([]);

  useEffect(() => {
    fetch("../../tracks-db.json")
      .then((res) => {
        res.json();
        console.log("res: ", res);
      })
      .then((dataTracks) => {
        setDataTracks(dataTracks);
        //  console.log("dataTracks fetched correctly", dataTracks);
      })
      .catch((error) => {
        console.log("Not workking, baby.", error);
      });
  }, []);

  return (
    <div className="routelist">
      <h2>Mishäk knows like a little Developer</h2>

      {dataTracks.map((track) => {
        console.log("value: ", track);

        return (
          <>
            <h2>Here starts the map rendering</h2>
            <div key={track._id}>{track.title}</div>
          </>
        );
      })}
    </div>
  );
}
export default RouteList;

{
  /*  <Link to={`/tracks/${track._id}`}>
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
          </Link> */
}
