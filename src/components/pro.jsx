import React, { useState, useEffect } from "react";
import { data as mockData } from "../mocks/projects";
import "../styles/pro.css";

function Project() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    getProject();
  }, []);

  const getProject = async () => {
    setProject(mockData);
  };

  return <div className="mini">
      {mockData.map(data => <div key={data.id}>
          <div className="pro-pro">
            <div className="pro-card">
              <div className="card-pro">
                <img src={data.img1} alt="Loading..." className="pro-slide" />
              </div>
              <div className="pro-overlay">
                <div className="pro-inner">
                  <h4>
                    {data.name}
                  </h4>
                  <p>
                    {data.description}
                  </p>
                  <a href="https://dribbble.com/lolade_">
                    <button className="pro-button">
                      {data.para}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>)}
    </div>;
}

export default Project;
