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
  { skill: "JavaScript", ratingPercentage: 85 },
  { skill: "React JS", ratingPercentage: 85 },
  { skill: "React Native", ratingPercentage: 85 },
  { skill: "Express JS", ratingPercentage: 89 },
  { skill: "Node JS", ratingPercentage: 89 },
  { skill: "Mongo Db", ratingPercentage: 70 },
  { skill: "Core Java", ratingPercentage: 80 },
  { skill: "HTML", ratingPercentage: 80 },
  { skill: "CSS", ratingPercentage: 80 },
];

const projectsDetails = [
  {
    title: "Personal Portfolio Website",
    duration: { fromDate: "2020", toDate: "2021" },
    description:
      "A Personal Portfolio website to showcase all my details and projects at one place.",
    subHeading: "Technologies Used: React JS, Bootsrap",
  },
  {
    title: "Mobile E-shop ",
    duration: { fromDate: "2020", toDate: "2021" },
    description:
      "An ecommerce application designed to sell products online wth payment system integration",
    subHeading:
      "Technologies Used:  React Native, Mongo DB, Express Js, Node Js, Redux.",
  },
  {
    title: "Ecommerce Website ",
    duration: { fromDate: "2020", toDate: "2021" },
    description:
      "Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe",
    subHeading:
      "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
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
      heading={"University of Legon Accra, Ghana"}
      subHeading={"BACHELOR OF SCIENCE INFORMATION TECHNOLOGY"}
      fromDate={"2014"}
      toDate={"2018"}
    />

    <ResumeHeading
      heading={"National Youth Service Corps"}
      subHeading={"Ministry Of Science And Technogy. Uyo Akwa Ibom State"}
      fromDate={"2019"}
      toDate={"2020"}
    />
    <ResumeHeading
      heading={"High School "}
      subHeading={"Command Secondary School Mbiri"}
      fromDate={"2007"}
      toDate={"2012"}
    />
  </div>,

  /* WORK EXPERIENCE */
  <div className="resume-screen-container" key="work-experience">
    <div className="experience-container">
      <ResumeHeading
        heading={"Ehizeex Technoloy"}
        subHeading={"FULL STACK DEVELOPER INTERN"}
        fromDate={"2021"}
        toDate={"Present"}
      />
      <div className="experience-description">
        <span className="resume-description-text">As A MErn Developer</span>
        <br />
      </div>
    </div>
    <div className="experience-container">
      <ResumeHeading
        heading={"Ehizeex Technoloy"}
        subHeading={"FULL STACK DEVELOPER INTERN"}
        fromDate={"2021"}
        toDate={"Present"}
      />
      <div className="experience-description">
        <span className="resume-description-text">As A MErn Developer</span>
        <br />
      </div>
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
  <div className="resume-screen-container" key="projects">
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
    <ResumeHeading
      heading="Competitive Gaming"
      description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
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