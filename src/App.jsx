import { useState } from 'react'
import './App.css'

/* Componentes */
import WhatsAppFab from "./components/fixed/WhatsAppFab";
import ScrollTopBtn from "./components/fixed/ScrollTop";
import SkillsMarquee from "./components/fixed/SkillsMarquee";


import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import SolutionsCarousel from "./components/SolutionesCarousel";
import SolutionsCards from "./components/SolutionesCards";
import AboutMe from "./components/AboutMe";
import Testimonials from "./components/Testimonials";
import WorkProcess from "./components/WorkProcess";
import Journey from "./components/Journey";
import Footer from "./components/Footer";



function App() {

  return (
    <>
      <div className='w-full'>

        <Navbar />

        <Hero />
        <SkillsMarquee />
        <AboutMe />
       {/*  <Journey /> */}
        
        {/* <SolutionsCarousel /> */}

        <SolutionsCards />
        <WorkProcess />
        <SkillsMarquee />
        <Portfolio />
        <Testimonials />
        

        <Footer />

      </div>

       {/* Botón flotante */}
      <ScrollTopBtn />

      <WhatsAppFab
        phone="59175660196"
        message="Hola Gabi, vi tu portfolio y quiero una web."
        position="br"        // br, bl, tr, tl
        showAfter={200}      // aparece al bajar 200px (pone 0 si lo quieres siempre)
      />
    </>
  )
}

export default App
