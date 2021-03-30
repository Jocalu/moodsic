import React from 'react';
import { Provider } from 'react-redux';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import SongDetail from './song-detail';
import configureStore from '../../redux/store/configureStore';

describe('Given a song-detail component', () => {
  let container = null;
  let store;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    store = configureStore({});
    store.dispatch = jest.fn();
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  describe('When detail.info has length', () => {
    test('Then it will return a section', () => {
      act(() => {
        render(<Provider store={store}>
          <SongDetail />
        </Provider>, container);
      });
      const section = document.querySelector('section');

      expect(section).toBeTruthy();
    });
  });
});
