import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './notfound';

describe('Given a notfound component', () => {
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
    test('It will create an <div>', () => {
      act(() => {
        render(
          <BrowserRouter>
            <NotFound />
          </BrowserRouter>,
          container
        );
      });
      const div = container.querySelector('div');

      expect(div).toBeTruthy();
    });
  });
});
