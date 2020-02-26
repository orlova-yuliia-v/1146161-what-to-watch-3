import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';


class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovieCard: null,
      isPlaying: false
    };

    this._handleCardEnter = this._handleCardEnter.bind(this);
    this._handleCardLeave = this._handleCardLeave.bind(this);
  }

  _handleCardEnter(film) {
    this.setState((prevState) => ({
      activeMovieCard: film,
      isPlaying: !prevState.isPlaying
    }));
  }

  _handleCardLeave() {
    this.setState((prevState) => ({
      activeMovieCard: null,
      isPlaying: !prevState.isPlaying
    }));
  }

  render() {
    const {films, onMovieTitleClick} = this.props;
    const {activeMovieCard} = this.state;

    return (
      <div className="catalog__movies-list">
        {
          films.map((film, i) => {
            return (
              <SmallMovieCard
                key={`film-${i}`}
                film={film}
                onMovieEnter={this._handleCardEnter}
                onMovieLeave={this._handleCardLeave}
                onMovieTitleClick={(evt) => {
                  evt.preventDefault();
                  onMovieTitleClick(film);
                }}
                isPlaying={activeMovieCard === film}
              />
            );
          })
        }
      </div>
    );
  }
}

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  })
  ),
  onMovieTitleClick: PropTypes.func.isRequired,
};

export default MoviesList;
