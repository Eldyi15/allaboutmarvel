import "./App.css";
import List from "./components/List";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Comics from "./components/Comics";
import Header from "./components/Header";
import Characters from "./components/Characters";

function App() {
  return (
    <>
      <div className="app-header">
        <Header></Header>
      </div>
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>

          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/characters" element={<Characters></Characters>}></Route>
          <Route path="/comics" element={<Comics></Comics>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
