//@ts-check

import React from "react";
import GhibliFilms from "./GhibliFilms";
import ClevelandMuseum from "./ClevelandMuseum";

const App = () => {
  return (
    <div>
      <h1>Studio Ghibli films:</h1>
      <GhibliFilms />
      <h1>Cleveland Museum </h1>
      <ClevelandMuseum />
    </div>
    
  )
}

export default App
