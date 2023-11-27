import React from "react";
import Heading from "../../common/Heading";
import { location } from "../../data/Data";
import "./style.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowBackOutline} from 'react-ionicons'
import { ArrowBackCircle , ArrowForwardCircle } from 'react-ionicons'

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
           
             <div className="react-button-next"> <i> <ArrowForwardCircle 
             color={`#27ae60`}
             width={`30px`}
             height={`30px`}/></i>
             </div>
            <div className="react-button-prev"> <i><ArrowBackCircle 
            color={`#27ae60`}
            width={`30px`}
            height={`30px`}
            /></i> </div>
             
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
