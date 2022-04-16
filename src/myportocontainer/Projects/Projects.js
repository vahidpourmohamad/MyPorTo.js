import React from "react";
import "./Projects.css";
import Projectcard from "./Projectcard";
export default function Projects() {
  return (
    <div className="Projects-container">
      <div className="Projects-Parent">
        <div className="Projects-Heading-container">
          <div className="Projects-heading-heading">My Projects</div>
          <div className="Projects-heading-subheading">
            Example of My Projects
          </div>
          <div className="heading-seprator">
            <div className="spreator"></div>
            <div class="seperator-blob">
              <div></div>
            </div>
          </div>
        </div>
        <div className="card-container">
          <Projectcard
            Projectname="Bezang Applicaion"
            projectvarsion="2.0.5"
            projecttechnology="Fluter MongoDb Express.Js"
            projectdate="2020"
            Projectlogo="./bezanglogo.jpg"
            Des="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem "
          />
          <Projectcard
            Projectname="Bezang Applicaion"
            projectvarsion="2.0.5"
            projecttechnology="Fluter MongoDb Express.Js"
            projectdate="2020"
            Projectlogo="./bezanglogo.jpg"
            Des="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem "
          />
          <Projectcard
            Projectname="Bezang Applicaion"
            projectvarsion="2.0.5"
            projecttechnology="Fluter MongoDb Express.Js"
            projectdate="2020"
            Projectlogo="./bezanglogo.jpg"
            Des="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem "
          />
          <Projectcard
            Projectname="Bezang Applicaion"
            projectvarsion="2.0.5"
            projecttechnology="Fluter MongoDb Express.Js"
            projectdate="2020"
            Projectlogo="./bezanglogo.jpg"
            Des="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem "
          />
          <Projectcard
            Projectname="Bezang Applicaion"
            projectvarsion="2.0.5"
            projecttechnology="Fluter MongoDb Express.Js"
            projectdate="2020"
            Projectlogo="./bezanglogo.jpg"
            Des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta tempor sem at consequat. Donec a ex sed velit mattis sollicitudin vel quis tellus. "
          />
        </div>
      </div>
    </div>
  );
}
