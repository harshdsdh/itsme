import React from "react";
import AppHeader from "./app-header";
import Content from "./content";
import Footer from "./footer";
import Projects from "./projects";
const App = () => {
  return (
    <section className="wrapper">
      <AppHeader className="main appheader" />
      <Content className="main content" />
      <Projects className="main projects" />
      <Footer className="main footer" />
    </section>
  );
};
//render(<App />, document.getElementById("root"));
export default App;
