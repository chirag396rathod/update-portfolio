import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Views/Home";
import Contact from "./Views/Contact";
import Projects from "./Views/Projects";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
