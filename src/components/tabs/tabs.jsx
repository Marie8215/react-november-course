import { useState } from "react";
import { TabNames } from "../tab-names/tab-names";
import { TabsContent } from "../tabs-content/tabs-content";

export const Tabs = ({ children, tabNames }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <TabNames
        tabNames={tabNames}
        onClick={(clickedTabIndex) => setSelectedTab(clickedTabIndex)}
      />
      <TabsContent>{children[selectedTab]}</TabsContent>
    </>
  );
};
