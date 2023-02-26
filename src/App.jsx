import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Start from './Components/Start';
import Home from './Components/Home';
import Others from './Components/OTHERS/Others';
import Dogs from './Components/DOGS/Dogs';
import Cats from './Components/CATS/Cats';
import Rabbits from './Components/RABBITS/Rabbits';
import Snakes from './Components/SNAKES/Snakes';
import Birds from './Components/BIRDS/Birds';
import Turtles from './Components/TURTLES/Turtles';

const App = () => {
  return ( 
   <Router>
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/home" element={<Home />} />
      <Route path="/otherPets" element={<Others />} />
      <Route path="/dogs" element={<Dogs />} />
      <Route path="/cats" element={<Cats />}/>
      <Route path="/rabbits" element={<Rabbits />} />
      <Route path="/snakes" element={<Snakes />} />
      <Route path="/birds" element={<Birds />}/>
      <Route path="/turtles" element={<Turtles />}/>
    </Routes>
   </Router>
   );
}
 
export default App;