import React from 'react'
import HeroSection from '../components/Hero'
import AboutQuickProvide from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import HowItWorks from '../components/HowItWork'
import WhatMakesUsSuperior from '../components/WhatMakesSuperior'
import ServicesSection from '../components/ServiceSection'
import EstimatedSection from "../components/EstimatedSection"
import RateChart from '../components/RateChart'
const Home = () => {
  return (
    <>
    <HeroSection/>
    <AboutQuickProvide/>
    <WhyChooseUs/>
    <HowItWorks/>
    <ServicesSection/>
    <WhatMakesUsSuperior/>
    <RateChart/>
    <EstimatedSection/>
    </>
  )
}

export default Home