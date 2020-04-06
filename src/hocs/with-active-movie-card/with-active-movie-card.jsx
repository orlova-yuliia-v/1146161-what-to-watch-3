import React, {PureComponent} from "react";

const SHOW_PREVIEW_DELAY = 1000;

const withActiveMovieCard = (Component) => {
  class WithActiveMovieCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false
      };

      this._handleCardEnter = this._handleCardEnter.bind(this);
      this._handleCardLeave = this._handleCardLeave.bind(this);
    }

    componentWillUnmount() {
      clearTimeout(this.mouseEnterTimer);
    }

    _handleCardEnter() {
      this.mouseEnterTimer = setTimeout(() => {
        this.setState(() => ({
          isPlaying: true
        }));
      }, SHOW_PREVIEW_DELAY);
    }

    _handleCardLeave() {
      this.setState(() => ({
        isPlaying: false
      }));
      clearTimeout(this.mouseEnterTimer);
    }

    render() {
      const {isPlaying} = this.state;
      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          onMovieEnter={this._handleCardEnter}
          onMovieLeave={this._handleCardLeave}
        >
        </Component>
      );
    }
  }

  return WithActiveMovieCard;
};

export default withActiveMovieCard;
