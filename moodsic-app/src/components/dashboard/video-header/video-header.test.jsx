import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import VideoHeader from './video-header';

describe('Given a header component', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  describe('When there is no argument', () => {
    test('It will create a <video>', async () => {
      await act(async () => {
        await render(<VideoHeader />, container);
      });
      const video = container.querySelector('video');

      expect(video).toBeTruthy();
    });
  });
});
