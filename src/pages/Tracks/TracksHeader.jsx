import "./TracksHeader.css";
import { ReactComponent as Bike } from "../../assets/images/icon_bike.svg";
import { ReactComponent as Time } from "../../assets/images/icon_clock.svg";
/* import { ReactComponent as Map } from "../../assets/images/icon_map.svg"; */
import { ReactComponent as Distance } from "../../assets/images/icon_distance.svg";
import { ReactComponent as LevelMedium } from "../../assets/images/icon_level_medium.svg";


function HeaderTracks() {
    return (
    <div className="track-details">
        <div className="header-full">
          <div class="vertical-lines faqs-grid">
            <div class="line l1 active"></div>
            <div class="line l2 active"></div>
            <div class="line l3 active"></div>
            <div class="line l4 active"></div>
          </div>
        <div class="header-title">
          <h1>Ruta 1</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci consequat tortor tellus neque mauris rhoncus, accumsan. Dictum imperdiet feugiat dis id massa feugiat. A id diam, magnis purus. Mi neque sem ultrices phasellus mauris nibh ipsum nibh. Ut felis arcu tristique urna ut egestas elit, duis viverra.</p>
          <div className="icons">
              <div className="icon">
                   <Bike/>
                  <span>Gravel</span>
              </div>
              <div className="icon">
                  <Distance/>
                  <span>131.9Km</span>
              </div>
              <div className="icon">
                  <Time/>
                  <span>11h 55m</span>
              </div>
               
              <div className="icon">
                  <LevelMedium/>
                  <span>Medio</span>
              </div>
          </div>
          </div>
        </div>
    </div>

);
}

export default HeaderTracks;
