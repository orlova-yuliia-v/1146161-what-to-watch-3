import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from "../video-player/video-player.jsx";

const SmallMovieCard = (props) => {
  const {movie, onMovieEnter, onMovieLeave, onMovieTitleClick, isPlaying} = props;
  const {title, poster, previewUrl} = movie;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        onMovieEnter();
      }}
      onMouseLeave={() => {
        onMovieLeave();
      }}
      onClick={onMovieTitleClick}
    >
      <div className="small-movie-card__image">
        {isPlaying ?
          <VideoPlayer poster={poster} previewUrl={previewUrl} isPlaying={true} /> :
          <img src={poster} width="280" height="175" />
        }
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  onMovieEnter: PropTypes.func.isRequired,
  onMovieLeave: PropTypes.func.isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
  movie: (PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired
  })),
  isPlaying: PropTypes.bool.isRequired
};

export default SmallMovieCard;
