import "./TracksHeader.css";
import tracks from "../../data/tracks-db.json";
import { useParams } from "react-router-dom";

// icons
import { ReactComponent as Bike } from "../../assets/images/icon_bike.svg";
import { ReactComponent as Time } from "../../assets/images/icon_clock.svg";
import { ReactComponent as Distance } from "../../assets/images/icon_distance.svg";
import { ReactComponent as LevelMedium } from "../../assets/images/icon_level_medium.svg";

function TracksHeader() {
  const { id } = useParams();
  const selectedTrack = tracks.filter((track) => track._id === id);

  return (
    <div className="track-details">
      <div className="header-full">
        <div class="vertical-lines faqs-grid">
          <div class="line l1 active"></div>
          <div class="line l2 active"></div>
          <div class="line l3 active"></div>
          <div class="line l4 active"></div>
        </div>
        {selectedTrack.map((track) => (
          <div class="header-title">
            <h1>{track.title}</h1>
            <p>{track.description}</p>
            <div className="icons">
              <div className="icon">
                <Bike />
                <span>{track.icon_bike}</span>
              </div>
              <div className="icon">
                <Distance />
                <span>{track.icon_distance}</span>
              </div>
              <div className="icon">
                <Time />
                <span>{track.icon_time}</span>
              </div>

              <div className="icon">
                <LevelMedium />
                <span>{track.icon_level}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TracksHeader;
