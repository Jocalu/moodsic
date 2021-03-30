import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './list-moods.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import fetchInformationFromAPI from '../../redux/actions/playlistsActionsCreator';
import playlistInformation from '../../constants/playListInformation';

function ListMoods({ playlistNames, actions }) {
  useEffect(() => {
    actions.fetchInformationFromAPI();
  }, []);

  return (
    <section className="section-container">
      {playlistNames.map((playlist) => (
        <Link to={`/detail/${playlist.id}`} className="image-container" key={`/detail/${playlist.id}`}>
          <figure>
            <img
              src={playlistInformation[playlist.name].src}
              alt={playlistInformation[playlist.name].alt}
            />
            <div className="image__text">
              <h3>{playlist.name}</h3>
              <p>
                {playlistInformation[playlist.name].shortDescription}
              </p>
            </div>
          </figure>
        </Link>
      ))}
    </section>
  );
}

ListMoods.propTypes = {
  playlistNames: PropTypes.shape([]).isRequired,
  actions: PropTypes.shape({ fetchInformationFromAPI: PropTypes.func.isRequired }).isRequired
};

function mapStateToProps(state) {
  return { playlistNames: state.listReducer.playlistNames };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ fetchInformationFromAPI }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMoods);
