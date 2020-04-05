import React, {createRef} from "react";
import PropTypes from "prop-types";

const FullVideoPlayer = (props) => {
  const {
    videoRef,
    movie,
    autoPlay,
    isPlaying,
    onPlayButtonClick,
    onFullscreenButtonClick,
    getProgress,
    getElapsedTime,
    onLoadedMetadata,
    onTimeUpdate,
    onExitButtonClick
  } = props;

  const playerRef = createRef();

  return (
    <div className="player" ref={playerRef}>
      <video
        className="player__video"
        ref={videoRef}
        poster={movie.poster}
        src={movie.previewUrl}
        width="100%"
        autoPlay={autoPlay}
        onClick={onPlayButtonClick}
        onLoadedMetadata={onLoadedMetadata}
        onTimeUpdate={onTimeUpdate}
      />
      <button
        type="button"
        className="player__exit"
        onClick={onExitButtonClick}
      >
          Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={getProgress()}
              max="100"
            />
            <div
              className="player__toggler"
              style={{left: `${getProgress()}%`}}
            >
                Toggler
            </div>
          </div>
          <div className="player__time-value"> {getElapsedTime()}</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={onPlayButtonClick}
          >
            {isPlaying ? (
              <React.Fragment>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </React.Fragment>
            )}
          </button>
          <div className="player__name">{movie.title}</div>
          <button
            type="button"
            className="player__full-screen"
            onClick={() => onFullscreenButtonClick(playerRef.current)}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};


FullVideoPlayer.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    bgPosterUrl: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired
  }).isRequired,
  autoPlay: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onFullscreenButtonClick: PropTypes.func.isRequired,
  getProgress: PropTypes.func.isRequired,
  getElapsedTime: PropTypes.func.isRequired,
  videoRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.instanceOf(Element)})
  ]).isRequired,
  onLoadedMetadata: PropTypes.func.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
};

export default FullVideoPlayer;
