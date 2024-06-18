import React from "react";
import web from "../src/images/img2.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home=()=>{
  return(
    <>
    <Common name='Grow your business with' img={web} visit="/service" btname="Get Started"/>
    </>
  );
}

export default Home;