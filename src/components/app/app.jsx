import React from "react";
import Main from "../main/main.jsx";

// eslint-disable-next-line react/prop-types
const App = ({promoName, promoGenre, promoYear}) => (
  <Main promoName={promoName} promoGenre={promoGenre} promoYear={promoYear} />
);

export default App;
