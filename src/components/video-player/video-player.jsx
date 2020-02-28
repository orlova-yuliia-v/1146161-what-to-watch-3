import React, {PureComponent, createRef} from 'react';
import propTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
  }

  componentDidMount() {
    const video = this._videoRef.current;
    video.muted = true; // https://github.com/facebook/react/issues/10389
    if (this.props.isPlaying) {
      video.play();
    }
  }

  render() {
    const {poster, previewUrl} = this.props;

    return (
      <video ref={this._videoRef}
        poster={poster}
        src={previewUrl}
        width="280"
        height="175"
      />
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }
}
VideoPlayer.propTypes = {
  previewUrl: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  isPlaying: propTypes.bool.isRequired
};

export default VideoPlayer;
