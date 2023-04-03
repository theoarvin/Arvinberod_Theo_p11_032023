import React, { useEffect, useState } from "react";
import nextLogo from "../assets/img/next.png";
import previousLogo from "../assets/img/previous.png";

const Slide = ({ images }) => {
  const [dataImage, setDataImage] = useState(images);
  const [count, setcount] = useState(0);

  useEffect(() => {
    const slide1 = document.querySelector(`.slide${count}`);
    slide1.classList.add("active");
  });

  const handleCountNext = () => {
    const slide = document.querySelector(`.slide${count}`);
    if (count < dataImage.length - 1) {
      setcount(count + 1);
    } else {
      setcount(0);
    }
    slide.classList.remove("active");
  };

  const handleCountPrevious = () => {
    const slide = document.querySelector(`.slide${count}`);
    if (count > 0) {
      setcount(count - 1);
    } else {
      setcount(dataImage.length - 1);
    }
    slide.classList.remove("active");
  };

  return (
    <div className="slideBlock">
      {dataImage.map((i, index) => (
        <div className={`slide slide${index}`} key={index}>
          <img src={i} alt="slide" />
          {dataImage.length > 1 && (
            <span className="count-slide">
              {index + 1}/{dataImage.length}{" "}
            </span>
          )}
        </div>
      ))}

      {dataImage.length > 1 && (
        <>
          <span className="previous" onClick={handleCountPrevious}>
            <img src={previousLogo} alt="" />
          </span>
          <span className="next" onClick={handleCountNext}>
            <img src={nextLogo} alt="" />
          </span>
        </>
      )}
    </div>
  );
};

export default Slide;
