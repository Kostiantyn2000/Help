import React from "react";

const TabsContentThree = ({ toggleState }) => {
  return (
    <div
      className={toggleState === 3 ? "content  active-content" : "content"}
    ></div>
  );
};

export default TabsContentThree;
