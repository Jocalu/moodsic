import axios from 'axios';
import fetchInformationFromAPI, { addLikedSong, deleteLikedSong } from './playlistsActionsCreator';
import configureStore from '../store/configureStore';
import playlistActionTypes from './playlistsActionTypes';

jest.mock('axios');

describe('Given a fetchInformationFromAPI function', () => {
  describe('When is called', () => {
    let store;
    beforeEach(() => {
      store = configureStore({});
    });

    test('Then axios is called', () => {
      axios.get = jest.fn();

      fetchInformationFromAPI()();

      expect(axios.get).toHaveBeenCalled();
    });

    test('And dispatch is called with the data from axios', async () => {
      axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({}));
      store.dispatch = jest.fn();

      const dispatchFunction = fetchInformationFromAPI();

      await dispatchFunction(store.dispatch);

      expect(store.dispatch).toHaveBeenCalledWith({
        type: playlistActionTypes.FETCH_LIST_INFORMATION_SUCCESS
      });
    });
  });
});

describe('Given a addLikedSong function', () => {
  describe('When is called', () => {
    test('Then returns an action ADD_LIKED_SONG', () => {
      const returnedValue = addLikedSong('thisSong');

      expect(returnedValue).toEqual({
        type: playlistActionTypes.ADD_LIKED_SONG,
        likedSong: 'thisSong'
      });
    });
  });
});

describe('Given a deleteLikedSong function', () => {
  describe('When is called', () => {
    test('Then returns an action DELETE_LIKED_SONG', () => {
      const returnedValue = deleteLikedSong('thisSong');

      expect(returnedValue).toEqual({
        type: playlistActionTypes.DELETE_LIKED_SONG,
        likedSong: 'thisSong'
      });
    });
  });
});
