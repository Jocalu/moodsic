import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Comments from './comments';

describe('Given a component Comments', () => {
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

  describe('When calling it without argument', () => {
    test('Then it will create a <section> tag', () => {
      act(() => {
        render(<Comments />, container);
      });
      const section = container.querySelector('section');

      expect(section).toBeTruthy();
    });

    test('Then it will create a <img> tag', () => {
      act(() => {
        render(<Comments />, container);
      });
      const img = container.querySelector('img');

      expect(img).toBeTruthy();
    });
  });
});
