import React from "react";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Mid from "../components/mid";
import About from "../components/About";
import Service from "../components/Service";
import Projects from "../components/Project";
import Pro from "../components/pro";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "../styles/home.css";

function Home() {
  return <div className="main-section">
      <div id="main-body">
        <Nav />
        <div id="section-one">
          <Main />
        </div>
        <div id="section-two">
          <Mid />
        </div>
        <div id="section-three">
          <About />
        </div>
        <div id="section-four">
          <Service />
        </div>
        <div id="section-five">
          <Projects />
        </div>
        <div id="section-six">
          <Pro />
        </div>
        <div id="section-seven">
          <Contact />
        </div>
        <div id="section-eight">
          <Footer />
        </div>
      </div>
    </div>;
}

export default Home;
