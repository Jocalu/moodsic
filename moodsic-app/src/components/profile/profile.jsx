import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faHeart } from '@fortawesome/free-solid-svg-icons';
import './profile.scss';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { deleteLikedSong } from '../../redux/actions/playlistsActionsCreator';

function Profile({ likedSongs, actions }) {
  const {
    user, isAuthenticated, isLoading, error
  } = useAuth0();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <div>Oops... </div>;
  }
  return (
    isAuthenticated
      && (
        <>
          <section className="header-detail">

            <div className="header-profile__img-container">
              <img className="image-profile" src={user.picture} alt={user.name} />
            </div>

            <div className="header-profile__text">
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>

          </section>

          <section className="profile-detail">
            {likedSongs.map((likedSong) => (
              <details className="detail-container" key={likedSong.name}>
                <summary className="detail__player">

                  <div className="play-container">
                    <FontAwesomeIcon icon={faPlayCircle} className="play-icon" />
                  </div>

                  <div className="detail__song-title">{likedSong.name}</div>
                  <button
                    type="button"
                    className="heart-container"
                    onClick={() => actions.deleteLikedSong(likedSong)}
                  >
                    <FontAwesomeIcon icon={faHeart} className="heart-icon" />
                  </button>
                </summary>

                <div className="video-container">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    src={`https://www.youtube.com/embed/${likedSong.link}`}
                    title={likedSong.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </details>
            ))}
          </section>
        </>
      )
  );
}
Profile.propTypes = {
  likedSongs: PropTypes.shape([]).isRequired,
  actions: PropTypes.shape({
    deleteLikedSong: PropTypes.func.isRequired
  }).isRequired
};

function mapStateToProps(state) {
  return { likedSongs: state.likedSongsReducer.likedSongs };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ deleteLikedSong }, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
