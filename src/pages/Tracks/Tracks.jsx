import Footer from "../../components/Footer/Footer";
import RouteList from "../../components/RouteList/RouteList";
import "./Tracks.css";

function Tracks({ data }) {
  return (
    <>
      <div className="header-title">
        <h1>Tracks</h1>
      </div>
      <RouteList data={data} />
      <Footer />
    </>
  );
}

export default Tracks;
