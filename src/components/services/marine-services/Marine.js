import React from "react";
import img from "../routed-services-img/Picture12.png";
import Back from "../../common/Back";
import "../../home/featured/Featured.css";
import image1 from "../routed-services-img/Picture12.png";
import "./Marine.css";
import {Link} from "react-router-dom";
import { ArrowUndo } from 'react-ionicons'
import { ArrowRedo } from 'react-ionicons'
import {motion} from "framer-motion"

const Marine = () => {
  return (
    <>
      <section className="services mb">
        <div className="inspection-service">
          <Back name="Services" title="Marine Services" cover={img} />
        </div>

        <div className="service2-content1">
          <motion.div
           className="sectionA"
           initial={{opacity: 0, x: -100}}
           whileInView={{opacity: 1, x: 0}}
           transition={{
             duration: 1
           }}
           viewport={{once: true}}>
            <h3>Marine Services</h3>
            <p>
              Our partners with a strong and successful record of Vessel
              Operations possess and manages a fleet of vessels ranging from
              Anchor Handling Tug Supply (AHTS) vessels, Platform Supply Vessels
              (PSV), Multi-purpose Vessels, Mooring Boats, Diving Support
              Vessels, Barges, Offshore Support Vessels to offer marine support
              services to the oil and gas industries in Nigeria. Our maritime
              support activities cover the entire life cycle of an oil field.
              Whatsoever specification of vessel needed, HRI and its partners
              can supply to meet client requirement. Our company tailors its
              marine services to meet the demand of our clients.
            </p>
          </motion.div>

          <motion.div
           className="sectionB"
           initial={{opacity: 0, x: 100}}
           whileInView={{opacity: 1, x: 0}}
           transition={{
             duration: 1
           }}
           viewport={{once: true}}>
            <img src={image1} alt="" className="service2-img" />
          </motion.div>
        </div>
      </section>


      <div className="navigation">
      <Link to="/waste management services">
      <ArrowUndo
      color={"#2d3954"}/>
      </Link>

      <Link to="/civil construction services">
      <ArrowRedo
      color={"#2d3954"}/>
      </Link>
      
      </div>

    </>
  );
};

export default Marine;
