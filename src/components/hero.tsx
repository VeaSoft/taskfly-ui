import React from "react";
import { Link } from "react-router-dom";

interface HeroProps {
  backgroundImage: string;
  heroText: string;
  heroDetail: string;
  buttonText: string;
  fontSize?: string;
  buttonColor?: string;
  buttonSize?: string;
  to?: string;
}

const Hero = ({
  backgroundImage,
  heroText,
  heroDetail,
  buttonText,
  fontSize = "text-2xl", // Default font size
  buttonColor = "bg-[#05149D]", // Default button color
  buttonSize = "px-4 py-2", // Default button size
  to,
}: HeroProps) => {
  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const textStyles = `text-white ${fontSize}`;

  const buttonStyles = `${buttonColor} text-white rounded ${buttonSize}`;

  const button = to ? (
    <Link to={to}>
      <button className={buttonStyles}>{buttonText}</button>
    </Link>
  ) : (
    <button className={buttonStyles} onClick={() => console.log("Button clicked")}>
      {buttonText}
    </button>
  );

  return (
    <div
      className="w-full gap-3 flex flex-col lg:flex-row justify-center items-center h-[300px] lg:h-[700px]"
      style={backgroundStyles}
    >
      <div className="mt-5 lg:m-6 m-3 gap-8 text-center items-center justify-center place-content-center flex flex-col">
        <h1 className={textStyles + " font-bold lg:text-[64px]"}>{heroText}</h1>
        <p className={`w-4/5 ${textStyles} text-center flex lg:text-xl`}>
          {heroDetail}
        </p>
        {button}
      </div>
    </div>
  );
};

export default Hero;
