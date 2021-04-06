import React, { useContext } from "react";
import { ProjectListContext } from "./ProjectListContext";
import { InformationContext } from "./InformationContext";
import Styled from "styled-components";
const RightMain = () => {
  const [projects, setProjects] = useContext(ProjectListContext);
  const [information, setInformation] = useContext(InformationContext);
  return (
    <>
      <DisplayData>
        {information.map((currentInfo, i) => (
          <>
            <h1>{currentInfo.title}</h1>
            <h4>{currentInfo.date}</h4>
            <Brief>
              <p>{currentInfo.brief}</p>
            </Brief>
            {currentInfo.image ? (
              <img src={process.env.PUBLIC_URL + currentInfo.image} />
            ) : (
              <h1>;)</h1>
            )}
            <Lead>
              <p>{currentInfo.description}</p>
            </Lead>
            <Credit>
              <p>{currentInfo.details}</p>
            </Credit>
          </>
        ))}
      </DisplayData>
    </>
  );
};

export default RightMain;

const DisplayData = Styled.div`
text-align: left;
padding:.8em;
background: black;
width:40vw;
font-size:1em;
height:101vh;
margin:0;
color:white;
`;

const Lead = Styled.h1`
text-align: left;
margin:0;
font-size:1em;
padding:1em;
background-color:black;
border-bottom: .2em solid white;
color:white;
`;
const Brief = Styled.p`
border-top: .2em solid white;
padding-top:.5em;
text-align: left;
margin:0;
font-size:1.3em !important;
background-color:black;
color:white;
`;
const Credit = Styled.p`
text-align: left;
margin:0;
font-size:1em;
padding:1em;
background-color:black;

color:white;
`;
