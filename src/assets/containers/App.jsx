import React from "react";
import "../sass/base/App.scss";

import Main from "../../components/Main";
import Header from "../../components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
};

export default App;
