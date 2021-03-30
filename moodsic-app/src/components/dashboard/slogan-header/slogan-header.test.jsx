import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import SloganHeader from './slogan-header';

describe('Given a dashboard component', () => {
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
    test('It will create an <p>', () => {
      act(() => {
        render(<SloganHeader />, container);
      });
      const slogan = container.querySelector('p');

      expect(slogan).toBeTruthy();
    });
  });
});
