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
import Admin from "../contact/admin"
import Panel from "../contact/panel"
import PanelNavbar from "../contact/panelNavbar"
import SinglePanel from "../contact/singlePanel"
import SingleContact from "../contact/singleContact"

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
          <Route path='/admin-panel' element={<Admin/>} />
          <Route exact element={<PanelNavbar/>}>
          <Route path='/panel' element={<Panel/>} />
          <Route path='/panel/vendor-details/:vendorId' element={<SinglePanel/>} />
          <Route path='/panel/contact-details/:contactId' element={<SingleContact />} />
          </Route>
         
        </Routes>
        <Footer />
      
    </>
  )
}

export default Pages
