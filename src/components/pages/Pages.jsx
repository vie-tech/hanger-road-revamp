import React from "react"
import Header from "../common/header/Header"
import { Route, Routes } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import Inspection from "../services/inspection-service/Inspection"
import Waste from "../services/waste-services/Waste"
import Marine from "../services/marine-services/Marine"
import Civil from "../services/civil-services/Civil"
import ScrollToTop from "../../Scroll";
import Vendor from "../contact/vendor"

const Pages = () => {
  return (
    <>
      <ScrollToTop />
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/crude oil tank services' element={<Services/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/inspection and test services' element={<Inspection/>} />
          <Route path='/waste management services' element={<Waste/>} />
          <Route path='/marine services' element={<Marine/>} />
          <Route path='/civil construction services' element={<Civil/>} />
          <Route path='/vendor-registration-form' element={<Vendor/>} />
        </Routes>
        <Footer />
      
    </>
  )
}

export default Pages
