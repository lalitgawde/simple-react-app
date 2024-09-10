import React from "react";
import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescription = ["Core", "Crucial", "Essential", "Fundamental"];

const genRandomGenerate = (max) => {
  return Math.floor(Math.random() * max);
};

function Header(props) {
  const description =
    reactDescription[genRandomGenerate(reactDescription.length)];
  return (
    <div>
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    </div>
  );
}

export default Header;
