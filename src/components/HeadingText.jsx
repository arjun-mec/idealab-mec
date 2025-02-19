import React from "react";
import "../styles/HeadingText.css";
import BlurText from "./libs/BlurText";

const HeadingText = () => {
  return (
    <div>
      <BlurText
        text="IDEALAB MEC"
        delay={75}
        animateBy="letters"
        direction="top"
        className="heading-text"
      />
    </div>
  );
};

export default HeadingText;
