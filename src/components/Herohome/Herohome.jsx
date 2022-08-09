import "./Herohome.css";
import { Link } from "react-router-dom";

function Herohome() {
  return (
    <div className="hero-home">
      <div className="container">
        <span>Aventura en 4 ruedas</span>
        <h2>Pirinexus Challenge</h2>
        <div className="button-container">
          <button>
            <Link className="button" to="#">
              Saber más
            </Link>
          </button>

          <button>
            <Link className="button secondary" to="/bikers">
             Bikers
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Herohome;
