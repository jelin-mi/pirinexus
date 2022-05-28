import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="pages">
        <h3>Navigation</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tracks">Tracks</Link>
          </li>
          <li>
            <Link to="/bikers">Bikers</Link>
          </li>
        </ul>
      </div>
      <div className="useful">
        <h3>Useful links</h3>
        <ul>
          <li>
            <a
              href="https://github.com/jelin-mi"
              target="_blank"
              rel="noreferrer"
            >
              Pirinexus
            </a>
          </li>
          <li>
            <a
              href="https://github.com/jelin-mi"
              target="_blank"
              rel="noreferrer"
            >
              Víes verdes
            </a>
          </li>
          <li>
            <a
              href="https://github.com/jelin-mi"
              target="_blank"
              rel="noreferrer"
            >
              Mapas
            </a>
          </li>
          <li>
            <a
              href="https://github.com/jelin-mi"
              target="_blank"
              rel="noreferrer"
            >
              Youtube
            </a>
          </li>
        </ul>
      </div>
      <div className="contact">
        <h3>Contact</h3>
        <p>Questions?</p>
      </div>
    </footer>
  );
}

export default Footer;
