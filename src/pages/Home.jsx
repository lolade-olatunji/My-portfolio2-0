import React from 'react';
import Nav from "../components/Nav";
import Main from '../components/Main';
import Mid from '../components/mid';
import About from '../components/About';
import Service from '../components/Service';
import "../styles/home.css"

function Home() {
  return <div className="main-section">
      <div className="main-body">
        <Nav />
        <div className="section-one">
          <Main />
        </div>
        <div className="section-two">
          <Mid />
        </div>
        <div className="section-three">
          <About />
        </div>
        <div className="section-four">
          <Service />
        </div>
      </div>
    </div>;
}

export default Home