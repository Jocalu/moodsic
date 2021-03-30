import React from 'react';
import './aboutus.scss';

export default function AboutUs() {
  return (
    <section className="description">

      <div
        className="description-container"
      >
        <div className="paragraph">
          <i>What is Moodsic?</i>
          <p>
            We are a platform that came alive chasing a feeling, a dream, an idea.
            We believe in music and the power it holds over people&apos;s lives. We
            believe that people are music as much as flesh and bones.
          </p>
        </div>
        <div className="description__img-container">
          <img
            className="description__img"
            src="https://trello-attachments.s3.amazonaws.com/5ffc5f162c16556900cb7618/60211328e0b9845236ec8af0/eb3c072efae78071238981e407af8a80/party_colors.jpeg"
            alt="Party holi colors"
          />
        </div>
      </div>

      <div
        className="description-container"
      >
        <div className="paragraph">
          <i>What can we give you?</i>
          <p>
            A state of mind. An emotion. A mood. In particular, the right mood for
            the right moment and the ability to share it with others.
          </p>
        </div>
      </div>

      <div
        className="description-container"
        data-aos="fade-down"
        data-aos-delay="500"
        data-aos-once="true"
      >
        <div
          className="description__video-container"
        >
          <video
            autoPlay
            loop
            muted
            className="header__video video"
            src="https://trello-attachments.s3.amazonaws.com/5ffc5f162c16556900cb7618/60211328e0b9845236ec8af0/e4f72d26b2552037bacccf572b2e6d60/Dance-compressed.mp4"
          >
            <track kind="captions" />
          </video>
        </div>
        <div className="paragraph">
          <i>How will we make that happen?</i>
          <p>
            We are giving you the opportunity to listen to all kinds of songs and
            artists selected from people all over the world, based on how it makes
            them feel. Also, and because sharing is caring, we want YOU to be able
            to show the world your moodlists, adding them to our already extensive
            data on the matter. The more we all give, the more music we discover,
            which will surely translate into a better and more personal way of
            delivering the perfect playlist for the right moment.
          </p>
        </div>
      </div>

      <div
        className="description-container"
        data-aos="fade-down"
        data-aos-delay="500"
        data-aos-once="true"
      >
        <div
          className="paragraph"
        >
          <i>...But that&apos;s not all! </i>
          <p>
            With our new implementation, playMoodSic, you can have fun discovering
            new random songs that you will categorize depending on what emotions
            it delivers to you. After each round, we will give you global data on
            how the world feels about it. But hey, don&apos;t take our word for it.
            Please join us and discover it yourself.
          </p>
        </div>
      </div>

    </section>

  );
}
