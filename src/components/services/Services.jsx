import React from "react";
import img from "./routed-services-img/Picture14.png";
import Back from "../common/Back";
import "../home/featured/Featured.css";
import FeaturedCard from "../home/featured/FeaturedCard";
import image1 from "./routed-services-img/Picture5.png";
import image2 from "./routed-services-img/Picture1.png";
import "./Services.css";
import { ArrowUndo } from "react-ionicons";
import { ArrowRedo } from "react-ionicons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
const Services = () => {
  return (
    <>
      <section className="services mb">
        <Helmet>
          <title>Crude Oil Tank Services</title>
          <meta
            name="description"
            content="HRI is the leading AUTOMATED tank cleaning company in West Africa. Our automated tank cleaning system de-sludge recovers marketable oil, and clean tanks in a single closed-looped system in the safest and most environmentally friendly way possible. It is suitable for both floating and fixed roof tanks."
          />

          <meta
            name="keywords"
            content="oil and gas,  crude storage, vessel tanks, natural gas oil, gas exploration, remote, sensing, technology, remote sensing technology Inspection and Test Services, Short Range Wave Ultrasonic Testing, SRUT, Tank Calibration, Tank Cleaning"
          />
        </Helmet>
        <div className="inspection-service">
          <Back
            name="Services"
            title="Crude Oil Tank Services"
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
            <h3>Tank Cleaning</h3>
            <p>
              HRI is the leading AUTOMATED tank cleaning company in West Africa.
              Our automated tank cleaning system de-sludge recovers marketable
              oil, and clean tanks in a single closed-looped system in the
              safest and most environmentally friendly way possible. It is
              suitable for both floating and fixed roof tanks.
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
            <img src={image1} alt="" className="service2-img" />
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
            <h3>Tank Calibration</h3>
            <p>
              HRI provides calibration of storage tanks such as crude storage,
              vessel tanks, natural gas tanks using laser electro optical
              distance ranging technology called EODR which ultimately benefits
              our esteemed clients by providing desired accuracy expected and
              carry out the job in a quicker time. Our Online calibration of
              crude storage tanks can be done without the burden of clients
              taking the tank out of service.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="navigation">
        <Link to="/">
          <ArrowUndo color={"#2d3954"} />
        </Link>

        <Link to="/inspection and test services">
          <ArrowRedo color={"#2d3954"} />
        </Link>
      </div>
    </>
  );
};

export default Services;
