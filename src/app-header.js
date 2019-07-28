import React from "react";
const AppHeader = () => {
  return (
    <div className="mainHeader">
      <HeaderName name="Harshit Mishra" />
      <ContactLinks
        link0="My Resume"
        link1="About Me"
        link2="Projects"
        link3="Contact Me"
      />
    </div>
  );
};
function HeaderName(props) {
  return (
    <h1 className="mainName link">
      {" "}
      <a href="/">{props.name}</a>
    </h1>
  );
}

function ContactLinks(props) {
  return (
    <ul className="link">
      <li>
        <a
          href="https://registry.jsonresume.org/harshdsdh"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.link0}
        </a>
      </li>
      <li>
        <a href="#content">{props.link1}</a>
      </li>
      <li>
        <a href="#projects">{props.link2}</a>
      </li>
      <li>
        <a href="#Footer">{props.link3}</a>
      </li>
    </ul>
  );
}
export default AppHeader;
