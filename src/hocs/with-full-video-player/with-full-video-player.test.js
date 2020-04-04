import React from "react";
import renderer from "react-test-renderer";
import withFullVideoPlayer from "./with-full-video-player";

const MockComponent = () => <div />;

const MockComponentWrapped = withFullVideoPlayer(MockComponent);

it(`should render withFullVideoPlayer HOC correctly`, () => {
  const tree = renderer
  .create(
      <
        MockComponentWrapped
        autoPlay = {true}
        onExitButtonClick={() => {}}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
