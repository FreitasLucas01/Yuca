import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import Investing from "./Components/Investing";
import Project from "./Components/Project";
import ProjectDetails from "./Components/ProjectDetails";
import Carousel from "./Components/Carousel";
import CardCarousel from "./Components/CardCarousel";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Investing />
      <Project />
      <ProjectDetails />
      <Carousel />
      {/* <CardCarousel /> */}
      <Footer />
    </div>
  );
}

export default App;
