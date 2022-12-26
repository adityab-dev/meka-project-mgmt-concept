import "./App.css";

import Navbar from "./Navbar/Navbar";
import Content from "./Content/Content";
import Temporary from "../src/Temporary";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Content />
      {/* <Temporary /> */}
    </div>
  );
}

export default App;
