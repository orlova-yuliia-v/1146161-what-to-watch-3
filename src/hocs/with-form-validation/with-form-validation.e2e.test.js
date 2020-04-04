import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withFormValidation from "./with-form-validation.jsx";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withFormValidation(MockComponent);

it(`Should check form validation depending on input value length`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.props().isFormInvalid).toEqual(true);

  wrapper.instance()._handleTextareaChange({
    target: {
      value: `Some text. Some text. Some text. Some text. Some text. Some text. Some text.`
    }
  });

  expect(wrapper.props().isFormInvalid).toEqual(false);

  wrapper.instance()._handleTextareaChange({
    target: {
      value: `Some text.`
    }
  });

  expect(wrapper.props().isFormInvalid).toEqual(true);
});
