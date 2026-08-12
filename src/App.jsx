import React from "react";
import Header from "./assets/components/Header/Header";
import Hero from "./assets/components/Hero/Hero";
import Us from "./assets/components/Us/Us";
import Benefits from "./assets/components/Benefits/Benefits";
import Services from "./assets/components/Services/Services";
import Stats from "./assets/components/Stats/Stats";
import Companies from "./assets/components/Companies/Companies";
import Contact from "./assets/components/Contact/Contact";
import Modal from "./assets/components/Modal/Modal";
import Footer from "./assets/components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Companies />
      <Us />
      <Stats />
      <Benefits />
      <Services />
      <Contact />
      <Modal />
      <Footer />
    </>
  );
}

export default App;
