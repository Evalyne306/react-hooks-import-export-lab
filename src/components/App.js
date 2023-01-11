import React from "react";
import About from "./About";
import NavBar from "./NavBar";
import Home from "./About";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About city="New York" username="Liza"  />
    
    </div>
  );
}

export default App;
