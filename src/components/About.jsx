import React from 'react';
import '../styles/about.css';

function About() {
  return <div className="about-container">
      <div className="about-body">
        <div className="about-pic">
          <img src="/plugs/image-two.png" />
        </div>
        <div className="about-seg">
          <img src="/plugs/segment.png" alt="segment" />
        </div>
        <div className="about-about">
          <h1>ABOUT ME</h1>
          <p>
            Welcome to my portfolio! I'm Olatunji Ololade, a dedicated UI/UX
            designer with a passion for creating meaningful digital
            experiences. With three years of experience in the field, I
            specialize in crafting intuitive interfaces that seamlessly blend
            aesthetics with functionality.
          </p>
          <p>
            My journey in UI/UX design began with a fascination for
            understanding user behaviors and needs. Through extensive
            research, wireframing, and prototyping, I strive to design
            solutions that not only meet user expectations but exceed them.
          </p>
          <p>
            Whether you're a startup looking to establish a strong digital
            presence or an established brand aiming to enhance user
            satisfaction, I'm here to collaborate with you every step of the
            way. Let's turn your vision into reality and create unforgettable
            experiences together.
          </p>
          <a href="#section-seven">
            <button className="about-but">Learn More</button>
          </a>
        </div>
      </div>
    </div>;
}

export default About