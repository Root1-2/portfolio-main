import Slider from "react-slick";
import React from "react";
import skills from "../list/skills";

function Carousel() {
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // variableWidth: true,
  };
  return (
    <div className="gap-10">
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index} className="gap-10">
            <div>
              <img src={skill.imgPath} className="w-52" alt={skill.name} />
            </div>
            <p className="mt-5 text-center">{skill.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
