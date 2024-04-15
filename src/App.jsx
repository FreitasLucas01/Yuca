import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import Investing from "./Components/Investing";
import Project from "./Components/Project";
import ProjectDetails from "./Components/ProjectDetails";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Investing />
      <Project />
      <ProjectDetails />
      <Footer />
    </div>
  );
}

export default App;
