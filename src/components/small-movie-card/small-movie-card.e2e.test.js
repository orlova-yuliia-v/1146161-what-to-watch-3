import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card.jsx";

configure({adapter: new Adapter()});

const mock = {
  movie: {
    id: 1,
    title: `one`,
    poster: `pic-one`,
    previewUrl: `https://preview-url.com/1.mp4`,
    isPlaying: true
  }

};

it(`should pass data to handler on hover`, () => {
  const {movie} = mock;
  const onMovieEnter = jest.fn();

  const smallMovieCard = shallow(
      <SmallMovieCard
        movie={movie}
        onMovieEnter={() => onMovieEnter(movie)}
        onMovieLeave={() => onMovieEnter()}
        onMovieCardClick={() => {}}
        isPlaying={true}
      />
  );

  smallMovieCard.simulate(`mouseenter`, `mouseleave`);

  expect(onMovieEnter.mock.calls.length).toBe(1);
  expect(onMovieEnter.mock.calls[0][0]).toMatchObject(movie);
});
