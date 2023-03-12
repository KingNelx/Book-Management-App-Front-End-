import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Start from "./Components/Start";
import Home from "./Components/Home";
import Others from "./Components/Others";
import DogsData from "./Components/DogsData";
import CatsData from "./Components/CatsData";
import RabbitsData from "./Components/RabbitsData";
import BirdsData from "./Components/BirdsData";
import TurtleData from "./Components/TurtleData";
import MouseData from "./Components/MouseData";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<Home />} />
        <Route path="/others" element={<Others />} />
        <Route path="/dogs" element={<DogsData />} />
        <Route path="/cats" element={<CatsData />} />
        <Route path="/rabbits" element={<RabbitsData />} />
        <Route path="/birds" element={<BirdsData />} />
        <Route path="/turtle" element={<TurtleData />} />
        <Route path="/mouse" element={<MouseData />} />
      </Routes>
    </Router>
  );
};

export default App;
