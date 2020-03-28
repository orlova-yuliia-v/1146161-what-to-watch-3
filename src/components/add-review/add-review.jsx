import React, {PureComponent, createRef} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getSelectedMovie} from "../../reducer/state/selectors.js";
import {getAuthUser} from "../../reducer/user/selectors.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {ReviewLength} from "../../utils.js";
import {Redirect} from "react-router-dom";

class AddReview extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      commentAdded: false,
      isFormInvalid: true
    };

    this.submitFormRef = createRef();
    this.commentRef = createRef();
    this.sendCommentButtonRef = createRef();

    this._handleFormReviewSubmit = this._handleFormReviewSubmit.bind(this);
    this._handleTextareaChange = this._handleTextareaChange.bind(this);
  }

  _handleFormReviewSubmit(evt) {
    const {onSubmit} = this.props;
    evt.preventDefault();
    onSubmit({
      movieId: this.props.movie.id,
      rating: this.submitFormRef.current.rating.value,
      comment: this.commentRef.current.value
    });
    this.setState({
      commentAdded: true
    });
  }

  _handleTextareaChange(evt) {
    this.setState({
      isFormInvalid:
        evt.target.value.length < ReviewLength.MIN ||
        evt.target.value.length > ReviewLength.MAX
    });
  }

  render() {
    const {movie, authUserData} = this.props;

    return (
      <React.Fragment>
        {(this.state.commentAdded || !this.props.movie) && <Redirect to="/" />}
        <section className="movie-card movie-card--full">
          <div className="movie-card__header">
            <div className="movie-card__bg">
              <img src={movie.bgPosterUrl} alt={movie.title} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header">
              <div className="logo">
                <a href="main.html" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>

              <nav className="breadcrumbs">
                <ul className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <a href="movie-page.html" className="breadcrumbs__link">
                      {movie.title}
                    </a>
                  </li>
                  <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link">Add review</a>
                  </li>
                </ul>
              </nav>

              <div className="user-block">
                <div className="user-block__avatar">
                  <div className="user-block__avatar">
                    <img
                      src={`https://htmlacademy-react-3.appspot.com/${authUserData.avatarUrl}`}
                      alt={authUserData.name}
                      width="63"
                      height="63"
                    />
                  </div>
                </div>
              </div>
            </header>

            <div className="movie-card__poster movie-card__poster--small">
              <img
                src={movie.poster}
                alt={movie.title}
                width="218"
                height="327"
              />
            </div>
          </div>

          <div className="add-review">
            <form
              action="#"
              className="add-review__form"
              onSubmit={this._handleFormReviewSubmit}
              ref={this.submitFormRef}
            >
              <div className="rating">
                <div className="rating__stars">
                  <input
                    className="rating__input"
                    id="star-1"
                    type="radio"
                    name="rating"
                    value="1"
                  />
                  <label className="rating__label" htmlFor="star-1">
                Rating 1
                  </label>

                  <input
                    className="rating__input"
                    id="star-2"
                    type="radio"
                    name="rating"
                    value="2"
                  />
                  <label className="rating__label" htmlFor="star-2">
                Rating 2
                  </label>

                  <input
                    className="rating__input"
                    id="star-3"
                    type="radio"
                    name="rating"
                    value="3"
                    defaultChecked
                  />
                  <label className="rating__label" htmlFor="star-3">
                Rating 3
                  </label>

                  <input
                    className="rating__input"
                    id="star-4"
                    type="radio"
                    name="rating"
                    value="4"
                  />
                  <label className="rating__label" htmlFor="star-4">
                Rating 4
                  </label>

                  <input
                    className="rating__input"
                    id="star-5"
                    type="radio"
                    name="rating"
                    value="5"
                  />
                  <label className="rating__label" htmlFor="star-5">
                Rating 5
                  </label>
                </div>
              </div>

              <div className="add-review__text">
                <textarea
                  className="add-review__textarea"
                  name="review-text"
                  id="review-text"
                  placeholder="Review text"
                  ref={this.commentRef}
                  minLength={ReviewLength.MIN}
                  maxLength={ReviewLength.MAX}
                  onChange={this._handleTextareaChange}
                />
                <div className="add-review__submit">
                  <button
                    className="add-review__btn"
                    type="submit"
                    ref={this.sendCommentButtonRef}
                    disabled={this.state.isFormInvalid}>
                Post
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  movie: getSelectedMovie(state),
  authUserData: getAuthUser(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(commentData) {
    dispatch(DataOperation.addComment(commentData));
  }
});

AddReview.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    bgPosterUrl: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired
  }).isRequired,
  authUserData: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatarUrl: PropTypes.string
  }).isRequired,
  onSubmit: PropTypes.func.isRequired
};

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
