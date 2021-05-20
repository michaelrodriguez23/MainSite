import React, { useContext } from "react";
import ReactPlayer from "react-player";
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
             {/*img src has to use env to display image urls outside of src folder */}
            {currentInfo.image ? (
              <img src={process.env.PUBLIC_URL + currentInfo.image} />
            ) : (
              <PlayerWrapper>
                <ReactPlayer
                  className="react-player"
                  width="100%"
                  height="100%"
                  url="https://vimeo.com/520547158"
                />
              </PlayerWrapper>
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
background: black;
padding:2em;
font-size:1em;
height:101vh;
margin:0;
color:white;
`;
const PlayerWrapper = Styled.div`
position: relative;

`;

const Lead = Styled.h1`
text-align: center;
margin:0;
font-size:1em;
padding-top:1em;
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
padding-top:1em;
background-color:black;
color:white;
`;
