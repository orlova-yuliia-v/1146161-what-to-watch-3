import React from "react";
import renderer from "react-test-renderer";
import withFormValidation from "./with-form-validation.jsx";

const MockComponent = () => <div />;

const MockComponentWrapped = withFormValidation(MockComponent);

it(`should render withFormValidation HOC correctly`, () => {
  const tree = renderer
  .create(
      <
        MockComponentWrapped
        id={0}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
