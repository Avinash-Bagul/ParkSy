import React from "react";
import Hero from "../../components/navbar/home/Hero";
import HowItWorks from "../../components/navbar/home/HowItWorks";
import Feature from "../../components/navbar/home/Features";
import Why from "../../components/navbar/home/Why";
import Testimonials from "../../components/navbar/home/Testimonials";
import FAQ from "../../components/navbar/home/FAQ";

const Home = () => {
    return (
        <>
            <Hero/>
            <HowItWorks/> 
            <Feature/>
            <Why/>    
            <Testimonials/> 
            <FAQ/>    
        </>
    )
}

export default Home;