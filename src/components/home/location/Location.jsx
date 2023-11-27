import React from "react";
import Heading from "../../common/Heading";
import { location } from "../../data/Data";
import "./style.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowForwardOutline } from 'react-ionicons'
import { ArrowBackOutline} from 'react-ionicons'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./style.css"; // Import your custom styles

const Location = () => {
  const params = {};
  return (
    <>
      <section className="location padding">
        <div className="container">
          <Heading title="Our Skilled staffs at work" subtitle=""/>

          <div className="carousel-container">
            <Swiper
              modules={[Navigation, Scrollbar, A11y]}
              slidesPerView={1}
              navigation={{
                nextEl: ".react-button-next",
                prevEl: ".react-button-prev"
              }}
              
            >
              {location.map((imageUrl, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={imageUrl.cover}
                    alt={`Slide ${index + 1}`}
                    className="carousel-image"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
           
             <div className="react-button-next">&#9654;</div>
            <div className="react-button-prev">&#9664;</div>
             
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
