import "./Footer.css";
import { NavLink, Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="links">
        <div className="column">
          <div class="logo">
            <h2>pirineXus</h2>
          </div>
        </div>

        <div className="column">
          <h2>Get in touch</h2>
          <p>
            <a href="mailto:info.jandcreative@gmail.com" class="mail">
              info.jandcreative@gmail.com
            </a>
          </p>
        </div>

        <div className="column">
          <h2>See also</h2>
          <nav>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/tracks">Tracks</NavLink>
            <NavLink to="/bikers">Bikers</NavLink>
          </nav>
        </div>

        <div className="column">
          <h2>Más información</h2>
          <nav>
            <a
              href="https://www.viesverdes.cat/wp-content/uploads/2022/08/Desplegable_cicloturisme_2022.pdf"
              target="_blank"
              rel="noreferrer"
            >
              El folleto con mapa
            </a>
            <a
              href="https://www.viesverdes.cat/es/caracteristiques-vies-verdes-pirinexus/"
              target="_blank"
              rel="noreferrer"
            >
              Vías Verdes / Pirinexus
            </a>
            <a
              href="https://www.instagram.com/explore/tags/pirinexus/"
              target="_blank"
              rel="noreferrer"
            >
              #pirinexus
            </a>
          </nav>
        </div>

        <div className="column">
          <h2> </h2>
          <div className="icons">
            <Link to="https://www.instagram.com/viesverdesgi/">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
