import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

// eslint-disable-next-line react/prop-types
const App = ({promoName, promoGenre, promoYear, filmsTitle}) => (
  <Main promoName={promoName} promoGenre={promoGenre} promoYear={promoYear} filmsTitle={filmsTitle} />
);

App.propTypes = {
  promoName: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoYear: PropTypes.number.isRequired,
  filmsTitle: PropTypes.array.isRequired
};

export default App;
