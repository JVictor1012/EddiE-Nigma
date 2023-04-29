import Home from './Home';
import Enigma from './Enigma'
import Questions from './questions';

import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/enigma" element={<Enigma />}></Route>
        <Route path="/questions" element={<Questions />}></Route>
      </Routes>
    </>
  );
};

export default App;