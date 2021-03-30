import React from 'react';
import Comments from './comments/comments';
import AboutUs from './about-us/aboutus';
import SloganHeader from './slogan-header/slogan-header';
import VideoHeader from './video-header/video-header';

export default function Dashboard() {
  return (
    <>
      <VideoHeader />
      <SloganHeader />
      <AboutUs />
      <Comments />
    </>
  );
}
