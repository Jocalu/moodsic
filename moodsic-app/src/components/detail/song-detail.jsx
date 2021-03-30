import React, { useEffect, useState } from 'react';
import './song-detail.scss';
import { useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faHeart } from '@fortawesome/free-solid-svg-icons';
import { PropTypes } from 'prop-types';
import fetchInformationFromAPI, { addLikedSong } from '../../redux/actions/playlistsActionsCreator';
import playlistInformation from '../../constants/playListInformation';

function SongDetail({ detailInfo, actions }) {
  const [{ id }] = useState(useParams());

  useEffect(() => {
    actions.fetchInformationFromAPI(id);
  }, []);

  if (detailInfo.length) {
    return (
      <>
        <section className="header-detail">

          <div className="header-detail__img-container">
            <img
              src={playlistInformation[detailInfo[0].playlistName].src}
              alt={playlistInformation[detailInfo[0].playlistName].alt}
            />
          </div>

          <div className="header-detail__text">
            <h3>{detailInfo[0].playlistName}</h3>
            <p>
              {playlistInformation[detailInfo[0].playlistName].longDescription}
            </p>
          </div>

        </section>

        <section className="section-detail">

          {detailInfo.map((song) => (
            <details
              className="detail-container"
              key={song.name}
            >
              <summary className="detail__player">

                <div className="play-container">
                  <FontAwesomeIcon
                    icon={faPlayCircle}
                    className="play-icon"
                  />
                </div>
                <div className="detail__song-title">{song.name}</div>
                <button
                  type="button"
                  className="heart-container"
                  onClick={() => actions.addLikedSong(song)}
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="heart-icon"
                  />
                </button>
              </summary>
              <div className="video-container">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src={`https://www.youtube.com/embed/${song.link}`}
                  title={song.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </details>
          ))}

        </section>
      </>
    );
  } return <br />;
}
SongDetail.propTypes = {
  detailInfo: PropTypes.arrayOf(PropTypes.shape({
    playlistName: PropTypes.string,
    name: PropTypes.string,
    link: PropTypes.string
  })).isRequired,
  actions: PropTypes.shape({
    fetchInformationFromAPI: PropTypes.func.isRequired,
    addLikedSong: PropTypes.func.isRequired
  }).isRequired
};

function mapStateToProps(state) {
  return {
    detailInfo: state.detailReducer.detailInfo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ fetchInformationFromAPI, addLikedSong }, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SongDetail);
