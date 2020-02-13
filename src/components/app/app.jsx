import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const movieTitleHandler = () => {};

const App = ({promoName, promoGenre, promoYear, filmsTitle}) => (
  <Main promoName={promoName} promoGenre={promoGenre} promoYear={promoYear} filmsTitle={filmsTitle} onMovieTitleClick={movieTitleHandler} />
);

App.propTypes = {
  promoName: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoYear: PropTypes.number.isRequired,
  filmsTitle: PropTypes.array.isRequired
};

export default App;
