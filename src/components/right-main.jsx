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
            <h4>{currentInfo.brief}</h4>

            {currentInfo.image ? (
              <img
                src={process.env.PUBLIC_URL + currentInfo.image}
                width="90%"
                height="55%"
              />
            ) : (
              <img src="" alt="" />
            )}
            <h4>{currentInfo.description}</h4>
            <p>{currentInfo.details}</p>
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
height:101vh;

margin:0;
color:white;
`;
