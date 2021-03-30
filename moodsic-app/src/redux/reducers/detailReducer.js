import playlistActionTypes from '../actions/playlistsActionTypes';
import initialState from '../store/initialState';

export default function playlistsReducer(state = initialState, action) {
  let detailInfo;
  let playlistObject;
  switch (action.type) {
    case playlistActionTypes.FETCH_DETAIL_INFORMATION_SUCCESS:
      detailInfo = [];
      playlistObject = action.data.loadedPlayList;
      playlistObject.forEach((song) => {
        if (song.pl.id === +action.data.id) {
          const idPlaylist = song.pl.id;
          const playlistName = song.pl?.name;
          const { name } = song;
          let link = song.src.id;
          [, link] = link.split('=');
          [link] = link.split('&');
          detailInfo.push({
            name, link, playlistName, idPlaylist
          });
        }
      });
      return { ...state, detailInfo };

    case playlistActionTypes.FETCH_DETAIL_INFORMATION_FAILURE:
      return (action.error);

    default:
      return state;
  }
}
