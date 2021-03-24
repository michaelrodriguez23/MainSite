import React, { useState, createContext } from "react";
export const ProjectListContext = createContext();

// whenever we want to use this state below we will export it through the context above
export const ProjectProvider = (props) => {
  const [projects, setProjects] = useState([
    {
      title: "Puffed",
      date: "[2020]",
      brief: "brief description",
      description: "desc",
      image: "image link",
      video: "video link",
      isOver: false,
    },
    {
      title: "Soft Wave",
      date: "[2019]",
      brief: "brief description",
      description: "desc",
      image: "image link",
      video: "video link",
      isOver: false,
    },
    {
      title: "I and P",
      date: "  [2018]",
      brief: "brief description",
      description: "desc",
      image: "image link",
      video: "video link",
      isOver: false,
    },
    {
      title: "Roadcede",
      date: "  [2018]",
      brief: "brief description",
      description: "desc",
      image: "image link",
      video: "video link",
      isOver: false,
    },
    {
      title: "But Not Really",
      date: "  [2015]",
      brief: "brief description",
      description: "desc",
      image: "image link",
      video: "video link",
      isOver: false,
    },
    {
      title: "If You Can’t See Me, I Can’t See You",
      date: "[2015]",
      brief:
        "We analyze how the impact of Social Media has created cultural assimilation on an International level.",
      description:
        " Beauty standards, similarities and differences in which we are oppressed, and the cultural taboos surrounding these systems in both the Colonized West and East. This piece is performed by the Barbies, a cast of blondes in pink dresses.",
      image: "/CantSeeMe.JPG",
      alt: "GroupPic",
      video: "video link",
      isOver: false,
    },
    {
      title: "Now That I Am Alive",
      date: "[2014]",
      brief: "brief description",
      description: "desc",
      image: "",
      video: "video link",
      isOver: false,
    },
    {
      title: "Gris Clair",
      date: "[2014]",
      brief: "brief description",
      description: "desc",
      image: "image link",
      video: "video link",
      isOver: false,
    },
    {
      title: "Topiary",
      date: "[2014]",
      brief: "brief description",
      description: "desc",
      image: "image link",
      video: "video link",
      isOver: false,
    },
  ]);
  return (
    <ProjectListContext.Provider value={[projects, setProjects]}>
      {props.children}
    </ProjectListContext.Provider>
  );
};
