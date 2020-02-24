import React, {PureComponent, Fragment} from 'react';
import propTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: this.props.isPlaying
    };
  }

  componentDidMount() {
    const {previewUrl} = this.props;
    this._video.previewUrl = previewUrl;

    this._video = new Video(previewUrl);

    this._video.onplay = () => {
      this.setState({
        isPlaying: true
      });
    };

    this._video.onpause = () => {
      this.setState({
        isPlaying: false
      });
    };
  }

  componentWillUnmount() {
    this._video.onplay = null;
    this._video.onpause = null;
    this._video.previewUrl = ``;
    this._video = null;
  }

  render() {
    const {poster, previewUrl} = this.props;

    return (
      <Fragment>
        <video
          poster={poster}
          src={previewUrl}
          muted={true}
          width="280"
          height="175"
        />
      </Fragment>
    );
  }


  componentDidUpdate() {
    if (this.state.isPlaying) {
      this._video.play();
    } else {
      this._video.pause();
    }
  }
}
VideoPlayer.propTypes = {
  previewUrl: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  isPlaying: propTypes.bool.isRequired
};

export default VideoPlayer;
