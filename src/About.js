import React from "react";
const About = () => {
  return (
    <div className="mainAbout" id="about">
      <MainAbout />
    </div>
  );
};
function MainAbout(props) {
  return (
    <div className="about-Text">
      <h1 className="aos-init aos-animate" data-aos="zoom-in">
        About
      </h1>
      <p className="about-para aos-init aos-animate" data-aos="fade-right">
        Hi! i'm Harshit, a full stack web develper with 2.5 years of
        professional experience. i aim to write clean, concise resuable code
        with an aim to deliver tasks a day before deadline merging speed with
        accuracy.
      </p>
      <p className="about-para aos-init aos-animate" data-aos="fade-left">
        My skill set ranges from Vanilla JS, Jquery to React and Vue. i have
        written backend scripts using node, expressJS and mongoDB. Apart from
        JavaScript i am extremely efficient with Python and C++. Along with
        Front-end work over the years i have done many projects using Data
        Mining, Machine Learning and Deep Learning
      </p>
      <p className="about-para aos-init aos-animate" data-aos="fade-right">
        when i am not coding either i am going through front end masters
        tutorials or reading an actual book (no Kindle). on weekends you can
        find me in my kitchen doing unexplainiable things by mixing and matching
        different cuisines.
      </p>
    </div>
  );
}

export default About;
