import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import RegisterPet from './Components/RegisterPet';
import AllCats from './Components/AllCats';
import AllDogs from './Components/AllDogs';
import AllSnake from './Components/AllSnake';
import AllBirds from './Components/AllBirds';
const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registerPet" element={<RegisterPet />} />
        <Route path="/allDogs" element={<AllDogs />} />
        <Route path="/allCats" element={<AllCats />} />
        <Route path="/allSnakes" element={<AllSnake />} />
        <Route path="/allBirds" element={<AllBirds />} />
      </Routes>
    </Router>

  );
}

export default App;