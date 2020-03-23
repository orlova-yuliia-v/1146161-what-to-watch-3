import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

const movie = {
  poster: `1.jpg`,
  previewUrl: `https://preview-url.com/1.mp4`
};

const {poster, previewUrl} = movie;

it(`should render correctly`, () => {
  const tree = renderer.create(<VideoPlayer
    poster={poster}
    previewUrl={previewUrl}
    isPlaying={true}
  />,
  {
    createNodeMock: (element) => {
      if (element.type === `video`) {
        return {
          play: () => {}
        };
      }
      return null;
    }
  })
.toJSON();

  expect(tree).toMatchSnapshot();
});
