import React, { useState, createContext } from "react";
export const ProjectListContext = createContext();

// whenever we want to use this state below we will export it through the context above
export const ProjectProvider = (props) => {
  const [projects, setProjects] = useState([
    {
      title: "WhatIs",
      date: "[2020]",
      brief:
        "Dealing with the question: What is Instagram Art? Can it be manipulated to be Fine Art?",
      description:
        "How does Guerrilla exploitation, or the intrusion of another artist change our perception of what is worthy of putting in a gallery verses what is worthy for The Gram? As everyday people enter the space they willingly become a part of the piece. As passerby watch from the windows they unknowingly collaborate. How far will physically interactive art reach on a virtually active scale?",
      image: "/assets/images/Puffed.JPG",
      details:
        "Choreographed and performed by Breckyn Davila Drescher in collaboration with Alexandria Giroux-Dorholt Art by Naomi S. Clark with Fort Makers Filmed by Charlotte Prager Photo by Senem Gunes",
      video: "video link",
      isOver: false,
    },
    {
      title: "Soft Wave",
      date: "[2019]",
      brief:
        "Set inside a flower shop, this site specific piece was inspired by the unsustainable International flower market and newly evolving environmentally sustainable florist practices.",
      description:
        "In this interactive performance, two dancers weave in and out of unison, occasionally making contact with the .audience",
      image: "/assets/images/SoftWave.JPG",
      details:
        "Choreographed and performed by Breckyn Davila Drescher in collaboration with Bria Bacon, and Senem Gunes Costumes by Senem Gunes Music 'Soft Wave For Automatic Music Box' Hiroshi Yoshimura This piece was one of five as part of a performance at Fleurotica Flower Shop conceived and curated and by Breckyn Davila Drescher Still by Charlotte Prager",
      video: "video link",
      isOver: false,
    },
    {
      title: "I and P",
      date: "  [2018]",
      brief:
        "The Croft: Islands and Peninsulas is a multi-part residency taking place over two consecutive summers.",
      description:
        "Collecting information based on both environment and individual personalities, we piece together how the land has been affected by Climate Change, and how we incorporate sustainable practices into our everyday connection with this place and to one another one.",
      image: "/assets/images/I_AND_P.JPG",
      details:
        "Choreographed and Performed by Breckyn Davila Drescher, Hannah Garner, Chelsea Hecht, and Ben Cheney Filmed and Photographed by Jordan KunzelEdited by all the collaborators",
      video: "video link",
      isOver: false,
    },
    {
      title: "Roadcede",
      date: "  [2018]",
      brief:
        "Two tall blonde women wearing red merge separate solos into a duet.",
      description:
        " Revisiting old material in present day bodies, we question ownership of movement and copyright of choreography, selecting a new narrative of what it means to 'create' work.",
      image: "/assets/images/RoadCede.JPG",
      details:
        "Choreographed and performed by Breckyn Davila Drescher and Emily Kessler in collaboration with Stuart Singer Music 'Road to Nowhere' Talking Heads, edited by Breckyn Davila Drescher Triskellion Arts Center, NYC Photo by Senem Gunes",
      video: "video link",
      isOver: false,
    },
    {
      title: "But Not Really",
      date: "  [2015]",
      brief:
        "Existing in a paranormal universe filled with bubbles, we explore the human psyche, the escapism of reality through the use of video games. ",
      description:
        "The dancers must survive each level of the game to continue exploring.",
      image: "/assets/images/ButNotReally.JPG",
      details:
        "Choreographed by Breckyn Davila Drescher in collaboration with the dancers Performed by Maria Jose Hernandez, Jessica Alexander, Garrett Mccann, Nicholas Garlo, Emily, Andrea Farley Shimota, Jamie McGregor Costumes and Set by Breckyn Davila Drescher Lighting by Music “Koyaanisqatsi” Philip Glass, “Suspiria” Goblin Still by Victor Cantano",
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
      image: "/assets/images/CantSeeMe.JPG",
      details: " ",
      alt: "GroupPic",
      video: "video link",
      isOver: false,
    },
    {
      title: "Now That I Am Alive",
      date: "[2014]",
      brief:
        "Childhood memories of growing up in Arizona, celebrating Mexican friends birthdays with Piñatas sets the stage.",
      description:
        "A collaboration with visual artist Kelsey Harrison, Chance Procedure was used by keeping what the Piñata looked like and what was inside a secret to be revealed live on the stage in front of the audience. ",
      image: "/assets/images/NowThatIAmAlive.JPG",
      details:
        "Choreographed by Breckyn Davila Drescher in collaboration with the dancer Performed by Upock Quaqavan Sculpture by Kelsey Harrison Music “Viva l Mariachi” Keith Halligan, “Ahora Que Estamos Vivos (Ranchera)” Tex Mex Y Mex Photo by Seneca Lawrence ",
      video: "video link",
      isOver: false,
    },
    {
      title: "Gris Clair",
      date: "[2014]",
      brief:
        "A series of solos and a void square of negative space to be filled, we explore long distance relationships and reliance on technology to stay connected.",
      description:
        "Cell phones lighting the dark, the dancers navigate the crowd, and individuals spill through embodying the loneliness that can be felt even when we are all together. The group glides through styles of club and social dancing, while the solos reflect individual taste and choice making.",
      image: "/assets/images/GrisClair.JPG",
      details:
        "Choreographed by Breckyn Davila Drescher in collaboration with the dancers Performed by Maya Tacon, William Noling, Ryan Yamauchi, Chisato Yanagisawa, and Seneca Lawrence Music “Choose” Blood Orange Still by Victor Cantano",
      video: "video link",
      isOver: false,
    },
    {
      title: "Topiary",
      date: "[2014]",
      brief:
        "Post arriving back in the US from Taiwan,Davila Drescher explores growing old and health practices in Chinese Medicine and Culture, in contrast to American health practices, bodies and values.",
      description:
        "The plant represents a manicured life; However, round and cyclical in nature",
      image: "/assets/images/Topiary.JPG",
      details:
        "Choreographed by Breckyn Davila Drescher in collaboration with the dancers Performed by Hannah Garner, Chelsea Hecht, and Seneca Lawrence Music 'That’s Life' Frank Sinatra Costumes and Prop styled by Breckyn Davila Drescher Still by Victor Cantano",
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
