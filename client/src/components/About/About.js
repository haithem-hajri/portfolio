import React, { useState, useEffect } from "react";
import "./About.scss";
import axios from "axios";
import { API_URL } from "../../env";
const About = () => {
  const [about, setAbout] = useState({});
  useEffect(() => {
    axios.get(`${API_URL}/getAbout`).then((res) => {
      setAbout(res.data);
    });
  }, []);
  return (
    <div className="about">
      <div className="about-container"> 
        {about && (
          <div className="box-about box-down blue">
            <div className="about-content">
              <h1>{about.name}</h1>
              <img className="avatar" src={about.img} alt="me" />
              <div
                className="about-message"
                dangerouslySetInnerHTML={{ __html: about.message }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
