import React, { useState, useMemo } from "react";
import RegularComponent from "./RegularComponent";
import PureComponent from "./PureComponent";

const ParentComponent = () => {
  const primitiveProp = "I am primitive prop";
    const userDetails = useMemo(() => ({ title: "Software Engineer 1", name: "Alweena Iqbal" }), []);
    // const userDetails = { title: "Software Engineer 1", name: "Alweena Iqbal" }

  const [counter, setCounter] = useState(0);
  const [updateUserDetails, setUpdateUserDetails] = useState(userDetails);

  const handleUserDetailsUpdate = () => {
    setUpdateUserDetails((prevObj) => ({ ...prevObj, title: "SDE 2" }));
  };

  return (
    <>
      <h4>Parent Component</h4>
      <span>{counter}</span>
      <br />
      <br />
      <button onClick={() => setCounter((prev) => prev + 1)}>Click</button>
      <br />
      <br />
      <button onClick={() => handleUserDetailsUpdate()}>Update user Details</button>
      <br />
      <br />

      <RegularComponent primitiveProp={primitiveProp} />
      <PureComponent
        userDetails={userDetails}
        // userDetails={updateUserDetails}
        //   primitiveProp = {primitiveProp}
      />
    </>
  );
};

export default ParentComponent;
