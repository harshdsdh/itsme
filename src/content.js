import React from "react";
const Content = () => {
  return (
    <div className="mainContent" id="content">
      <Blankdiv />
      <MainContent name="Harshit Mishra" />
      <Arrow />
    </div>
  );
};
function MainContent(props) {
  return (
    <div className="contentSection animated-box in">
      <p className="link">
        <span className="contentFirstLine">Hi!, my name is {props.name}.</span>
        <br />i am a Software Developer. who runs on coffee and errors (so
        unique 🤦‍♂️).
        <br />
        check out my{" "}
        <a
          href="https://registry.jsonresume.org/harshdsdh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>{" "}
        to learn more about my Professional Experience. scroll below to see my
        side projects
        <br />
        and feel free to contact me for Job proposal, discussion on a project or
        just to say Hi.
      </p>
    </div>
  );
}
function Arrow() {
  return (
    <a className="arrowlink" href="#projects">
      <div className="arrow-down" />
    </a>
  );
}
function Blankdiv() {
  return <div />;
}
export default Content;
