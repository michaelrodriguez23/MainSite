import React, { useState, createContext } from "react";
export const ProjectListContext = createContext();

// whenever we want to use this state below we will export it through the context above
export const ProjectProvider = (props) => {
  const [projects, setProjects] = useState([
    {
      title: "What Is News?",
      date: "[2020]",
      brief:
        " Extracting the most shared articles on various social platforms to see how they compare at face value. ",
      description:
      "A poetic approach to web-design by visualizing data in a creative coding enviroment using p5 library. As well to combine the React declarative programming approach and imperative one for direct DOM manipulation. ",
      image: "/assets/images/whatisnews.gif",
      details:
        "https://michaelrodriguez23.github.io/WhatIsNews/",
      video: "https://www.youtube.com/watch?v=PqZC-vKCedg",
      isOver: false,
    },
  

  ]);
  return (
    <ProjectListContext.Provider value={[projects, setProjects]}>
      {props.children}
    </ProjectListContext.Provider>
  );
};
