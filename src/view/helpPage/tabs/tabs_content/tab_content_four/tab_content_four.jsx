import React from "react";

const TabsContentFour = ({ toggleState }) => {
  return (
    <div
      className={toggleState === 4 ? "content  active-content" : "content"}
    ></div>
  );
};

export default TabsContentFour;
