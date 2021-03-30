import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import './notfound.scss';

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404 - Page not found</h1>
      <BrowserRouter>
        <Link to="/" className="return">Back to safety</Link>
      </BrowserRouter>
    </div>
  );
}
