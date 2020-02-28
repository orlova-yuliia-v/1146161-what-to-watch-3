import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video-player.jsx";

configure({
  adapter: new Adapter()
});

const film = {
  poster: `1.jpg`,
  genre: `Some genre`,
  previewUrl: `https://preview-url.com/1.mp4`
};

it(`should play video`, () => {
  window.HTMLMediaElement.prototype.play = () => {};
  const {poster, previewUrl} = film;
  const play = jest.spyOn(window.HTMLMediaElement.prototype, `play`);
  mount(
      <VideoPlayer poster={poster} previewUrl={previewUrl} isPlaying={true} />
  );
  expect(play).toHaveBeenCalledTimes(1);
  play.mockRestore();
});

it(`should pause video`, () => {

  window.HTMLMediaElement.prototype.pause = () => {};
  const pause = jest.spyOn(window.HTMLMediaElement.prototype, `pause`);
  const {poster, previewUrl} = film;
  const videoPlayer = mount(
      <VideoPlayer poster={poster} previewUrl={previewUrl} isPlaying={true} />
  );
  videoPlayer.setProps({isPlaying: false});
  expect(pause).toHaveBeenCalledTimes(1);
  pause.mockRestore();
});
