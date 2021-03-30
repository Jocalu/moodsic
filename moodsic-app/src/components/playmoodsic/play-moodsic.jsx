import React from 'react';
import './play-moodsic.scss';

export default function PlayMoodsic() {
  return (
    <>
      <div className="logo--play">Play</div>
      <section className="header-play">

        <div className="header-play__img-container">
          <img
            src="https://trello-attachments.s3.amazonaws.com/5ffc5f162c16556900cb7618/60211328e0b9845236ec8af0/96b6c24dcaf858a278d53bae15fc20f6/listheader.jpeg"
            alt="Girl training"
          />
        </div>

        <div className="header-play__text">
          <h3>Game explanation</h3>
          <p>
            Moodsic is simple and yet, so much fun! You will listen to a song,
            and depending on how you feel about it, you can categorize it into one of our moodlists.
            After each round, we will show information on what other players choose.
            And last but not least, remember to add any tracks you like to your collection!
          </p>
        </div>
      </section>
      <section className="list-container">
        <h1>Page under construction</h1>

      </section>

    </>
  );
}
