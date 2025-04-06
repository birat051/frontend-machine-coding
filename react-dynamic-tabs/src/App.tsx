import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import { E_APP_ROUTES, I_TAB } from "./types";
import DynamicTabs from "./components/DynamicTabs";

function App() {
  const [selectedTab, setSelectedTab] = useState<E_APP_ROUTES>(
    E_APP_ROUTES.HOME
  );
  const [pageData, setPageData] = useState("");
  const dynamicTabData: I_TAB[] = useMemo(
    () => [
      {
        route: E_APP_ROUTES.HOME,
        name: "Home",
      },
      {
        route: E_APP_ROUTES.PRODUCTS,
        name: "Products",
      },
      {
        route: E_APP_ROUTES.ABOUT,
        name: "About",
      },
      {
        route: E_APP_ROUTES.CONTACT_US,
        name: "Contact Us",
      },
    ],
    []
  );
  const onKeyDownTab = useCallback(
    (e: React.KeyboardEvent) => {
      e.preventDefault();
      const selectedIndex = dynamicTabData.findIndex(
        (value) => value.route === selectedTab
      );
      function moveToNextTab() {
        const nextIndex =
          selectedIndex === dynamicTabData.length - 1 ? 0 : selectedIndex + 1;
        setSelectedTab(dynamicTabData[nextIndex].route);
        const nextElement = document.getElementById(
          dynamicTabData[nextIndex].route
        );
        nextElement?.focus();
      }
      function moveToHome() {
        setSelectedTab(E_APP_ROUTES.HOME);
        const element = document.getElementById(E_APP_ROUTES.HOME);
        element?.focus();
        return;
      }
      if (selectedIndex === -1) {
        moveToHome();
        return;
      }
      switch (e.key) {
        case "ArrowRight":
          moveToNextTab();
          break;
        case "ArrowLeft":
          const prevIndex =
            selectedIndex === 0 ? dynamicTabData.length - 1 : selectedIndex - 1;
          setSelectedTab(dynamicTabData[prevIndex].route);
          const prevElement = document.getElementById(
            dynamicTabData[prevIndex].route
          );
          prevElement?.focus();
          break;
        case "Home":
          moveToHome();
          break;
        case "End":
          const endIndex = dynamicTabData.length - 1;
          const endElement = document.getElementById(
            dynamicTabData[endIndex].route
          );
          endElement?.focus();
          break;
        case "Enter":
        case "Tab":
          moveToNextTab();
          break;
        default:
          return;
      }
    },
    [selectedTab, dynamicTabData]
  );
  useEffect(() => {
    switch (selectedTab) {
      case E_APP_ROUTES.HOME:
        setPageData("Home");
        break;
      case E_APP_ROUTES.PRODUCTS:
        setPageData("Browse Products");
        break;
      case E_APP_ROUTES.ABOUT:
        setPageData("About Us");
        break;
      case E_APP_ROUTES.CONTACT_US:
        setPageData("Contact us here");
        break;
    }
  }, [selectedTab]);
  return (
    <>
      <div className="dynamic-tab-container" role="tablist">
        {dynamicTabData.map((value) => (
          <DynamicTabs
            onSelectTab={setSelectedTab}
            selectedTab={selectedTab}
            tab={value}
            key={value.name}
            onKeyDownTab={onKeyDownTab}
          />
        ))}
      </div>
      <div className="page-data">
        <h3>{pageData}</h3>
      </div>
    </>
  );
}

export default App;
