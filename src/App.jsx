import { useState } from 'react'
import Header from './header.jsx'
import { Carousel } from './banner.jsx'
import Cards from './cards.jsx'
import Footer from './footer.jsx'
import { slides } from "./assets/data.json";

function App() {
  
  return (
    <>
        <Header />
        <Carousel data={slides} />
        <Cards />
        <Footer />
    </>
  )
}

export default App
