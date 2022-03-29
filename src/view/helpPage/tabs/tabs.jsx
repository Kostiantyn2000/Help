import React from "react";
import "./tabs.scss";
import TabsButtons from "./tabs_buttons/tabs_buttons";
import TabsContent from "./tabs_content/tabs_content";
const Tabs = () => {
  const [toggleState, setToggleState] = React.useState(2);
  const [toggleStateBtn, setToggleStateBtn] = React.useState(2);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const toggleBtn = (index) => {
    setToggleStateBtn(index);
  };
  return (
    <div className="tabs-container">
      <TabsButtons toggleState={toggleState} toggleTab={toggleTab} />
      <div className="col content-tabs">
        <TabsContent
          toggleState={toggleState}
          toggleStateBtn={toggleStateBtn}
          toggleBtn={toggleBtn}
        />
      </div>
    </div>
  );
};

export default Tabs;
