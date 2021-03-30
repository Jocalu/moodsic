import playlistActionTypes from '../actions/playlistsActionTypes';
import initialState from '../store/initialState';

export default function playlistsReducer(state = initialState, action) {
  let playlistNames;
  let playlistObject;
  switch (action.type) {
    case playlistActionTypes.FETCH_LIST_INFORMATION_SUCCESS:
      playlistNames = [];
      playlistObject = action.data;
      playlistObject.forEach((song) => {
        const singlePlaylistName = song.pl?.name;
        const singlePlaylistId = song.pl.id;
        if (singlePlaylistName
               && !playlistNames.some((playlist) => playlist.name === singlePlaylistName)) {
          playlistNames.push({ name: singlePlaylistName, id: singlePlaylistId });
        }
      });
      return { ...state, playlistNames };

    default:
      return state;
  }
}
