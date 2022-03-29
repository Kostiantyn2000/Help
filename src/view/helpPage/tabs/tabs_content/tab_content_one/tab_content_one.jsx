import React from "react";

const TabsContentOne = ({ toggleState }) => {
  return (
    <div
      className={toggleState === 1 ? "content  active-content" : "content"}
    ></div>
  );
};

export default TabsContentOne;
