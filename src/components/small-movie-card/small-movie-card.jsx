import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from "../video-player/video-player.jsx";


const SmallMovieCard = (props) => {
  const {film, onMovieEnter, onMovieLeave, onMovieTitleClick, isPlaying, activeMovieCard} = props;
  const {title, poster} = film;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        onMovieEnter(film);
      }}
      onMouseLeave={() => {
        onMovieLeave();
      }}
      onClick={onMovieTitleClick}
    >
      <div className="small-movie-card__image">
        {isPlaying ?
          <VideoPlayer film={film} muted={true} isPlaying={activeMovieCard === film} /> :
          <img
            src={poster}
            alt={title}
            width="280"
            height="175"
          />}
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
  film: (PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  })),
  isPlaying: PropTypes.bool.isRequired,
  activeMovieCard: PropTypes.number.isRequired,
};

export default SmallMovieCard;
