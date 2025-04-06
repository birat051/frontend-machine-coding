import { Dispatch, SetStateAction, useMemo } from "react";
import { E_APP_ROUTES, I_TAB } from "../types";
import React from "react";

interface DynamicTabsProps {
  tab: I_TAB;
  selectedTab: E_APP_ROUTES;
  onSelectTab: Dispatch<SetStateAction<E_APP_ROUTES>>;
  onKeyDownTab: (e: React.KeyboardEvent) => void;
}

function DynamicTabs(props: DynamicTabsProps) {
  const { tab, selectedTab, onSelectTab, onKeyDownTab } = props;
  const isTabSelected = useMemo(
    () => tab.route === selectedTab,
    [tab, selectedTab]
  );
  return (
    <button
      className="tab"
      id={tab.route}
      role="tab"
      tabIndex={selectedTab ? 0 : -1}
      aria-selected={selectedTab === tab.route}
      style={{
        color: isTabSelected ? "blue" : "white",
        borderBottom: isTabSelected ? "5px solid blue" : "none",
      }}
      onKeyDown={onKeyDownTab}
      onClick={() => onSelectTab(tab.route)}
    >
      {tab.name}
    </button>
  );
}

export default React.memo(DynamicTabs);
