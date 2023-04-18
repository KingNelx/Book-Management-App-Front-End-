import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home';

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;