import React, { useState, createContext } from "react";

export const InformationContext = createContext();

/*  whenever we want to use this state below we will export it through the context above */

export const InformationProvider = (props) => {
  const [information, setInformation] = useState([
    {
      title: "",
      date: "",
      brief: "",
      description: "",
      image: "",
      video: "",
    },
  ]);

  return (
    /* providing the state above to all the components */

    <InformationContext.Provider value={[information, setInformation]}>
      {props.children} {/* this is rendering all the child components */}
    </InformationContext.Provider>
  );
};
