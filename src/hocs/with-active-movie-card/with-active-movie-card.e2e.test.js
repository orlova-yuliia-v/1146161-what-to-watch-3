import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveMovieCard from "./with-active-movie-card.jsx";

const SHOW_PREVIEW_DELAY = 1000;

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveMovieCard(MockComponent);

const film = [
  {
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
  }
];


it(`should change state of property "isPlaying" on mouseenter/mouseleave`, (done) => {
  const wrapper = mount(<MockComponentWrapped
    film={film}
    onMovieTitleClick={() => {}}
  />);

  const mockComponent = wrapper.find(MockComponent);
  mockComponent.props().onMovieEnter();
  setTimeout(() => {
    expect(wrapper.state().isPlaying).toBe(true);
    done();
  }, SHOW_PREVIEW_DELAY);
});
