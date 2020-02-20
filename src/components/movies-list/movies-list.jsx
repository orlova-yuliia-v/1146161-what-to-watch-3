import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';


class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovieCard: null
    };

    this._handleCardEnter = this._handleCardEnter.bind(this);
    this._handleCardLeave = this._handleCardLeave.bind(this);
  }

  _handleCardEnter(film) {
    this.setState(
        {activeMovieCard: film}
    );
  }
  _handleCardLeave() {
    this.setState(
        {activeMovieCard: null}
    );
  }

  render() {

    const {films, onMovieTitleClick} = this.props;

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
                onMovieTitleClick={() => onMovieTitleClick(film)}
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
  onMovieTitleClick: PropTypes.func.isRequired
};

export default MoviesList;
