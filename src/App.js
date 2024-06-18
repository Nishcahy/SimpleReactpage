import React from "react";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {BrowserRouter as Router,Route,Routes, Navigate} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
const App=()=>{
  return(
    <>
    <Navbar/>
    {/* <Router> */}
      <Routes>
      <Route exact path="/" Component={Home}/>
      <Route exact path="/about" Component={About}/>
      <Route exact path="/service" Component={Service}/>
      <Route exact path="/contact" Component={Contact}/>
      {/* <Navigate to="/" /> */}
      </Routes>   
    {/* </Router> */}
    <Footer/>

  
    </>
  );
}

export default App;