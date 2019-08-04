import React from "react";
const Projects = () => {
  return (
    <div className="projects" id="projects">
      <ProjectsHeading heading="Projects" />
      <div className="projectcontent">
        <ProjectContent num="1" />
      </div>
    </div>
  );
};
function ProjectsHeading(props) {
  return (
    <div className="project-title">
      <h1>{props.heading}</h1>
    </div>
  );
}
function ProjectContent(props) {
  return (
    <div>
      <ul className="projlist">
        <li>
          Designed a{" "}
          <a
            href="https://harshdsdh.github.io/adopt-me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pet adoption
          </a>{" "}
          app in React.
        </li>
        <li>
          Designed my{" "}
          <a
            href="https://harshdsdh.github.io/itsme/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>{" "}
          in React.
        </li>
        <li>
          Developed a MERN stack{" "}
          <a
            href="https://harshdsdh.github.io/my-app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Todo list
          </a>{" "}
          app. used expressjs to create my own nodejs server and mongo db to
          connect to a remote database
        </li>
        <li>
          Developed a MERN stack to undertand react hooks{" "}
          <a
            href="https://harshdsdh.github.io/react-hooks/"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-hooks
          </a>{" "}
          app. used expressjs to create my own nodejs server and mongo db to
          connect to a remote database.
        </li>
        <li>
          See the Pen{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://codepen.io/harshdsdh/pen/XLNPpN/"
          >
            Rude calculator
          </a>{" "}
          by Harshit Mishra (
          <a
            href="https://codepen.io/harshdsdh"
            target="_blank"
            rel="noopener noreferrer"
          >
            @harshdsdh
          </a>
          ) on{" "}
          <a
            href="https://codepen.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodePen
          </a>
        </li>
        <li>
          Developed a python script to mine twitter data from multiple twitter
          handles and make wordclouds of most frequently used words to asses
          what they are tweeting about -{" "}
          <a
            href="https://github.com/harshdsdh/wordcloud_chats_politics/"
            target="_blank"
            rel="noopener noreferrer"
          >
            wordcloud_chats_politics
          </a>
        </li>
        <li>
          Developed a python script to mine twitter data from multiple twitter
          handles and trending topics to analyze the view points of presidential
          nominees -{" "}
          <a
            href="https://github.com/harshdsdh/electionsOnTwitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            electionsOnTwitter
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Projects;
