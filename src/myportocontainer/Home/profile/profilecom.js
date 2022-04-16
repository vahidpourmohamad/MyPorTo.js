import React from "react";
import Typical from "react-typical";
import "./profilecom.css";


function Profilecom() {
  var facebook = "http://www.facebook.com/vahidpoormohamad";
  var instagram = "http://www.instagram.com/poormohamad.dev";
  var github = "https://github.com/vahidpourmohamad";
  var tagline = "A man who grew up with a computer";
  var cvname = "David";
  var profilename = "Hello I'M";
  var btnhireme = "Hire ME!";
  var cvdwonload = "Download Cv";
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-detail">
          <div className="social">
            <div className="social-icon">
              <a href={facebook}>
                <i className="fa fa-facebook square"></i>
              </a>
              <a href={instagram}>
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube square"></i>
              </a>
              <a href={github}>
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
          <div className="profile-detail-name">
            <div className="primary-text">
              {" "}
              {profilename} <span className="highleted-text">{cvname}</span>
            </div>
          </div>
          <div className="profile-detail-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  steps={[
                    "FullStack Dev ",
                    1000,
                    "AI Expert",
                    1000,
                    "Python Dev",
                    1000,
                    "C++ Dev",
                    1000,
                    "C# Dev",
                    1000,
                    "Flutter Dev",
                    1000,
                    "Network Administrator",
                    1000,
                  ]}
                  loop={Infinity}
                />
              </h1>
              <span className="profile-detail-tagline">{tagline}</span>
            </span>
          </div>
          <div className="profile-btns">
            <button className="btn primary-btn" style={{ margin: "10px" }}>
              {btnhireme}
            </button>
            <a href="#" className="">
              <button className="btn primary-btn" style={{ margin: "10px" }}>
                {cvdwonload}
              </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
export default Profilecom;
