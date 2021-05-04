import React from "react";
import Header from "./Header/Header";
import AboutSection from "./AboutSection/AboutSection";
import Education from "./Education/Education";

import './app.scss';

const App = () => {
  return (
    <div>
      <Header />
      <AboutSection />
      <Education />
    </div>
  );
};

export default App;