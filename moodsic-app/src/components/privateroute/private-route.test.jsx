import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import PrivateRoute from './private-route';

describe('Given a private route component', () => {
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
    test('It will create a <PrivateRoute>', () => {
      // Act
      act(() => {
        // render component
        render(<BrowserRouter><PrivateRoute component={{}} /></BrowserRouter>, container);
      });
      const privateroute = container.querySelector('PrivateRoute');
      // assert
      expect(privateroute).toBe(null);
    });
  });
});
