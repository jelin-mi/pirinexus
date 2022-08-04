import bikers from "../../data/bikers-db.json";
import Footer from "../../components/Footer/Footer";
import "./Bikers.css";

function Bikers() {
  return (
    <>
      <div className="header-title">
        <h1>Bikers</h1>
      </div>
      <div className="bikerslist">
        {bikers.map((biker) => (
          <div className={`block ${biker._id}`} key={biker._id}>
            <div className="row">
              <div className="box-text">
                <h2>{biker.biker}</h2>
                <p>{biker.bio}</p>
              </div>

              <div className="box-img">
                <img src={biker.img} alt='' />
              </div>
            </div>

            <div className="row">
              <div className="box-img bike">
                <img src={biker.img_bike} alt='' />
              </div>

              <div className="box-text">
                <h2>{biker.bike}</h2>
                <p>
                  <strong>Weight: </strong>
                  {biker.weight}
                </p>
                <p>
                  <strong>Size: </strong>
                  {biker.size}
                </p>
                <p>
                  <strong>Transmission: </strong>
                  {biker.transmission}
                </p>
                <p>
                  <strong>Wheels: </strong>
                  {biker.wheels}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Bikers;
