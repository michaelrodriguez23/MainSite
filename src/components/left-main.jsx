import React, { useState, useContext, Linking } from "react";
import Styled from "styled-components";
import RightMain from "./right-main";
import ResizeClass from "./resizeClass";
import { ProjectListContext } from "./ProjectListContext";
import { InformationContext } from "./InformationContext";
import Sketch from "./zoom-slider";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

function changeBackground(e) {
  e.target.style.background = "#FAFAFA";
  e.target.style.color = "black";
}

function changeBackground2(e) {
  e.target.style.background = "black";
  e.target.style.color = "white";
}

const LeftMain = () => {
  const [projects, setProjects] = useContext(ProjectListContext);
  const [information, setInformation] = useContext(InformationContext);
  const [links, setLinks] = useState([
    {
      type: "email",
      hyperLink: "mailto:vejigante@protonmail.com",
      isOver: false,
    },
    {
      type: "github",
      hyperLink: "https://github.com/michaelrodriguez23",
      isOver: false,
    },
    {
      type: "blog",
      hyperLink: "https://galaxybrain.blot.im/",
      isOver: false,
    },
    {
      type: "instagram",
      hyperLink: "https://www.instagram.com/michael.elijah.cloud.content/",
      isOver: false,
    },
    {
      type: "are.na",
      hyperLink: "https://www.are.na/miguelito/high-tech-low-life-adda3vjovvi",
      isOver: false,
    }
  ]);

  const [showLink, setShowLink] = React.useState(true);
  const [showBrief, setShowBrief] = React.useState(false);
  const [showList, setShowList] = React.useState(false);
  const [showContact, setShowContact] = React.useState(false);
  const [showProject, setShowProject] = React.useState(false);

  function highLight(e) {
    if (showLink) {
      e.target.style.background = "#FAFAFA";
      e.target.style.color = "black";
    } else {
      e.target.style.background = "black";
      e.target.style.color = "white";
    }
  }
  function openLink(e, link, i) {
    window.location.assign(link.hyperLink);
  }
  /* Passing in the currentProj of the list, and its index to set the State for Information */
  function displayProject(e, currentProj, i) {
    setInformation((prevInformation) => [
      {
        title: currentProj.title,
        date: currentProj.date,
        brief: currentProj.brief,
        description: currentProj.description,
        image: currentProj.image,
        details: currentProj.details,
        alt: currentProj.alt,
        video: currentProj.video,
      },
    ]);
  }

  return (
    <Container>
      <Wrapper>
        <Sidebar>
          <Lead
            onMouseEnter={() => setShowBrief(!showBrief)}
            onClick={() => setShowBrief(!showBrief)}
            onMouseOver={changeBackground2}
          >
            <h1>Michael Elijah</h1>
          </Lead>
          <Brief>{showBrief ? <p> {brief} </p> : null}</Brief>

          <Lead
            onMouseEnter={() => setShowList(!showList)}
            onClick={() => setShowList(showList)}
            onMouseLeave={() => setShowList(false)}
          >
            <p>work 🔨</p>
            {showList ? (
              <ul>
                {projects.map((currentProj, i) => (
                  <li
                    onMouseOver={changeBackground}
                    onMouseLeave={changeBackground2}
                    onClick={(e) => displayProject(e, currentProj, i)}
                  >
                    {currentProj.title} {currentProj.date}
                  </li>
                ))}
              </ul>
            ) : null}
          </Lead>
          <Lead
            onMouseEnter={() => setShowContact(!showContact)}
            onClick={() => setShowContact(!showContact)}
            onMouseLeave={() => setShowContact(!showContact)}
          >
            <p>network 📡</p>
            {showContact ? (
              <ul>
                {links.map((link) => (
                  <a href={link.hyperLink}>
                    <li
                      onMouseOver={changeBackground}
                      onMouseLeave={changeBackground2}
                    >
                      {link.type}
                    </li>
                  </a>
                ))}
              </ul>
            ) : null}
          </Lead>
      

          <Lead></Lead>
          <Sketch></Sketch>
        </Sidebar>
      </Wrapper>
    </Container>
  );
};
// Variables
const brief = "\n Is a NYC based new media artist, and web developer. He enjoys creating multiverses through augmentation of media, through code.";

const Wrapper = Styled.div`
background-color:black;
align-items:center;
height:101vh;
margin:0;
`;
const Sidebar = Styled.div`
height:100vh;

`;
const ZoomSlider = Styled.div`
box-sizing: border-box;
margin:0;
`;

const Lead = Styled.h2`
margin:0;
font-size:1.5em;
padding-top:2%;
background-color:black;
text-align: center;
color:white;

`;
const Work = Styled.div`
margin:0;
font-size:1em;
background-color:black;
text-align: center;
color:white;
`;
const Brief = Styled.p`
font-size:1em;
padding: .5em;
text-align:center;
color:white;
`;

export default LeftMain;
