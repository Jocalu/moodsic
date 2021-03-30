import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faUserSlash } from '@fortawesome/free-solid-svg-icons';
import { useAuth0 } from '@auth0/auth0-react';

export default function Header() {
  const {
    loginWithRedirect, logout, isAuthenticated, user
  } = useAuth0();

  return (
    <>
      <Link to="/" className="logo-container">
        <img
          className="logo"
          src="https://trello-attachments.s3.amazonaws.com/5ffc5f162c16556900cb7618/60211328e0b9845236ec8af0/247d422bc728a4f487f41bbf00391ae6/moodsic_logo_oneline_white.png"
          alt="Moodsic logo"
        />
      </Link>

      <div className="bars-dropdown">
        <FontAwesomeIcon
          icon={faBars}
          className="bars-icon"
        />
        <nav className="header__navbar">
          <Link
            className="nav__link link moods"
            to="/list"
          >
            Moods
          </Link>

          <Link
            className="nav__link link playmoodsic"
            to="/play-moodsic"
          >
            Play Moodsic

          </Link>
          {isAuthenticated && (
            <Link
              className="nav__link link profile"
              to="/profile"
            >
              Profile
            </Link>
          )}
          <div>
            {!isAuthenticated && (
            <button
              type="button"
              className="nav__link login"
              onClick={loginWithRedirect}
            >
              <FontAwesomeIcon
                icon={faUser}
                className="user-icon"
              />
              Log in
            </button>
            )}
            {isAuthenticated && (
              <button
                type="button"
                className="nav__link login"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                <FontAwesomeIcon
                  icon={faUserSlash}
                  className="user-icon"
                />
                Log out
              </button>
            )}

          </div>
          { isAuthenticated
          && (
          <div className="user-picture">
            <img src={user.picture} alt={user.name} />
          </div>

          )}
        </nav>
      </div>

    </>
  );
}
