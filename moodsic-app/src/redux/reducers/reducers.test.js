import { createStore } from 'redux';
import rootReducer from './index';
import playlistActionTypes from '../actions/playlistsActionTypes';
import likedSongsReducer from './likedSongsReducer';
import playlistsReducer from './listReducer';
import initialState from '../store/initialState';

describe('Given a function likedSongsReducer', () => {
  describe('When is invoked without valid action', () => {
    test('Then return the state value', () => {
      const action = { };
      const state = ['value'];

      expect(likedSongsReducer(state, action)).toEqual(['value']);
    });
  });
});

describe('Given a function playlistsReducer', () => {
  describe('When is invoked with a valid action', () => {
    test('Then return an array with prop song: true', () => {
      const action = {
        type: playlistActionTypes.ADD_LIKED_SONG, likedsong: [{ song: 'true' }]
      };
      const state = [];
      expect(playlistsReducer(state, action)).toEqual([]);
    });
  });
  describe('When playlistsReducer is invoked without valid action', () => {
    test('Then return the state value', () => {
      const action = { };
      const state = ['value'];

      expect(playlistsReducer(state, action)).toEqual(['value']);
    });
  });
});

describe('Given a function rootReducer', () => {
  const store = createStore(rootReducer);

  describe('When is called by createStore ', () => {
    test('Then childs reducers return given an empty action', () => {
      expect(store.getState()
        .listReducer).toEqual(playlistsReducer(undefined, {}));
      expect(store.getState()
        .detailReducer).toEqual(playlistsReducer(undefined, {}));
    });
    test('Then childs reducers return the initialstate ( playlistNames: [],detailInfo: [],likedSongs: [])', () => {
      expect(store.getState().listReducer).toEqual(initialState);
      expect(store.getState().detailReducer).toEqual(initialState);
    });
  });
});
