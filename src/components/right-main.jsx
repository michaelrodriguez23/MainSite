import React, { useContext } from "react";
import ReactPlayer from "react-player";
import { ProjectListContext } from "./ProjectListContext";
import { InformationContext } from "./InformationContext";
import Sketch from "./zoom-slider";
import { useMediaPredicate } from "react-media-hook";
import Styled from "styled-components";

const RightMain = () => {
  const [projects, setProjects] = useContext(ProjectListContext);
  const [information, setInformation] = useContext(InformationContext);
  const smallerThan400 = useMediaPredicate("(max-width: 400px)");
  
  return (
    <>
      <DisplayData>
        {information.map((currentInfo, i) => (
          <>
            <h3>{currentInfo.title}</h3>
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
            <ReactWrapper> 
              
            {currentInfo.video ? (
              <ReactPlayer height={smallerThan400 ? "200px" : "20em"} width={smallerThan400 ? "50em" : "100%"} className='react-player'  url={currentInfo.video} > </ReactPlayer>
              
            ) : null}
           
            </ReactWrapper>
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
background: black;
font-size:1em;
padding:1em;
margin:0;
color:white;
@media (max-width: 768px) { 
text-align: center;
background: black;
font-size:.4em;
padding:1em;
height:15vh;
width:100vw;
margin:0;
color:white;

 }
`;

const Lead = Styled.h1`
text-align: center;
margin:0;
font-size:1em;
background-color:black;
color:white;

padding:1em;
`;
const Brief = Styled.p`
text-align: center;
margin:0;
font-size:1.3em ;
background-color:black;
color:white;


`;
const Credit = Styled.a`
text-align: right;
font-size:1em;
background-color:black;
color:white;
`;
// if webpage is larger than 1400px
const ReactWrapper = Styled.div`
@media (min-width: 1400px) { 
padding-left:0em;
padding:1em;
}
@media (min-width: 375) { 
  padding-right:9em;
  padding:1em;
  }
`;

