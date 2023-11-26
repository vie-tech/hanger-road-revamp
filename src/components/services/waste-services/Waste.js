import React from "react";
import img from "../../images/image24.jpeg";
import Back from "../../common/Back";
import "../../home/featured/Featured.css";
import FeaturedCard from "../../home/featured/FeaturedCard";
import image1 from "../routed-services-img/Picture5.png";
import image2 from "../routed-services-img/Picture8.png";
import "./Waste.css";
import {Link} from "react-router-dom"
import { ArrowUndo } from 'react-ionicons'
import { ArrowRedo} from 'react-ionicons'
const Waste = () => {
  return (
    <>
      <section className="services mb">
        <div className="inspection-service">
          <Back name="Services" title="Waste Management Services" cover={img} />
        </div>

        <div className="service2-content1">
          <div className="sectionW">
            <h3>Waste Management</h3>
            <p>
              HRI boasts of our comprehensive waste management services. We take
              immense pride in offering a diverse array of waste management and
              environmental restoration solutions, all executed by a highly
              skilled team of professionals well-versed in environmental
              management.   Our expertise extends across various critical
              domains, including:
            </p>
            <ol>
              <li>
                <strong>Oil Spill Clean-up and Recovery:</strong>  HRI excels in
                responding swiftly and effectively to mitigate the environmental
                impact of oil spills. Our specialists employ cutting-edge
                techniques and equipment to contain, recover, and remediate oil
                spills, safeguarding delicate ecosystems and minimizing the
                ecological footprint.
              </li>
              <li>
                <strong>
                  Remediation and Rehabilitation of Past Impacted Sites:
                </strong>{" "}
                 We are committed to revitalizing sites that have suffered
                environmental degradation due to past activities. Our
                remediation experts meticulously assess contaminated areas,
                develop tailored solutions, and execute comprehensive
                rehabilitation plans to restore these sites to their natural
                state.
              </li>
              <li>
                <strong>Oily Waste Handling and Management from Collection to
                Disposal:</strong> HRI offers end-to-end management of oily waste, from
                its initial collection through to its responsible disposal. Our
                rigorous protocols ensure the safe and environmentally sound
                handling of oily waste materials, in compliance with all
                relevant regulations and best practices.
              </li>
              <p>
                Our unwavering commitment to environmental stewardship, coupled
                with our extensive experience and state-of-the-art resources,
                positions HRI as a trusted partner in addressing the most
                challenging waste management and environmental restoration
                endeavors. We stand ready to collaborate with you to achieve
                your sustainability and environmental protection goals.
              </p>
            </ol>
          </div>
        </div>

        <div className="service2-content1">
          <div className="sectionD">
            <h3> Environmental Restoration and Remediation</h3>
            <p>
              We provide turnkey solutions for the removal of hazardous or
              dangerous materials from the environment thereby mitigating their
              effect on public health and safety by utilizing a range of
              techniques such as excavation and removal, in-situ treatment,
              stabilization, and bioremediation. We ensure an effective response
              to the facility decontamination and site remediation needs of our
              clients. Certain contaminants pose a serious health risk and can
              potentially harm the environment and impact on operational output
              of organizations. The scope of a remediation project will vary
              depending on the nature and severity of the contamination.
            </p>
          </div>
        </div>

        <div className="service2-content1">
          <div className="sectionD">
            <h3>Waste Treatment</h3>
            <p>
              HRI has the capability for the treatment of various hazardous
              waste such as Drill Cuttings, Sludges and oily contaminated soil
              using our modern mobile/fixed Thermal Desorption Unit (TDU).
            </p>
          </div>
        </div>
      </section>

      <div className="navigation">
      <Link to="/inspection and test services">
      <ArrowUndo
      color={"#2d3954"}/>
      </Link>

      <Link to="/marine services">
      <ArrowRedo
      color={"#2d3954"}/>
      </Link>
      
      </div>

    </>
  );
};

export default Waste;
