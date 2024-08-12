import Slider from "react-slick";
import React from "react";
import skills from "../list/skills";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerPadding: "20px",
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index} className="">
            <img src={skill.imgPath} className="w-56" alt={skill.name} />
            <p className="text-lg">{skill.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
