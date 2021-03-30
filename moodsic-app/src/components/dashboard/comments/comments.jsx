import React from 'react';
import './comments.scss';

export default function Comments() {
  return (
    <>
      <section className="comments">
        <div className="comments-container--left">
          <div
            className="comments-container"
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-once="true"
          >
            <div className="comments__img-container">
              <img
                className="comments__img"
                src="https://trello-attachments.s3.amazonaws.com/5ffc5f162c16556900cb7618/60211328e0b9845236ec8af0/a1425e95340688d4bc5f36cdc1d76c0f/user1.jpeg"
                alt="User random from Moodsic"
              />
            </div>
            <p>
              &lsquo;&lsquo;A friend showed Moodsic to me and now I use it wherever I go.
              Thanks to its moods I always have a playlist ready for each
              occasion.&rsquo;&rsquo;
            </p>
          </div>
        </div>

        <div className="comments-container--right">
          <div
            className="comments-container"
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-once="true"
          >
            <p>
              &lsquo;&lsquo;I love the fact that Moodsic allows me to create playlists
              alongside others. I&apos;m finding a lot of new music that fit different
              moments just right.&rsquo;&rsquo;
            </p>
            <div className="comments__img-container">
              <img
                className="comments__img"
                src="https://trello-attachments.s3.amazonaws.com/5ffc5f162c16556900cb7618/60211328e0b9845236ec8af0/e1f9e5c3dc4ca41cfd75e19332c0dc92/user3.jpeg"
                alt="User random from Moodsic"
              />
            </div>
          </div>
        </div>

        <div className="comments-container--left">
          <div
            className="comments-container"
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-once="true"
          >
            <div className="comments__img-container">
              <img
                className="comments__img"
                src="https://trello-attachments.s3.amazonaws.com/5ffc5f162c16556900cb7618/60211328e0b9845236ec8af0/1bddbab0fd4c0aa300fc17d19a5ac6bc/user6.jpeg"
                alt="User random from Moodsic"
              />
            </div>
            <p>
              &lsquo;&lsquo;What I love the most about Moodsic is that whenever I don&apos;t feel
              like listening to anything in particular, I can play with
              playMoodsic. It&apos;s so much fun to see what other users voted and
              compare it with my opinion.&rsquo;&rsquo;
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
