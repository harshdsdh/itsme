import React from "react";
import mnist_gif from "../src/pics/mngif.gif";
import ann_gif from "../src/pics/Ann.gif";
const Projects = () => {
  return (
    <div
      className="projects aos-init aos-animate"
      data-aos="fade-up"
      id="projects"
    >
      <ProjectsHeading heading="Work" />
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
          <img src={mnist_gif}></img>
          <p>
            <a href="https://colab.research.google.com/drive/1CvRtXCAxxgAvhX0yXVoBRXt3QXIazxM9">
              over 98% Accuracy with MNIST Datset
            </a>
          </p>
        </li>
        <li>
          <img src={ann_gif}></img>
          <p>
            <a href="https://colab.research.google.com/drive/1MBIbDA6x8iHcs4DsfKKu8Wh9nJsihY6K#scrollTo=aDyGj8DmXCJI">
              Genrative Deep Learning using different neural nets
            </a>
          </p>
        </li>
        <li>
          <img src={mnist_gif}></img>
          <p>
            <a href="https://colab.research.google.com/drive/1CvRtXCAxxgAvhX0yXVoBRXt3QXIazxM9">
              over 98% Accuracy with MNIST Datset
            </a>
          </p>
        </li>
        <li>
          <img src={mnist_gif}></img>
          <p>
            <a href="https://colab.research.google.com/drive/1CvRtXCAxxgAvhX0yXVoBRXt3QXIazxM9">
              over 98% Accuracy with MNIST Datset
            </a>
          </p>
        </li>
        <li>
          <img src={mnist_gif}></img>
          <p>
            <a href="https://colab.research.google.com/drive/1CvRtXCAxxgAvhX0yXVoBRXt3QXIazxM9">
              over 98% Accuracy with MNIST Datset
            </a>
          </p>
        </li>
        <li>
          <img src={mnist_gif}></img>
          <p>
            <a href="https://colab.research.google.com/drive/1CvRtXCAxxgAvhX0yXVoBRXt3QXIazxM9">
              over 98% Accuracy with MNIST Datset
            </a>
          </p>
        </li>
      </ul>
    </div>
  );
}
export default Projects;
