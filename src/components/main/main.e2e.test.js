import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const PromoData = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014
};

const films = [
  {
    title: `Some title`,
    poster: `1.jpg`,
    previewUrl: `https://preview-url.com/1.mp4`
  },
  {
    title: `Some title`,
    poster: `1.jpg`,
    previewUrl: `https://preview-url.com/1.mp4`
  },
  {
    title: `Some title`,
    poster: `1.jpg`,
    previewUrl: `https://preview-url.com/1.mp4`
  },
  {
    title: `Some title`,
    poster: `1.jpg`,
    previewUrl: `https://preview-url.com/1.mp4`
  },
  {
    title: `Some title`,
    poster: `1.jpg`,
    previewUrl: `https://preview-url.com/1.mp4`
  },
  {
    title: `Some title`,
    poster: `1.jpg`,
    previewUrl: `https://preview-url.com/1.mp4`
  },
  {
    title: `Some title`,
    poster: `1.jpg`,
    previewUrl: `https://preview-url.com/1.mp4`
  },
  {
    title: `Some title`,
    poster: `1.jpg`,
    previewUrl: `https://preview-url.com/1.mp4`
  }
];


it(`should call a callback when the movie title is pressed`, () => {
  const onMovieTitleClick = jest.fn();

  const main = mount(
      <Main
        promoTitle={PromoData.TITLE}
        promoGenre={PromoData.GENRE}
        promoYear={PromoData.YEAR}
        films={films}
        onMovieTitleClick={onMovieTitleClick}
      />
  );

  const moviesTitle = main.find(`article.small-movie-card.catalog__movies-card`);

  moviesTitle.forEach((title) => {
    title.props().onClick();
  });

  expect(onMovieTitleClick.mock.calls.length).toBe(moviesTitle.length);
  expect(moviesTitle.length).toEqual(films.length);
});
