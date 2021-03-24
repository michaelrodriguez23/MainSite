import React, { useState, useContext, Linking } from "react";
import Styled from "styled-components";
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
      type: "Email",
      hyperLink: "drescher.breckyn@gmail.com ",
      isOver: false,
    },
    {
      type: "Instagram",
      hyperLink: "www.instagram.com/",
      isOver: false,
    },
    {
      type: "Vimeo",
      hyperLink: "www.vimeo.com/",
      isOver: false,
    },
  ]);

  const [showLink, setShowLink] = React.useState(true);
  const [showBrief, setShowBrief] = React.useState(true);
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
        alt: currentProj.alt,
        video: "",
      },
    ]);
  }

  return (
    <Container fluid>
      <Wrapper>
        <Sidebar>
          <Lead
            onMouseEnter={() => setShowBrief(true)}
            onMouseLeave={() => setShowBrief(true)}
            onMouseOver={changeBackground2}
          >
            <h1>Brecklyn Davila Drescher</h1>
            <Brief>{showBrief ? <p>{brief}</p> : null}</Brief>
          </Lead>

          <Lead
            onMouseEnter={() => setShowContact(true)}
            onMouseLeave={() => setShowContact(false)}
          >
            <p>stay in touch </p>
            {showContact ? (
              <ul>
                {links.map((link) => (
                  <li
                    onMouseOver={changeBackground}
                    onMouseLeave={changeBackground2}
                    onClick={(e) => openLink(e, link)}
                  >
                    {link.type}
                  </li>
                ))}
              </ul>
            ) : null}
          </Lead>

          <Lead
            onMouseEnter={() => setShowList(true)}
            onMouseLeave={() => setShowList(false)}
          >
            <p> portfolio </p>
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

          <Sketch></Sketch>

          <Lead></Lead>
        </Sidebar>
      </Wrapper>
    </Container>
  );
};

const Wrapper = Styled.div`
background-color:black;
min-height:100%;
height:101vh;
width:40vw;
margin:0;
padding:0% !important;
border-right: .2em solid white;
padding-left:0% ;
`;
const Sidebar = Styled.div`

height:100vh;
padding-right:35px;
`;
const ZoomSlider = Styled.div`
min-height: 50%;
min-width: 100%;
box-sizing: border-box;
margin:0;
`;

const Lead = Styled.h1`
border-bottom: .2em solid white;
margin:0;
font-size:1.55em;
padding-top:2%;
background-color:black;
text-align: center;
color:white;
font
`;
const Work = Styled.div`
margin:0;
font-size:1em;
background-color:black;
text-align: right;
color:white;
`;
const Brief = Styled.p`
padding-left: 5%;
 padding-right:5%;
text-align: center;
color:white;

`;
const brief =
  " (she/her/they) is from Arizona, and is of Puerto Rican and German descent. Based between New York City and Paris. ";

export default LeftMain;
