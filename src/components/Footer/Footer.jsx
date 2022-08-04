<<<<<<< HEAD
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
=======
import "./Footer.css";
import { NavLink, Link } from "react-router-dom";
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function Footer() {
    return ( 

    <footer>

    <div className="links">

        <div className="column">

            <div class="logo"><h2>pirineXus</h2></div>

        </div>

        <div className="column">
            <h2>Get in touch</h2>
            <p>
                <a href="#" class="mail">info.jandcreative@gmail.com</a>
                Carretera de Terrassa 37 2-1<br/>
                08019 Rubí
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
            <h2>Legal stuff</h2>
            <nav>
                <NavLink to="/privacy">Privacy Policy</NavLink>
                <NavLink to="/legal">Legal Notice</NavLink>
            </nav>
        </div>

        <div className="column">
            <h2>Follow me</h2>

                <div className="icons">
                    <Link to="#"> <FaYoutube /></Link>
                    <Link to="#"><FaInstagram /></Link>
                    <Link to="#"><FaLinkedin /></Link>
                </div>
        </div>

        

    </div>

    </footer>

     );
}

export default Footer;
>>>>>>> javi
