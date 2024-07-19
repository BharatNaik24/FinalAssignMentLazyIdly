import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageStyle = {
  width: "100%",
  height: "550px",
  display: "block",
  margin: "0 auto", // Center the image horizontally
};

const sliderWrapperStyle = {
  width: "94%", // Adjust this value to set the desired width
  margin: "0 auto", // Center the slider horizontally
  height: "63.5vh",
  padding: "1px",
};

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div style={sliderWrapperStyle}>
      <Slider {...settings}>
        <div>
          <img
            src="https://raw.githubusercontent.com/LazyIdli-SoftwareTeam/internshal_project_software/master/assets/BANER-SHANNH%201.png"
            alt="p1"
            style={imageStyle}
          />
        </div>
        <div>
          <img
            src="https://www.wsupercars.com/wallpapers-wide/Formula-1/Scuderia-Ferrari/2024-Formula1-Ferrari-SF-24-010-1440w.jpg"
            alt="p2"
            style={imageStyle}
          />
        </div>
        <div>
          <img
            src="https://www.wsupercars.com/wallpapers-wide/Formula-1/Scuderia-Ferrari/2024-Formula1-Ferrari-SF-24-006-1440w.jpg"
            alt="p3"
            style={imageStyle}
          />
        </div>
        <div>
          <img
            src="https://images.immediate.co.uk/production/volatile/sites/3/2023/10/Most-F1-points-season-904e4b1.jpg?quality=90&webp=true&resize=750,500"
            alt="p4"
            style={imageStyle}
          />
        </div>
      </Slider>
    </div>
  );
}
