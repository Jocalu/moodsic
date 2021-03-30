import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Footer from './footer';

describe('Given a footer component', () => {
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
    test('It will create a <footer>', () => {
      act(() => {
        render(<Footer />, container);
      });
      const footer = container.querySelector('footer');

      expect(footer).toBeTruthy();
    });

    test('IT will create a <p> with text: contact us', () => {
      act(() => {
        render(<Footer />, container);
      });
      const p = container.querySelector('p');

      expect(p.textContent).toBe('CONTACT US');
    });
  });
});
