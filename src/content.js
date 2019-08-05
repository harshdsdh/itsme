import React from "react";
const Content = () => {
  return (
    <div className="mainContent" id="content">
      <MainContent />
    </div>
  );
};
function MainContent(props) {
  return (
    <div className="contentSection">
      <h1 className="first">
        Harshit Mishra
        <br />
        <span className="second">Web Developer</span>
      </h1>
      <p className="content-text">Full-Stack Web Development</p>
    </div>
  );
}

export default Content;
