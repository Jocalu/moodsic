import axios from 'axios';
import playlistActionTypes from './playlistsActionTypes';

export default function fetchInformationFromAPI(id) {
  return async function dispatchInfo(dispatch) {
    const response = await axios('https://openwhyd.org/alejandro92?format=json&limit=10000');
    const loadedPlayList = response.data;
    if (id || id === 0) {
      dispatch({
        type: playlistActionTypes.FETCH_DETAIL_INFORMATION_SUCCESS,
        data: {
          loadedPlayList,
          id
        }
      });
    } else {
      dispatch({
        type: playlistActionTypes.FETCH_LIST_INFORMATION_SUCCESS,
        data: loadedPlayList
      });
    }
  };
}

export function addLikedSong(likedSong) {
  return {
    type: playlistActionTypes.ADD_LIKED_SONG,
    likedSong
  };
}
export function deleteLikedSong(likedSong) {
  return {
    type: playlistActionTypes.DELETE_LIKED_SONG,
    likedSong
  };
}
