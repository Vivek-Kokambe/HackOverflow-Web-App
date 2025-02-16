
import React,{useState} from 'react';
import {Swiper,SwiperSlide} from "swiper/react";


 
import 'swiper/css';
import './CollegeClub.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import {EffectCoverflow,Pagination,Navigation,Autoplay  } from "swiper/modules";

 
 
import slide_image_1 from "../../assets/img/Events/college-club-events-23/image1.webp";
import slide_image_2 from "../../assets/img/Events/college-club-events-23/image2.webp";
import slide_image_3 from "../../assets/img/Events/college-club-events-23/image3.webp";
import slide_image_4 from "../../assets/img/Events/college-club-events-23/image4.webp";
import slide_image_5 from "../../assets/img/Events/college-club-events-23/image5.webp";
import slide_image_6 from "../../assets/img/Events/college-club-events-23/image6.webp";
 
 
 
function App() {
   
  
  
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Handle autoplay stop on hover
  const handleMouseEnter = () => {
    if (swiperInstance) swiperInstance.autoplay.stop();
  };

  // Handle autoplay resume when mouse leaves
  const handleMouseLeave = () => {
    if (swiperInstance) swiperInstance.autoplay.start();
  };

  return (
    <>
    <div className="SliderMainSection">
    <div className="SliderContentContainer">
      <h1 className="SliderHeading">Glimpses of HackOverflow 2.0</h1>
      <Swiper
       
        onSwiper={setSwiperInstance}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
         
        autoplay={{
          delay: 2000,  // Slides change every 3 seconds
        }}
        speed={800}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation,Autoplay]}
        className="swiper_container"
        onMouseEnter={handleMouseEnter} // Stop autoplay on hover
        onMouseLeave={handleMouseLeave}
      >
        <SwiperSlide onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
      
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          
        </div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
    </div>
     
    
    </>
    
  );
}

export default App;