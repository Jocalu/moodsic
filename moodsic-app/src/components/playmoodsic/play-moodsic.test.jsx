import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import PlayMoodisc from './play-moodsic';

describe('Given a play moodsic component', () => {
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
    test('It will create an <section>', () => {
      act(() => {
        render(<PlayMoodisc />, container);
      });
      const section = container.querySelector('section');

      expect(section).toBeTruthy();
    });
  });
});
