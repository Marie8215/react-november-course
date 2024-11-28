import { useState } from "react";
import { TabNames } from "../tab-names/tab-names";

export const Tabs = ({ children, tabNames }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <TabNames
        tabNames={tabNames}
        onClick={(clickedTabIndex) => setSelectedTab(clickedTabIndex)}
      />
      {children[selectedTab]}
    </>
  );
};
