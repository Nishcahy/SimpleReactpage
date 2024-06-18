import React from "react";
import Common from "./Common";
import web from "../src/images/hero-img.jpg"

const About=()=>{
  return(
    <>
    <Common name='Welcome to About Page' img={web} visit="/contact" btname="Contact Now"/>
  
    </>
  );
}

export default About;