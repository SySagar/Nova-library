import "./App.css";
import Stack from "./components/common/Stack";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Stack
        className="main-body"
        position="relative"
        border="1"
        height="100%"
        width="100%"
        direction="column"
      >
        <Stack border="1">
        <Navbar></Navbar>
        </Stack>
      </Stack>
    </div>
  );
}

export default App;
