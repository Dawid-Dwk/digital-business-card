import React from "react";
import "./App.css";
import Footer from "./modules/Footer";
import Interests from "./modules/Interests";
import About from "./modules/About";

function App() {
  return (
    <div className="App">
      <div className="main">
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}

export default App;
