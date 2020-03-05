import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';
import {connect} from "react-redux";
import {ALL_GENRES} from "../../const.js";

const SHOW_PREVIEW_DELAY = 1000;

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
    this.mouseEnterTimer = setTimeout(() => {
      this.setState((prevState) => ({
        activeMovieCard: film,
        isPlaying: !prevState.isPlaying
      }));
    }, SHOW_PREVIEW_DELAY);
  }

  _handleCardLeave() {
    this.setState((prevState) => ({
      activeMovieCard: null,
      isPlaying: !prevState.isPlaying
    }));
    clearTimeout(this.mouseEnterTimer);
  }

  componentWillUnmount() {
    clearTimeout(this.mouseEnterTimer);
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
                onMovieTitleClick={() => {
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

const mapStateToProps = (state) => ({
  films: state.selectedGenre === ALL_GENRES ?
    state.films :
    state.films.filter((film) => film.genre === state.selectedGenre),
  selectedGenre: state.selectedGenre
});

export {MoviesList};
export default connect(mapStateToProps)(MoviesList);
