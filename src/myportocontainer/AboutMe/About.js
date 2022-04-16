import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="About-container">
      <div className="About-Parent">
        <div className="About-Heading-container">
          <div className="About-heading-heading">About Me</div>
          <div className="About-heading-subheading">Why Me ???</div>
          <div className="heading-seprator">
            <div className="spreator"></div>
            <div class="seperator-blob">
              <div></div>
            </div>
          </div>
        </div>
        <div className="About-card">
          <div className="About-card-img"></div>
          <div className="About-card-text-container">
            <div className="About-card-text-descript">
              I am Vahid Pourmohammad Shandiz, born in Mashhad (Iran) in 1989.
              From the beginning, I had a very strange interest in computers, so
              at first, I managed to install Windows 98 in middle school. In
              high school, when the new IGI game was popular because I was
              familiar with the QBasic language, a friend and I formed a team to
              produce a computer game.
            </div>
            <div className="About-card-text-iteams">
              <div className="About-card-text-iteams-heading">
                <span>This Is My Skills Highlight</span>
              </div>
              <div className="About-card-text-iteams-iteam">
                <div className="blob"></div>
                <span>C#</span>
              </div>
              <div className="About-card-text-iteams-iteam">
                <div className="blob"></div>
                <span>Java</span>
              </div>
              <div className="About-card-text-iteams-iteam">
                <div className="blob"></div>
                <span>MERN Developer</span>
              </div>
              <div className="About-card-text-iteams-iteam">
                <div className="blob"></div>
                <span>AI Enginner</span>
              </div>
            </div>
            <div className="about-card-text-btn-cv">
              <button>
                <span>CV download</span>
                <div class="liquid"></div>
              </button>
              <button>
                <span>Call Me!</span>
                <div class="liquid"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
