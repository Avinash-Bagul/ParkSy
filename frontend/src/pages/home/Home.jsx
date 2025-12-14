import React from "react";
import Hero from "../../components/navbar/home/Hero";
import HowItWorks from "../../components/navbar/home/HowItWorks";
import Feature from "../../components/navbar/home/Features";
import Why from "../../components/navbar/home/Why";

const Home = () => {
    return (
        <>
            <Hero/>
            <HowItWorks/> 
            <Feature/>
            <Why/>         
        </>
    )
}

export default Home;