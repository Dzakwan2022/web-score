import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Tampilan1 } from "./Components/Tampilan1";
import { Tampilan2 } from "./Components/Tampilan2";
import { Tampilan3 } from "./Components/Tampilan3";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tampilan1" element={<Tampilan1 />} />
      <Route path="/tampilan2" element={<Tampilan2 />} />
      <Route path="/tampilan3" element={<Tampilan3 />} />
    </Routes>
  );
}

export default App;
