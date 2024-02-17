import React, { useState, useEffect } from "react";
import { data as mockData } from "../mocks/mid";
import "../styles/mid.css";

function Mid() {
  const [mid, setMid] = useState([]);

  useEffect(() => {
    getMid();
  }, []);

  const getMid = async () => {
    setMid(mockData);
  };

      return (
        <div className="mine">
        {mockData.map(data => 
          <div className="mid-section" key={data.id}>
            <div className="mid-container">
              <div className="mid-each-container">
                <div className="mid-check">
                  <img src={data.img1} alt={data.title} />
                </div>
                <div className="mid-inner">
                  <h4>
                    {data.name}
                  </h4>
                  <p>
                    {data.description}
                  </p>
                </div>
                <a href="#section-four" className="mid-right">
                  <img src={data.img2} alt={data.title} />
                </a>
              </div>
            </div>
          </div>
      )}
       </div>
    );
  }
   
export default Mid;
