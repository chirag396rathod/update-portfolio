import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Views/Home";
import Contact from "./Views/Contact";
import Projects from "./Views/Projects";
import Header from "./Components/Header";
import Spinner from "./Components/Spinner";
import Experience from "./Views/Experience";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
