import React from "react";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
