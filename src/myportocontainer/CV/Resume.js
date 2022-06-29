import "./Resume.css";
import React, { useState, useEffect } from "react";
import Worksvg from "../../assets/Resume/work-history.svg";
import Education from "../../assets/Resume/education.svg";
import Interests from "../../assets/Resume/interests.svg";
import Programmingskills from "../../assets/Resume/programming-skills.svg";
import Projects from "../../assets/Resume/projects.svg";
const resumeBullets = [
  { label: "Education", logoSrc: Education },
  { label: "Work History", logoSrc: Worksvg },
  { label: "Programming Skills", logoSrc: Programmingskills },
  { label: "Projects", logoSrc: Projects },
  { label: "Interests", logoSrc: Interests },
];

//here we have
const programmingSkillsDetails = [
  { skill: "JavaScript", ratingPercentage: 100 },
  { skill: "React JS", ratingPercentage: 90 },
  { skill: "React Native", ratingPercentage: 70 },
  { skill: "Express JS", ratingPercentage: 90 },
  { skill: "Node JS", ratingPercentage: 80 },
  { skill: "Mongo Db", ratingPercentage: 70 },
  { skill: "Python", ratingPercentage: 90 },
  { skill: "C# & C++", ratingPercentage: 70 },
  { skill: "Flutter", ratingPercentage: 80 },
  { skill: "GraphQl", ratingPercentage: 80 },
];

const projectsDetails = [
  {
    title: "CRM Mobile App",
    duration: { fromDate: "2018", toDate: "present" },

    subHeading: "Technologies Used: ExpressJs,MongoDb, Flutter",
  },
  {
    title: "Parman Shop",
    duration: { fromDate: "2020", toDate: "2020" },

    subHeading:
      "Technologies Used:  React Native, Mongo DB, Express Js, Node Js, Redux.",
  },
  {
    title: "Chino System ",
    duration: { fromDate: "2020", toDate: "Present" },

    subHeading:
      "Technologies Used: Mongo DB, Express Js, React Js, Node JS, Redux, React Native ,C#.",
  },
];
const ResumeHeading = (props) => {
  return (
    <div className="edu-resume-heading">
      <div className="edu-resume-heading-partone">
        <div className="edu-resume-heading-partone-bullet"></div>
        <div className="edu-resume-heading-partone-text">
          <div className="edu-resume-heading-partone-text-heading">
            <span>{props.heading ? props.heading : ""}</span>
          </div>

          <div className="edu-resume-heading-partone-text-sub">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
        </div>
        <div className="edu-resume-heading-partone-date">
          {props.fromDate + "-" + props.toDate}
        </div>
      </div>
      <div className="resume-heading-description">
        <span>{props.description ? props.description : ""}</span>
      </div>
    </div>
  );
};
const resumeDetails = [
  <div className="resume-screen-container" key="education">
    <ResumeHeading
      heading={"Islamic Azad University , Iran"}
      subHeading={"BACHELOR OF SCIENCE INFORMATION TECHNOLOGY"}
      fromDate={"2007"}
      toDate={"2011"}
    />

    <ResumeHeading
      heading={"I3C Center"}
      subHeading={"Full Stack Developing Full Course"}
      fromDate={"2015"}
      toDate={"2017"}
    />
    <ResumeHeading
      heading={"High School "}
      subHeading={"Kharazmy"}
      fromDate={"2003"}
      toDate={"2007"}
    />
  </div>,

  /* WORK EXPERIENCE */
  <div
    style={{ marginTop: "50px" }}
    className="resume-screen-container"
    key="work-experience"
  >
    <div className="experience-container">
      <ResumeHeading
        heading={"Toos Ashena Technoloy"}
        subHeading={"Network Administrator"}
        fromDate={"2010"}
        toDate={"2013"}
      />
    </div>
    <div className="experience-container">
      <ResumeHeading
        heading={"Nasim Telecom Company"}
        subHeading={"Windows Developer C#"}
        fromDate={"2013"}
        toDate={"2015"}
      />
    </div>
    <div className="experience-container">
      <ResumeHeading
        heading={"Aftab Corporation"}
        subHeading={"Web Developer"}
        fromDate={"2015"}
        toDate={"2018"}
      />
    </div>
    <div className="experience-container">
      <ResumeHeading
        heading={"Pars Tejarat Makran Company"}
        subHeading={"Full Stack Developer  And Team Lead"}
        fromDate={"2018"}
        toDate={"Present"}
      />
    </div>
  </div>,

  /* PROGRAMMING SKILLS */
  <div className="resume-screen-container skills " key="programming-skills">
    {programmingSkillsDetails.map((skill, index) => (
      <div className="skill-parent" key={index}>
        <div className="skill-heading-bullet"></div>
        <span>{skill.skill}</span>
        <div className="skill-percentage">
          <div
            style={{ width: skill.ratingPercentage + "%" }}
            className="active-percentage-bar"
          ></div>
        </div>
      </div>
    ))}
  </div>,

  /* PROJECTS */
  <div
    style={{ marginTop: "40px" }}
    className="resume-screen-container"
    key="projects"
  >
    {projectsDetails.map((projectsDetails, index) => (
      <ResumeHeading
        key={index}
        heading={projectsDetails.title}
        subHeading={projectsDetails.subHeading}
        description={projectsDetails.description}
        fromDate={projectsDetails.duration.fromDate}
        toDate={projectsDetails.duration.toDate}
      />
    ))}
  </div>,

  /* Interests */
  <div className="resume-screen-container" key="interests">
    <ResumeHeading
      heading="Teaching"
      description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
    />
    <ResumeHeading
      heading="Music"
      description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
    />
  </div>,
];

export default function Resume() {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={bullet.logoSrc}
          // src={require(''../${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  return (
    <div className="Resume-container">
      <div className="Resume-Parent">
        <div className="Resume-Heading-container">
          <div className="Resume-heading-heading">My Resume</div>
          <div className="Resume-heading-subheading">My Formal Bio</div>
          <div className="heading-seprator">
            <div className="spreator"></div>
            <div class="seperator-blob">
              <div></div>
            </div>
          </div>
        </div>
        <div className="resume-card">
          <div className="resume-bullet-container">
            <div className="bullet-icons"></div>
            <div className="bullets">{getBullets()}</div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}
