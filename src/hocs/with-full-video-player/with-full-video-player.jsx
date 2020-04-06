import React, {createRef} from "react";
import PropTypes from "prop-types";
import {formatPlayerTime} from "../../utils.js";

const withFullVideoPlayer = (Component) => {
  class WithFullVideoPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        isPlaying: false,
        videoDuration: 0,
        currentTime: 0
      };

      this._handleVideoPlay = this._handleVideoPlay.bind(this);
      this._handleFullscreen = this._handleFullscreen.bind(this);
      this._getProgress = this._getProgress.bind(this);
      this._getElapsedTime = this._getElapsedTime.bind(this);
      this._handleMetadataLoad = this._handleMetadataLoad.bind(this);
      this._handleTimeUpdate = this._handleTimeUpdate.bind(this);
    }

    _handleVideoPlay() {
      const video = this._videoRef.current;
      if (video.paused) {
        video.play();
        this.setState({isPlaying: true});
      } else {
        video.pause();
        this.setState({isPlaying: false});
      }
    }

    _handleFullscreen(player) {
      if (document.fullscreenElement === player) {
        document.exitFullscreen();
      }
      player.requestFullscreen();
    }

    _getProgress() {
      return String((this.state.currentTime / this.state.videoDuration) * 100);
    }

    _getElapsedTime() {
      const diff = this.state.videoDuration - this.state.currentTime;
      return formatPlayerTime(diff);
    }

    _handleTimeUpdate(evt) {
      this.setState({
        currentTime: Math.floor(evt.target.currentTime)
      });
    }

    _handleMetadataLoad(evt) {
      this.setState({
        isPlaying: this.props.autoPlay,
        videoDuration: Math.floor(evt.target.duration)
      });
    }

    render() {
      const {onExitButtonClick} = this.props;
      const {isPlaying} = this.state;

      return (
        <Component
          {...this.props}
          videoRef={this._videoRef}
          isPlaying={isPlaying}
          onPlayButtonClick={this._handleVideoPlay}
          onFullscreenButtonClick={this._handleFullscreen}
          getProgress={this._getProgress}
          getElapsedTime={this._getElapsedTime}
          onLoadedMetadata={this._handleMetadataLoad}
          onTimeUpdate={this._handleTimeUpdate}
          onExitButtonClick={onExitButtonClick}
        />
      );
    }
  }

  WithFullVideoPlayer.propTypes = {
    autoPlay: PropTypes.bool.isRequired,
    onExitButtonClick: PropTypes.func.isRequired
  };

  return WithFullVideoPlayer;
};

export default withFullVideoPlayer;
