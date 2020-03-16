import React from "react";
import renderer from "react-test-renderer";
import FullVideoPlayer from "./full-video-player.jsx";

const film = {
  title: `Some title`,
  poster: `1.jpg`,
  bgPosterUrl: `https://image-url.com/1.jpg`,
  genre: `Some genre`,
  releaseYear: 2020,
  director: `Director name`,
  starring: [`Actor 1`, `Actor 2`, `Actor 3`, `Actor 4`, `Actor 5`],
  runTime: `2h 00m`,
  ratingScore: 7.5,
  ratingCount: 1234,
  description: `Film description`,
  previewUrl: `https://preview-url.com/1.mp4`,
  reviews: [
    {
      ratingScore: 8.5,
      date: `September 8, 2019`,
      author: `Yuliia Orlova`,
      text: `Review text`
    }
  ]
};


it(`VideoPlayer component should render correct`, () => {
  const tree = renderer
    .create(
        <FullVideoPlayer
          videoRef={React.createRef()}
          film={film}
          autoPlay={true}
          isPlaying={false}
          onPlayButtonClick={() => {}}
          onFullscreenButtonClick={() => {}}
          getElapsedTime={() => {}}
          getProgress={() => {}}
          onLoadedMetadata={() => {}}
          onTimeUpdate={() => {}}
          onExitButtonClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
