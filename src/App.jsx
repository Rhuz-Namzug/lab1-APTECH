import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import Students from "./Pages/Students";
import About from "./Pages/About";
import StudentDetail from "./Pages/StudentDetails";

function App() {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/students/:id" element={<StudentDetail />} />
        <Route path="/About" element={<About />} />
      </Routes>

    </Router>
  );
}

export default App;