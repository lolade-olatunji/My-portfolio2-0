import React from 'react';
import { FcLike } from "react-icons/fc";
import "../styles/footer.css";

function Footer() {
  return <div className="foot">
      <hr className="line" />
      <h4>
        Copyright ©. Made With <FcLike className="Love" /> By Lolade-Olatunji
      </h4>
    </div>;
}

export default Footer;