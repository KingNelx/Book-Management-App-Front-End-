import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Start from "./Components/Start";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
      </Routes>
    </Router>
  );
};

export default App;
