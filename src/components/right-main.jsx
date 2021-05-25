import React, { useContext } from "react";
import ReactPlayer from "react-player";
import { ProjectListContext } from "./ProjectListContext";
import { InformationContext } from "./InformationContext";
import Sketch from "./zoom-slider";
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

            {/*img src has to use env to display image urls outside of src folder *
             if project hasn't been selected then the currentInfo.image should be empty. 
             Therefore the ternary should populate an empty screen.*/}
            {currentInfo.image ? (
              <img src={process.env.PUBLIC_URL + currentInfo.image} />
            ) : null}

            <Credit>
              <a href={currentInfo.details}>{currentInfo.details} </a>
            </Credit>
            <Lead>
              <p>{currentInfo.description}</p>
            </Lead>
          </>
        ))}
      </DisplayData>
    </>
  );
};

export default RightMain;

const DisplayData = Styled.div`
text-align: center;
padding:1em;
background: black;
font-size:1em;
height:101vh;
margin:0;
color:white;
@media (max-width: 768px) { 
  text-align: center;
padding:1em;
background: black;
font-size:.4em;
padding:2em;
height:50vh;
width:90vw;
margin:0;
color:white;
 }
`;

const Lead = Styled.h1`
text-align: center;
margin:0;
font-size:1.5em;
padding-top:1em;
background-color:black;
color:white;
`;
const Brief = Styled.p`

padding-top:.5em;
text-align: center;
margin:0;
font-size:1.3em !important;
background-color:black;
color:white;
`;
const Credit = Styled.a`
text-align: right;
font-size:1em;
padding:0em;
background-color:black;
color:white;
`;
