import { useState } from "react";

const Practice = () => {
  const [name, setName] = useState([{ first: "", second: "" }]);
  const [showName, setShowName] = useState(false);
  const [displayName, setDisplayName] = useState(false);

  const handleName = (e) => {
      setName({
          ...name,
          [e.target.name]: e.target.value
      });
      setShowName(true);

  }

  const handleShowName = () => {
    setDisplayName(true);
  }

  return (
    <div>
      {showName && (
        <div>
          {" "}
          <p> {name.first} </p>
          <p> {name.second} </p>{" "}
        </div>
      )}
      <br/>
      {displayName && (
        <div>
          {" "}
          <p> {name.first}  {name.second} </p>
          {" "}
        </div>
      )}

      <input
        value={name.first}
        onChange={handleName}
        name='first'
      />
      <input value={name.second} onChange= {handleName}  name='second'/><br/><br/>
      <button onClick = {handleShowName}>Show Name</button>
    </div>
  );
};

export default Practice;
