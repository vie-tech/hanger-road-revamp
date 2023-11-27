import React from "react";
import img from "../routed-services-img/Picture11.png";
import Back from "../../common/Back";
import "../../home/featured/Featured.css";
import FeaturedCard from "../../home/featured/FeaturedCard";
import image1 from "../routed-services-img/Picture5.png";
import image2 from "../routed-services-img/Picture8.png";
import "./Inspection.css";
import { ArrowUndo } from "react-ionicons";
import { ArrowRedo } from "react-ionicons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Inspection = () => {
  return (
    <>
      <section className="services mb">
        <Helmet>
          <title>Inspection and Test Services</title>
          <meta
            name="description"
            content="With a combination of highly skilled personnel and a UT robotic tank floor inspection system, HRI in exclusive partnership with his foreign partner provides API 653-compliant online inspection of above ground storage tanks without the risk, cost, or hassle of removing tanks from service."
          />

          <meta
            name="keywords"
            content="oil and gas, oil, gas exploration, remote, sensing, technology, remote sensing technology Inspection and Test Services, Short Range Wave Ultrasonic Testing, SRUT"
          />
        </Helmet>
        <div className="inspection-service">
          <Back
            name="Services"
            title="Inspection and Test Services"
            cover={img}
          />
        </div>

        <div className="service2-content1">
          <motion.div
            className="sectionA"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
          >
            <h3>Storage Tank Inspection</h3>
            <p>
              With a combination of highly skilled personnel and a UT robotic
              tank floor inspection system, HRI in exclusive partnership with
              his foreign partner provides API 653-compliant online inspection
              of above ground storage tanks without the risk, cost, or hassle of
              removing tanks from service. <br /> Our partners Short Range Wave
              Ultrasonic Testing (SRUT) is specifically designed to screen
              difficult-to-access locations of tanks, vessels such as:
            </p>
            <ul>
              <li>Areas underneath support, clamps, and composite repairs</li>
              <li>The annular plate of above ground storage tanks.</li>
            </ul>
            <p>
              Our testing equipment produces a high-resolution, real-time color
              image of internal/external corrosion up to four feet from the
              transducer.
            </p>
          </motion.div>

          <motion.div
            className="sectionB"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
          >
            <img src={img} alt="" className="service2-img" />
          </motion.div>
        </div>

        <div className="service2-content1">
          <motion.div
            className="sectionC"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
          >
            <img src={image2} alt="" className="service2-img" />
          </motion.div>

          <motion.div
            className="sectionD"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
          >
            <h3>Pipeline Inspection</h3>
            <p>
              Pipeline inspection by HRI in exclusive partnership with his
              foreign partner utilizes the PipeWIZARD® Phased Array (PA) system,
              combined with operators who are UT-Level III certified to provide
              our clients with the most comprehensive Automated Ultrasonic
              Testing (AUT) girth weld inspection services. This world-class
              system enables advanced inspection techniques and real-time
              reporting, so the same equipment can be used for high-production
              and specialized weld inspections. Elevated production rates are
              possible with no sacrifice in quality. PipeWIZARD is ASTM E-1961,
              API 1104, and DNV-OS-F101.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="navigation">
        <Link to="/crude oil tank services">
          <ArrowUndo color={"#2d3954"} />
        </Link>

        <Link to="/waste management services">
          <ArrowRedo color={"#2d3954"} />
        </Link>
      </div>
    </>
  );
};

export default Inspection;
