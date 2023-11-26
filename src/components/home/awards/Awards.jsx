import React from "react";
import Heading from "../../common/Heading";
import { awards } from "../../data/Data";
import "./awards.css";
import { motion } from "framer-motion";

const Awards = () => {
  return (
    <>
      <section className="awards padding">
        <div className="container">
          <motion.div 
          className="awards-heading"
          initial={{ opacity: 0, scale: 1.3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                }}
                viewport={{ once: true }}>
          <Heading
            title="Our unique skilled personnel allow us to provide a wide range of engineering and technical support for the oil and gas industry. Our engineering and technical support services covers both offshore and onshore."
            subtitle="Our Accolades"
          />
          </motion.div>
          

          <div className="content grid4 mtop">
            {awards.map((val, index) => (
              <motion.div
                className="box"
                key={index}
                initial={{ opacity: 0, scale: 1.3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                }}
                viewport={{ once: true }}
              >
                <div className="icon">
                  <span>{val.icon}</span>
                </div>
                <h1>{val.num}</h1>
                <p>{val.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Awards;
