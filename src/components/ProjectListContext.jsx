import React, { useState, createContext } from "react";
export const ProjectListContext = createContext();

// whenever we want to use this state below we will export it through the context above
export const ProjectProvider = (props) => {
  const [projects, setProjects] = useState([
    
    {
      title: "Getting Situated In Augmented Reality",
      date: "[2021]",
      brief:
        "4 Augmented Reality Applications that was coarsed with the teachings of Zach Lieberman and Edgardo Aviles-Lopez of School of Poetic Computation.",
      description:
      "We looked at augmented reality as an artistic discipline, and technological practice with computer vision, human interaction, and graphics. Using Spark AR programming patches and scripts to traverse through unknown territories of mixed reality. Primarily through face tracking,world tracking, and target tracking. These projects produced discussions around ethics,practice, and technicality of AR. ",
      image: "",
      details:
        "https://github.com/michaelrodriguez23/SFPC_Projects",
      video: "{https://www.youtube.com/watch?v=j08FfHKFPYc}",
      isOver: false,
    },
    {
      title: "What Is News?",
      date: "[2020]",
      brief:
        " This project was an exploration of our relationship with 'News and Media'. Diverging it away from these platforms that are incentivized by an attention econonmy. ", 
      description:
      "This is my poetic approach to web-design by visualizing data in a creative coding enviroment, and recontextualizing news in a more playful way. By toying around with the NYTIMES API, I was able to find interesting results on how data varied on different social platforms. This was done embedding p5 library into a react declarative programming enviroment. ",
      image: "/assets/images/whatisnews.gif",
      details:
        "https://michaelrodriguez23.github.io/WhatIsNews/",
      video: "",
      isOver: false,
    }
  

  ]);
  return (
    <ProjectListContext.Provider value={[projects, setProjects]}>
      {props.children}
    </ProjectListContext.Provider>
  );
};
