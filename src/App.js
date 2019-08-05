import React from "react";
import AppHeader from "./app-header";
import Content from "./content";
import Footer from "./footer";
import Projects from "./projects";
import About from "./About";
import NewFooter from "./newFooter";
const App = () => {
  return (
    <section className="wrapper">
      <AppHeader className="main appheader" />
      <Content className="main content" />
      <About className="main about" />
      <Projects className="main projects" />
      <Footer className="main footer" />
      <NewFooter className="main newfooter" />
    </section>
  );
};
//render(<App />, document.getElementById("root"));
export default App;
