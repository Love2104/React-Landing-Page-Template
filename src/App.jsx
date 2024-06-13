import React, { useState, useEffect } from "react";
import { Navigation } from "./components/research";
import { Header } from "./components/research";
import { Objectives } from "./components/research";
import { About } from "./components/research";
import { Activities } from "./components/research";
import { Gallery } from "./components/research";
import { Testimonials } from "./components/research";
import { Team } from "./components/research";
import { Contact } from "./components/research";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Objectives data={landingPageData.Objectives} />
      <About data={landingPageData.About} />
      <Activities data={landingPageData.Activities} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
