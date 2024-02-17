import React from "react";
import "../styles/nav.css"
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

function Nav() {
  return <div className="nav-background">
      <div className="nav-section">
        <div className="img">
          <img src="/plugs/logo-im (1).png" alt="LOGO" />
        </div>
        <div className="nav-nav">
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="#section-three">ABOUT</a>
            </li>
            <li>
              <a href="#section-four">SERVICES</a>
            </li>
            <li>
              <a href="#section-five">PROJECTS</a>
            </li>
            <li>
              <a href="#section-eight">CONTACT-US</a>
            </li>
          </ul>
        </div>
        <div className="nav-icons-and-but">
          <div className="nav-icon">
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/lolade-olatunji-b0285a251/">
                  <FiLinkedin className="na-icon"/>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/OloladeOla91135">
                  <FiTwitter className="na-icon"/>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/octavia_eric89/">
                  <FiInstagram className="na-icon"/>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/Lolade-Olatunji">
                  <FiFacebook className="na-icon"/>
                </a>
              </li>
            </ul>
          </div>
          <a href="#section-eight" className="nav-button">
            <button className="nav-but">Contact Us</button>
          </a>
        </div>
      </div>
    </div>;
}

export default Nav;
