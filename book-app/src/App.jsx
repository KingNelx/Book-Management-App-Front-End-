import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Action from './Genre/Action'
import Comedy from './Genre/Comedy'
import Horror from './Genre/Horror'
import Knowledge from './Genre/Knowledge'
import Love from './Genre/Love'

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/action" element={<Action />} />
        <Route path="/comedy" element={<Comedy />} />
        <Route path="/horror" element={<Horror />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/love" element={<Love />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;