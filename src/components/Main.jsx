import React from 'react';
import "../styles/main.css"

function main() {
  return <div className="main-section">
      <div className="nav-container">
        <div className="left">
          <h1>HELLO!! I'M OLATUNJI OLOLADE</h1>
          <h3>UI/UX DESIGNER</h3>
          <p className="main-desc">
            I craft intuitive interfaces and engaging experiences tailored to
            user needs.Through user research and prototyping, I ensure
            seamless navigation and usability.
          </p>
          <div className="main-add">
            <div className="main-email">
              <h4>EMAIL-ADDRESS</h4>
              <p>
                <a href="https://mail.google.com/">ololade0507@gmail.com</a>
              </p>
            </div>
            <div className="main-dribble">
              <h4>DRIBBLE</h4>
              <p>
                <a href="https://dribbble.com/lolade_">
                  https://dribbble.com/lolade_
                </a>
              </p>
            </div>
          </div>
          <button className="main-but">Contact Us</button>
        </div>
        <div className="right">
          <img src="/plugs/image-one.png" />
        </div>
      </div>
    </div>;
}

export default main;