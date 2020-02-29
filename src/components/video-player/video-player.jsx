import React, {PureComponent, createRef} from 'react';
import propTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
  }

  componentDidMount() {
    const video = this._videoRef.current;

    // play - undefined in Node js
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
        muted={true}
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
