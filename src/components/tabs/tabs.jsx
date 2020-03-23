import React from "react";
import PropTypes from "prop-types";
import {getComments} from "../../reducer/data/selectors.js";
import {connect} from "react-redux";

const TabName = {
  OVERVIEW: `overview`,
  DETAILS: `details`,
  REVIEWS: `reviews`
};

const getRatingLevel = (ratingScore) => {
  if (ratingScore < 0) {
    throw new Error(`Score can't be negative`);
  }
  if (ratingScore < 3) {
    return `Bad`;
  }
  if (ratingScore < 5) {
    return `Normal`;
  }
  if (ratingScore < 8) {
    return `Good`;
  }
  if (ratingScore < 10) {
    return `Very good`;
  }
  if (ratingScore === 10) {
    return `Awesome`;
  }
  return ``;
};

const formatMovieDuration = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  return `${hours}h ${(`0` + minutes).slice(-2)}m`;
};

const Tabs = (props) => {
  const {movie, activeTab, onTabClick, comments} = props;
  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li
            className={`movie-nav__item ${activeTab === TabName.OVERVIEW ? `movie-nav__item--active` : ``}`}
          >
            <a
              className="movie-nav__link"
              onClick={() => {
                onTabClick(TabName.OVERVIEW);
              }}
            >
                  Overview
            </a>
          </li>
          <li
            className={`movie-nav__item ${activeTab === TabName.DETAILS ? `movie-nav__item--active` : ``}`}
          >
            <a
              className="movie-nav__link"
              onClick={() => {
                onTabClick(TabName.DETAILS);
              }}
            >
                 Details
            </a>
          </li>
          <li
            className={`movie-nav__item ${activeTab === TabName.REVIEWS ? `movie-nav__item--active` : ``}`}
          >
            <a
              className="movie-nav__link"
              onClick={() => {
                onTabClick(TabName.REVIEWS);
              }}
            >
                  Reviews
            </a>
          </li>
        </ul>
      </nav>

      {activeTab === TabName.OVERVIEW && (
        <React.Fragment>
          <div className="movie-rating">
            <div className="movie-rating__score">{movie.ratingScore}</div>
            <p className="movie-rating__meta">
              <span className="movie-rating__level">
                {getRatingLevel(movie.ratingScore)}
              </span>
              <span className="movie-rating__count">
                {movie.ratingCount} ratings
              </span>
            </p>
          </div>

          <div className="movie-card__text">
            <p>{movie.description}</p>

            <p className="movie-card__director">
              <strong>Director: {movie.director}</strong>
            </p>

            <p className="movie-card__starring">
              <strong>
                    Starring: {`${movie.starring.join(`, `)} and other`}
              </strong>
            </p>
          </div>
        </React.Fragment>
      )}

      {activeTab === TabName.DETAILS && (
        <React.Fragment>
          <div className="movie-card__text movie-card__row">
            <div className="movie-card__text-col">
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Director</strong>
                <span className="movie-card__details-value">
                  {movie.director}
                </span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Starring</strong>
                <span className="movie-card__details-value">
                  {movie.starring.map((actor, i) => (
                    <React.Fragment key={actor}>
                      {actor}
                      {i < movie.starring.length - 1 && <React.Fragment>,<br/></React.Fragment> }
                    </React.Fragment>))}
                </span>
              </p>
            </div>
            <div className="movie-card__text-col">
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Run Time</strong>
                <span className="movie-card__details-value">
                  {formatMovieDuration(movie.runTime)}
                </span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Genre</strong>
                <span className="movie-card__details-value">
                  {movie.genre}
                </span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Released</strong>
                <span className="movie-card__details-value">
                  {movie.releaseYear}
                </span>
              </p>
            </div>
          </div>
        </React.Fragment>
      )}
      {activeTab === TabName.REVIEWS && (
        <React.Fragment>
          <div className="movie-card__reviews movie-card__row">
            <div className="movie-card__reviews-col">
              {comments.map((review) => (
                <div className="review" key={review.id}>
                  <blockquote className="review__quote">
                    <p className="review__text">{review.comment}</p>
                    <footer className="review__details">
                      <cite className="review__author">{review.user.name}</cite>
                      <time className="review__date" dateTime="2019-12-15">
                        {review.date}
                      </time>
                    </footer>
                  </blockquote>
                  <div className="review__rating">{review.rating}</div>
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};


Tabs.propTypes = {
  movie: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    runTime: PropTypes.number.isRequired,
    ratingScore: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(
      PropTypes.shape({
        comment: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        user: PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired
        }).isRequired,
      })
  )
};
const mapStateToProps = (state) => ({
  comments: getComments(state)
});


export default connect(mapStateToProps)(Tabs);
