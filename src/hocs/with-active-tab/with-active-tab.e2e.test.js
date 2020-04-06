import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveTab from "./with-active-tab.jsx";
import {TabName} from "../../const.js";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveTab(MockComponent);

const movie = [
  {
    title: `Some title`,
    poster: `1.jpg`,
    bgPosterUrl: `https://image-url.com/1.jpg`,
    genre: `Some genre`,
    releaseYear: 2020,
    director: `Director name`,
    actors: [`Actor 1`, `Actor 2`, `Actor 3`, `Actor 4`, `Actor 5`],
    runTime: 2,
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


it(`should change tab on click`, () => {
  const wrapper = mount(<MockComponentWrapped
    movie={movie}
  />);

  const mockComponent = wrapper.find(MockComponent);
  mockComponent.props().onTabClick(TabName.DETAILS);

  expect(wrapper.state().activeTab).toBe(TabName.DETAILS);
});
