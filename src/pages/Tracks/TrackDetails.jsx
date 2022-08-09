import { useParams } from "react-router-dom";
import "./TrackDetails.css";
import tracks from "../../data/tracks-db.json";
import Footer from "../../components/Footer/Footer";
/* import Banner from "../../components/Banner/Banner"; */
import TracksHeader from "./TracksHeader";
import Video from "../../components/Video/Video";

function TrackDetails() {
  const { id } = useParams();
  const selectedTrack = tracks.filter((track) => track._id === id);

  return (
    <>
      <TracksHeader />
      <Video/>
      {/* <Banner /> */}
      <div className="track-details">
        {selectedTrack.map((track) => (
          <div key={track._id} className="details">
            <div className="block-details">
              <div className="boxTextBackground">
                <div className="boxText">
                  <h2>{track.block_title_1}</h2>
                  <p>{track.block_text_1}</p>
                </div>
              </div>
              <div className="boxImage">
                  <img src={track.block_img_3} alt="" />
              </div>
            </div>
            <div className="block-details">
              <div className="boxImage">
                <img src={track.block_img_2} alt="" />
              </div>
              <div className="boxTextBackground">
                <div className="boxText">
                  <h2>{track.block_title_2}</h2>
                  <p>{track.block_text_2}</p>
                </div>
              </div>
            </div>

            <div className="block-details">
              <div className="boxTextBackground">
                <div className="boxText">
                  <h2>{track.block_title_3}</h2>
                  <p>{track.block_text_3}</p>
                </div>
              </div>
              <div className="boxImage">
                <img src={track.block_img_3} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

<style></style>;

export default TrackDetails;
