import React from 'react'
import './Menu.css'
export default function Menu() {
  return (
    <div className="Menu-container">
      <div className="Menu-parent">
        <a href="#">
          <i className="Menu-iteam Logo">DaVidPoor</i>
        </a>
        <a href="#">
          <i className="Menu-iteams">Home</i>
        </a>
        <a href="#">
          <i className="Menu-iteams">Resume</i>
        </a>
        <a href="#">
          <i className="Menu-iteams">Skills</i>
        </a>
        <a href="#">
          <i className="Menu-iteams">Portfolio</i>
        </a>
        <a href="#">
          <i className="Menu-iteams">Contact</i>
        </a>
      </div>
    </div>
  );
}
