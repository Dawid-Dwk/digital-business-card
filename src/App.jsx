import React from "react";
import "./App.css";
import Footer from "./modules/Footer";
import Interests from "./modules/Interests";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Interests />
        <Footer />
      </div>
    </div>
  );
}

export default App;
