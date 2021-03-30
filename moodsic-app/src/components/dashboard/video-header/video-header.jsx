import React from 'react';
import './video-header.scss';

export default function VideoHeader() {
  return (

    <div className="header__video-container">
      <video
        autoPlay
        loop
        muted
        className="header__video video"
        src="https://trello-attachments.s3.amazonaws.com/5ffc5f162c16556900cb7618/60211328e0b9845236ec8af0/5def37c62d88104e222695207213e729/plato_giratorio.mp4"
      >

        <track kind="captions" />
      </video>
    </div>
  );
}
