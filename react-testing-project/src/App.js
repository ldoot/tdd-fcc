import React, { useState } from "react";

const App = () => {
  const [heading, setHeading] = useState("TDD Test Header");

  const handleClick = () => {
    setHeading("New TDD Test Header");
  };

  return (
    <>
      <h1>{heading}</h1>;
      <button type="button" onClick={handleClick}>
        Update Heading
      </button>
    </>
  );
};
export default App;
