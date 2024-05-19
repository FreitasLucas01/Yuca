import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import Investing from "./Components/Investing";
import Project from "./Components/Project";
import ProjectDetails from "./Components/ProjectDetails";
import Carousel from "./Components/Carousel";
import Copam from "./Components/Copam";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Investing />
      <Project />
      <ProjectDetails />
      <Carousel />
      <Copam />
      <Footer />
    </div>
  );
}

export default App;
