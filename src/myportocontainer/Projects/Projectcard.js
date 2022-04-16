import React from "react";
import "./projectcard.css";
import Img from "react-cool-img";

// Suggest to use low quality or vector images
import loadingImage from "../../assets/project/Loading.gif";
import errorImage from "../../assets/project/Error.png";

export default function Projectcard(props) {

  const { projectdate,projecttechnology,projectvarsion,Projectname, Projectlogo, Des } = props;
var url = Projectlogo;
  return (
    <div className="card">
      <div className="card-top">
        <div className="card-top-name">
          <div className="card-top-name-f">{Projectname}</div>
          <div className="card-top-name-version">{projectvarsion}</div>
          <div className="card-top-name-Date">{projectdate}</div>
        </div>

        <div className="card-top-img">
          <Img
            placeholder={loadingImage}
            src={`${process.env.PUBLIC_URL}/assets/project/bezanglogo.jpg`}
            error={errorImage}
            alt="REACT COOL IMG"
          />
        </div>
      </div>
      <div className="card-top-name-Technology">{projecttechnology}</div>
      <div className="card-bottom">{Des}</div>
    </div>
  );
}
