import React from "react";
import HeadingText from "./components/HeadingText";
import "./App.css";
import Squares from "./components/libs/Squares";
import logo from "./assets/idealab.png";
import ImageSwitcher from "./components/ImageSwitcher";

const App = () => {
  return (
    <div className="main-container">
      <Squares
        speed={0.5}
        squareSize={30}
        direction="diagonal"
        borderColor="#212529"
        hoverFillColor="#495057"
      />
      <img className="idea-logo" src={logo} alt="IdeaLab Logo" />
      <HeadingText />
      <ImageSwitcher />
    </div>
  );
};

export default App;
