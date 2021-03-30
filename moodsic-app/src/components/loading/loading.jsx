import React from 'react';
import './loading.scss';

export default function Loading() {
  return (
    <>
      <section className="header-play">
        <div className="header-play__img-container">
          <img
            src="insertimage"
            alt="insertimage"
          />
        </div>

      </section>
      <section className="list-container">
        <div className="loader">Loading...</div>
      </section>
    </>
  );
}
