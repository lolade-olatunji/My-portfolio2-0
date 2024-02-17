import React, { useState, useRef } from "react";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import "../styles/contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const [loading, setLoading] = useState(0);

  const form = useRef();

  const sendEmail = e => {
    setLoading(1);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3yxx7ah",
        "template_d3pb7o9",
        form.current,
        "SMBOgz7IWJ2MXW8jP"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setLoading(0);
  };

  // const handleDownload = () => {
  //   const anchor = document.createElement("a");
  //   anchor.href = "/Design-CV(1).pdf";
  //   anchor.download = "Design-CV(1).pdf"; 
  //   anchor.click();
  // };


  return <div className="contact-main">
      <div className="contact-container">
        <div className="contact-left">
          <h1>CONTACT ME</h1>
          <h4>Phone Number</h4>
          <div className="numbers">
            <p>+234 810 757 0178</p>
            <p>+234 905 126 4369</p>
          </div>
          <h4>Email Address</h4>
          <div className="contact-add">
            <p>ololade0507@gmail.com</p>
            <p>ololadeolatunji955@gmail.com</p>
          </div>
          <div className="contact-social">
            <div className="contact-icon">
              <ul className="cont-ul">
                <li className="cont-li">
                  <a href="https://www.linkedin.com/in/lolade-olatunji-b0285a251/">
                    <FiLinkedin className="icon" />
                  </a>
                </li>
                <li className="cont-li">
                  <a href="https://twitter.com/OloladeOla91135">
                    <FiTwitter className="icon" />
                  </a>
                </li>
                <li className="cont-li">
                  <a href="https://www.instagram.com/octavia_eric89/">
                    <FiInstagram className="icon" />
                  </a>
                </li>
                <li className="cont-li">
                  <a href="https://www.facebook.com/Lolade-Olatunji">
                    <FiFacebook className="icon" />
                  </a>
                </li>
              </ul>
            </div>
            <a href="/plugs/projects/Design-CV2.0.pdf" download="Design-CV2.0.pdf" className="contact-button">
              <button className="con-but">Download CV</button>
            </a>
          </div>
        </div>
        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail} className="form-submit">
            <input name="text" type="text" placeholder="Name" required />
            <input name="email" type="email" placeholder="Your Email" required />
            <textarea name="message" rows="6" placeholder="Your Message" />
            <div className="con-mess-but">
              <button disabled={loading ? 1 : 0} type="submit" value="send" className="sub-message-button">
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>;
}

export default Contact;
