import React, {PureComponent} from "react";
import {ReviewLength} from "../../const.js";

const withFormValidation = (Component) => {
  class WithFormValidation extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isFormInvalid: true
      };

      this._handleTextareaChange = this._handleTextareaChange.bind(this);
    }

    _handleTextareaChange({target: {value}}) {
      this.setState({
        isFormInvalid:
          value.length < ReviewLength.MIN || value.length > ReviewLength.MAX
      });
    }

    render() {
      const {isFormInvalid} = this.state;

      return (
        <Component
          {...this.props}
          isFormInvalid={isFormInvalid}
          onTextareaChange={this._handleTextareaChange}
        />
      );
    }
  }

  return WithFormValidation;
};

export default withFormValidation;
