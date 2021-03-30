import playlistActionTypes from '../actions/playlistsActionTypes';

export default function likedSongsReducer(state = {}, action) {
  switch (action.type) {
    case playlistActionTypes.ADD_LIKED_SONG:
      return {
        ...state,
        likedSongs: [...state.likedSongs, action.likedSong]
      };
    case playlistActionTypes.DELETE_LIKED_SONG:
      return {
        ...state,
        likedSongs: state.likedSongs.filter((song) => song.name !== action.likedSong.name)
      };

    default:
      return state;
  }
}
