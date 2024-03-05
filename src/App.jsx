import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./Component/Navbar/Navbar";
import { Main } from "./Component/Main/Main";

function App() {

  return (
    <Router>
      <Navbar/>
      <Main/>
    </Router>
  )
}

export default App
