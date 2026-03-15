import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import Students from "./Pages/Students";
import About from "./Pages/About";

function App() {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/About" element={<About />} />
      </Routes>

    </Router>
  );
}

export default App;