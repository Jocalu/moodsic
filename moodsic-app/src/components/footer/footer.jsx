import React from 'react';
import './footer.scss';
import { Link, BrowserRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faFacebookF, faYoutube, faInstagram
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer>
      <nav className="footer-container">

        <address className="footer__address">
          <p className="contact-container__title">CONTACT US</p>
          <BrowserRouter>
            <Link to="mailto:anjelandrojos@gmail.com">Send us an email.</Link>
          </BrowserRouter>
          <p className="display-desktop">
            Or visit us at:
            <br />
            Carrer de Roc Boronat, 35, 08005 Barcelona.
          </p>
        </address>

        <div className="footer__icons-container">
          <FontAwesomeIcon icon={faTwitter} className="footer__icon" />
          <FontAwesomeIcon icon={faFacebookF} className="footer__icon" />
          <FontAwesomeIcon icon={faYoutube} className="footer__icon" />
          <FontAwesomeIcon icon={faInstagram} className="footer__icon" />
        </div>

        <div className="footer__media-container">
          <div className="footer__logo-container">
            <img
              className="footer__logo"
              src="https://trello-attachments.s3.amazonaws.com/5ffc5f162c16556900cb7618/60211328e0b9845236ec8af0/ad90d2858a65e7a8d9372fc51885c5d9/anjelandrojos_white.png"
              alt="Creator's logo"
            />
          </div>
        </div>

      </nav>
    </footer>
  );
}
