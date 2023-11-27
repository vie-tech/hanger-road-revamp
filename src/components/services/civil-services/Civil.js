import React from "react";
import img from "../routed-services-img/imageheader2.jpg";
import Back from "../../common/Back";
import "../../home/featured/Featured.css";
import "./Civil.css";
import { ArrowUndo } from 'react-ionicons'
import {Link} from "react-router-dom"
import "./Civil.css"
import {Helmet} from "react-helmet"

const Civil = () => {
  return (
    <>
      <section className="services mb">
      <Helmet>
        <title>Civil Contruction Services</title>
        <meta
          name="description"
          content="HRI possess the capability to efficiently manage a wide range of civil construction projects, including the construction of shoreline protection, drainage systems, roads, and various types of buildings (both industrial and residential). Additionally, we excel in piling and foundation work, as well as structural projects."
        />

        <meta
          name="keywords"
          content=" preliminary groundwork, architectural design, construction management, supervision, and ongoing maintenance tasks. "
        />
      </Helmet>
        <div className="inspection-service">
          <Back
            name="Services"
            title="Civil Contruction Services"
            cover={img}
          />
        </div>

        <div className="service2-content1">
          <div className="sectionA">
            <h3>Civil Contruction Services</h3>
            <p>
              HRI possess the capability to efficiently manage a wide range of
              civil construction projects, including the construction of
              shoreline protection, drainage systems, roads, and various types
              of buildings (both industrial and residential). Additionally, we
              excel in piling and foundation work, as well as structural
              projects. Our commitment extends beyond mere construction, as we
              provide comprehensive services and turnkey solutions, guiding
              projects seamlessly from inception to completion.
              <br />
              <br />
              At HRI, our wealth of experience spans across projects that
              necessitate expertise in design, engineering, and construction
              services. We grant our clients direct access to a team of seasoned
              professionals, highly qualified and experienced in providing
              consultancy services. Our consultancy offerings cover preliminary
              groundwork, architectural design, construction management,
              supervision, and ongoing maintenance tasks."
            </p>
          </div>
        </div>
        
      </section>

      <div className="navigation">
      <Link to="/marine services">
      <ArrowUndo
      color={"#2d3954"}/>
      </Link>

      
      </div>

      
    </>
  );
};

export default Civil;
