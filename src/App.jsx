import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import RegisterPet from './Components/RegisterPet';
const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registerPet" element={<RegisterPet />} />
      </Routes>
    </Router>

  );
}

export default App;