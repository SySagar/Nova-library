import "./App.css";
import Stack from "./components/common/Stack";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import ActiveContext from "./context/activeContext";
import { useState } from "react";

function App() {
  const [active, setActiveState] = useState(false);
  const setActive = () => {
    setActiveState(true);
  };

  const setDeactive = () => {
    console.log("deactive");
    setActiveState(false);
  };

  return (
    <ActiveContext.Provider
      value={{
        active: active,
        setActive: setActive,
        setDeactive: setDeactive,
      }}
    >
      <Stack className="App" position="fixed" direction="column" width="100%">
        <div style={{ position: "absolute", height: "100%" }}>
          <Sidebar></Sidebar>
        </div>

        <Navbar></Navbar>

        <Main></Main>
      </Stack>
    </ActiveContext.Provider>
  );
}

export default App;
