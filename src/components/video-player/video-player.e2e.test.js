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
  const videoPlayer = mount(
      <VideoPlayer poster={poster} previewUrl={previewUrl} isPlaying={true} />
  );

  const {_videoRef} = videoPlayer.instance();

  const play = jest
  .spyOn(_videoRef.current, `play`)
  .mockImplementation(() => {});

  _videoRef.current.play();

  expect(play).toHaveBeenCalledTimes(1);

  expect(play).toHaveBeenCalled();
  play.mockRestore();
});

it(`should pause video`, () => {
  window.HTMLMediaElement.prototype.pause = () => {};

  const {poster, previewUrl} = film;
  const videoPlayer = mount(
      <VideoPlayer poster={poster} previewUrl={previewUrl} isPlaying={true} />
  );

  const {_videoRef} = videoPlayer.instance();

  const pause = jest
    .spyOn(_videoRef.current, `pause`)
    .mockImplementation(() => {});

  _videoRef.current.pause();

  expect(pause).toHaveBeenCalledTimes(1);

  expect(pause).toHaveBeenCalled();
  pause.mockRestore();
});
