import React from 'react';
import './list-header.scss';

export default function ListHeader() {
  return (
    <>
      <div className="header-detail">
        <div className="header-detail__img-container list__img">
          <img src="https://trello-attachments.s3.amazonaws.com/5ffc5f162c16556900cb7618/60211328e0b9845236ec8af0/97f0823eac9a1421963b7e76d61a327e/listheader-2.jpeg" alt="Girl listening music" />
        </div>
        <div className="header-detail__text">
          <p className="header-moods__text">
            Straight from our user&apos;s knowledge, we have created
            the best and most accurate playlists
            that will transform or enhance your mood at will.
          </p>
        </div>
      </div>
    </>
  );
}
