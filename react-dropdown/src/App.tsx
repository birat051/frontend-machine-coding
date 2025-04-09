import { useMemo, useState } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";

function App() {
  const [dropdownValue, setDropdownValue] = useState("");
  const dropdownOptions = useMemo(() => ["Cat", "Dog", "Hat", "Mat"], []);
  return (
    <>
      <Dropdown
        dropdownProps={{
          value: dropdownValue,
          options: dropdownOptions,
          setDropdownValue: setDropdownValue,
        }}
      />
    </>
  );
}

export default App;
