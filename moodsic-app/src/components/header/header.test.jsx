import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Header from './header';

describe('Given a Header component', () => {
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

  describe('When there is no arguments', () => {
    test('It will create a <nav> tag', () => {
      act(() => {
        render(<BrowserRouter><Header /></BrowserRouter>, container);
      });
      const nav = container.querySelector('nav');

      expect(nav).toBeTruthy();
    });

    test('It will create a <img> tag', () => {
      act(() => {
        render(<BrowserRouter><Header /></BrowserRouter>, container);
      });
      const img = container.querySelector('img');

      expect(img).toBeTruthy();
    });
  });

  describe('When there authenticated', () => {
    test('It will create a <button> tag', () => {
      const isAuthenticated = true;

      act(() => {
        render(
          <BrowserRouter>
            {isAuthenticated && <Header />}
          </BrowserRouter>,
          container
        );
      });
      const button = container.querySelector('button');

      expect(button).toBeTruthy();
    });
  });
});
