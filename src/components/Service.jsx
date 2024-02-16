import React from 'react';
import "../styles/service.css";

function Service() {
  return <div className="service-container">
      <div className="service-body">
        <div>
          <img src="/plugs/segment.png" alt="logo" />
        </div>
        <div className="service-content">
          <h1>MY SERVICE</h1>
          <h3>What my design skills include</h3>
          <p>
            Driven by a love for innovation and creativity, I constantly seek
            to push the boundaries of design, embracing new technologies and
            methodologies to deliver impactful results. My goal is to create
            experiences that resonate with users on a deeper level, fostering
            connections and driving engagement.
          </p>
          <div className="service-skills">
            <img src="/plugs/skills.png" alt="logo" />
          </div>
        </div>
        <div className="serv-right">
          <img src="/plugs/skill-boxes.png"/>
        </div>
      </div>
    </div>;
}

export default Service