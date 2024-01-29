import React from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Industry from "./industry/Industry"
import { Helmet } from "react-helmet"

const Home = () => {
  return (
    <>
      <body className="total-container">
        <Helmet>
          <title>Hanger Road International</title>
          <meta
            name="description"
            content="Our partners with a strong and successful record of Vessel Operations possess and manages a fleet of vessels ranging from Anchor Handling Tug Supply (AHTS) vessels, Platform Supply Vessels (PSV), 
            With a combination of highly skilled personnel and a UT robotic tank floor inspection system, HRI in exclusive partnership with his foreign partner provides API 653-compliant online inspection of above ground storage tanks without the risk, cost, or hassle of removing tanks from service.
            HRI is the leading AUTOMATED tank cleaning company in West Africa. Our automated tank cleaning system de-sludge recovers marketable oil, and clean tanks in a single closed-looped system in the safest and most environmentally friendly way possible. It is suitable for both floating and fixed roof tanks.
            HRI possess the capability to efficiently manage a wide range of civil construction projects, including the construction of shoreline protection, drainage systems, roads, and various types of buildings (both industrial and residential). Additionally, we excel in piling and foundation work, as well as structural projects."
          />

          <meta
            name="keywords"
            content="oil and gas, waste treatment, crude storage, vessel tanks, natural gas oil, gas exploration, Environmental Restoration and Remediation, remote, sensing, technology, remote sensing technology Inspection and Test Services, Short Range Wave Ultrasonic Testing, SRUT, Tank Calibration, Tank Cleaning, Oil Spill Clean-up and Recovery, Remediation and Rehabilitation of Past Impacted Sites, Oily Waste Handling and Management from Collection to Disposal, Anchor Handling Tug Supply (AHTS) vessels, Platform Supply Vessels (PSV), Multi-purpose Vessels, Mooring Boats, Diving Support Vessels, Barges, Offshore Support Vessels"
          />
        </Helmet>
        <Hero />
        <Awards />

        <Featured />
        <Industry />
        <Location />
      </body>

    </>
  );
}

export default Home
