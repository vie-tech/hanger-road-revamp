import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/image30.jpeg";
import "./about.css";
import aboutBanner from "../images/image30.jpeg";
import { Container } from "@mui/material";
import {motion} from "framer-motion"

const About = () => {
  return (
    <>
      <section className="about">
        <Back name="About Us" title="About Us - Who We Are?" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="Our Company Story"
              subtitle="Check out our company story and work process"
            />

            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
              }}
              viewport={{ once: true }}
            >
              We have a wide range of services to maximize the performance of
              any completion project. We've pushed the industry forward with new
              technologies focused on one goal; solving your challenges in
              unconventional areas, while establishing a relationship and
              partnership that will continue and grow as your business.{" "}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
              }}
              viewport={{ once: true }}
            >
              Our unique skilled personnel allow us to provide a wide range of
              engineering and technical support for the oil and gas industry.
              Our engineering and technical support services covers both
              offshore and onshore.
            </motion.p>
          </div>
          <div className="right row">
            <img src={aboutBanner} alt="" style={{ width: "100%" }} />
          </div>
        </div>

        <Container>
          <div className="mission-div" style={{ marginTop: "150px" }}>
            <Heading title="Our Mission" />

            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
              }}
              viewport={{ once: true }}
            >
              To be the first company of choice in our core area of business to
              our clients and to add unquestionable value by our "quality on
              time" approach to the sector. <br />
              We seek to provide our clients with the best service by applying
              the core values of engineering, which is providing the most
              efficient solution to problems in a safe environment at minimal
              cost, using the most innovative technology of the day.
            </motion.p>
          </div>

          <div className="vision-div" style={{ marginTop: "70px" }}>
            <Heading title="Our Vision" />

            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
              }}
              viewport={{ once: true }}
            >
              Hangar Road’s vision is to be the most reputable, environmentally
              friendly, profitable and most recognized employer of local content
              through out West Africa while never compromising on "our quality
              on time" approach. This approach to business and the market has
              led to the continued and sustained growth of Hangar Road
              International, resulting in the creation of employment and
              constant development at all levels of our business.
            </motion.p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
