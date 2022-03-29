import React from "react";
import TabsContentFour from "./tab_content_four/tab_content_four";
import TabsContentOne from "./tab_content_one/tab_content_one";
import TabsContentThree from "./tab_content_three/tab_content_three";
import TabsContentTwo from "./tab_content_two/tab_content_two";

const TabsContent = (props) => {
  return (
    <>
      <TabsContentOne {...props} />
      <TabsContentTwo {...props} />
      <TabsContentThree {...props} />
      <TabsContentFour {...props} />
    </>
  );
};

export default TabsContent;
