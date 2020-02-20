import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const movieTitleClickHandler = () => {};

const App = (props) => {
  const {promoTitle, promoGenre, promoYear, films} = props;

  return (
    <Main
      promoTitle={promoTitle}
      promoGenre={promoGenre}
      promoYear={promoYear}
      onMovieTitleClick={movieTitleClickHandler}
      films={films} />
  );
};

App.propTypes = {
  promoTitle: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoYear: PropTypes.number.isRequired,
  films: PropTypes.array.isRequired
};

export default App;
