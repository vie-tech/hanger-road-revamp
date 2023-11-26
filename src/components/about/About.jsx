import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/image30.jpeg"
import "./about.css"
import aboutBanner from "../images/image30.jpeg"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>We have a wide range of services to maximize the performance of any completion project. We've pushed the industry forward with new technologies focused on one goal; solving your challenges in unconventional areas, while establishing a relationship and partnership that will continue and grow as your business. </p>
            <p>Our unique skilled personnel allow us to provide a wide range of engineering and technical support for the oil and gas industry. Our engineering and technical support services covers both offshore and onshore.</p>
           {/*  <button className='btn2'>More About Us</button> */}
          </div>
          <div className='right row'>
            <img src={aboutBanner} alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
