import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Start from "./Components/Start";
import Home from "./Components/Home";
import Others from "./Components/Others";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<Home />} />
        <Route path="/others" element={<Others />} />
      </Routes>
    </Router>
  );
};

export default App;
