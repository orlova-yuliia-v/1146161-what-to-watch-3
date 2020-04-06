import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from "../video-player/video-player.jsx";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const.js";

const SmallMovieCard = (props) => {
  const {movie, onMovieEnter, onMovieLeave, onMovieCardClick, isPlaying} = props;
  const {id, title, poster, previewUrl} = movie;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        onMovieEnter();
      }}
      onMouseLeave={() => {
        onMovieLeave();
      }}
      onClick={onMovieCardClick}
    >
      <div className="small-movie-card__image">
        {isPlaying ?
          <VideoPlayer poster={poster} previewUrl={previewUrl} isPlaying={true} /> :
          <img src={poster} width="280" height="175" />
        }
      </div>
      <h3 className="small-movie-card__title">
        <Link to={`${AppRoute.FILMS}/${id}`} className="small-movie-card__link">{title}</Link>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  onMovieEnter: PropTypes.func.isRequired,
  onMovieLeave: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
  movie: (PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired
  })),
  isPlaying: PropTypes.bool.isRequired
};

export default SmallMovieCard;
