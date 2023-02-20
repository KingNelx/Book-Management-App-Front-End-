import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Start from './Components/Start';
import Home from './Components/Home';
import Register from './Components/Register';

const App = () => {
  return ( 
   <Router>
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/home" element={<Home />} />
      <Route path="/registerPet" element={<Register />} />
    </Routes>
   </Router>
   );
}
 
export default App;