import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Start from "./Components/Start";
import Home from "./Components/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
