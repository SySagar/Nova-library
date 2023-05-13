import "./App.css";
import Stack from "./components/common/Stack";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Stack
        className="main-body"
        position="relative"
        height="100%"
        width="100%"
        direction="column"
      >
        <Navbar></Navbar>

        <Main></Main>
        
      </Stack>
    </div>
  );
}

export default App;
