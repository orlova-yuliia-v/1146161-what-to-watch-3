import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const TabName = {
  OVERVIEW: `overview`,
  DETAILS: `details`,
  REVIEWS: `reviews`
};

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: TabName.OVERVIEW
    };

    this._getActiveTabClass = this._getActiveTabClass.bind(this);
  }

  _handleTabClick(tabName) {
    this.setState({activeTab: tabName});
  }

  _getActiveTabClass(tabName) {
    return this.state.activeTab === tabName ? `movie-nav__item--active` : ``;
  }

  _getRatingLevel(ratingScore) {
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
  }

  render() {
    const {film} = this.props;
    const {activeTab} = this.state;

    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            <li
              className={`movie-nav__item ${this._getActiveTabClass(
                  TabName.OVERVIEW
              )}`}
            >
              <a
                className="movie-nav__link"
                onClick={() => {
                  this._handleTabClick(TabName.OVERVIEW);
                }}
              >
                  Overview
              </a>
            </li>
            <li
              className={`movie-nav__item ${this._getActiveTabClass(
                  TabName.DETAILS
              )}`}
            >
              <a
                className="movie-nav__link"
                onClick={() => {
                  this._handleTabClick(TabName.DETAILS);
                }}
              >
                 Details
              </a>
            </li>
            <li
              className={`movie-nav__item ${this._getActiveTabClass(
                  TabName.REVIEWS
              )}`}
            >
              <a
                className="movie-nav__link"
                onClick={() => {
                  this._handleTabClick(TabName.REVIEWS);
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
              <div className="movie-rating__score">{film.ratingScore}</div>
              <p className="movie-rating__meta">
                <span className="movie-rating__level">
                  {this._getRatingLevel(film.ratingScore)}
                </span>
                <span className="movie-rating__count">
                  {film.ratingCount} ratings
                </span>
              </p>
            </div>

            <div className="movie-card__text">
              <p>{film.description}</p>

              <p className="movie-card__director">
                <strong>Director: {film.director}</strong>
              </p>

              <p className="movie-card__starring">
                <strong>
                    Starring: {`${film.starring.join(`, `)} and other`}
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
                    {film.director}
                  </span>
                </p>
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Starring</strong>
                  <span className="movie-card__details-value">
                    {film.starring.map((actor, i) => (
                      <React.Fragment key={i}>
                        {`${actor}, `} <br/>
                      </React.Fragment>))}
                  </span>
                </p>
              </div>
              <div className="movie-card__text-col">
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Run Time</strong>
                  <span className="movie-card__details-value">
                    {film.runTime}
                  </span>
                </p>
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Genre</strong>
                  <span className="movie-card__details-value">
                    {film.genre}
                  </span>
                </p>
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Released</strong>
                  <span className="movie-card__details-value">
                    {film.releaseYear}
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
                {film.reviews.map((review, index) => (
                  <div className="review" key={index + review.author}>
                    <blockquote className="review__quote">
                      <p className="review__text">{review.text}</p>
                      <footer className="review__details">
                        <cite className="review__author">{review.author}</cite>
                        <time className="review__date" dateTime="2019-12-15">
                          {review.date}
                        </time>
                      </footer>
                    </blockquote>
                    <div className="review__rating">{review.ratingScore}</div>
                  </div>
                ))}
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

Tabs.propTypes = {
  film: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    runTime: PropTypes.string.isRequired,
    ratingScore: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
          ratingScore: PropTypes.number.isRequired,
          date: PropTypes.string.isRequired,
          author: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired
        })
    ).isRequired
  }).isRequired
};
export default Tabs;
