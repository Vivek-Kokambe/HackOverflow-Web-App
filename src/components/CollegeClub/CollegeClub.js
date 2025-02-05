// import React from "react";
 

// NEW IMAGES IMPORT
// import image1 from "../../assets/img/Events/college-club-events-23/image1.webp";
// import image2 from "../../assets/img/Events/college-club-events-23/image2.webp";
// import image3 from "../../assets/img/Events/college-club-events-23/image3.webp";
// import image4 from "../../assets/img/Events/college-club-events-23/image4.webp";
// import image5 from "../../assets/img/Events/college-club-events-23/image5.webp";
// import image6 from "../../assets/img/Events/college-club-events-23/image6.webp";
// import image7 from "../../assets/img/Events/college-club-events-23/image7.webp";
// import "./CollegeClub.css";
// import Carousel from "react-bootstrap/Carousel";
// import { Link } from "react-router-dom";

// const CollegeClub = () => {
//   return (
//     <>
//       <section className="top pb-6">
//         <div className="relative topContainer flex flex-col justify-center items-center">
//           {/* <div class="absolute h-[4px] bg-[#7b1072] w-24" /> */}
//           <h1
//             id="orange-pink"
//             className="pt-2 text-[30px] sm:text-[36px] md:text-[35px] lg:text-[45px]"
//             style={{
//               fontFamily: "Poppins,sans-serif",
//               fontWeight: 700,
//               textAlign: "center",
//             }}
//           >
//             Glimpses of Hackoverflow 1.0
//           </h1>
//           <div className="Description mt-4 md:mt-2">
//             <div style={{ display: "flex", justifyContent: "center" }}>
//               <Carousel
//                 interval={2000}
//                 className="border-white d-block h-[235px] sm:h-[450px] lg:h-[550px] xl:h-[550px]"
//               >
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-screen h-[235px] sm:h-[450px] lg:h-[550px] xl:h-[550px]"
//                     src={image1}
//                     alt="First slide"
//                   />
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img

//                     className="d-block w-screen h-[235px] sm:h-[450px] lg:h-[550px] xl:h-[550px]"
//                     src={image2}
//                     alt="Second slide"
//                   />
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img

//                     className="d-block w-screen h-[235px] sm:h-[450px] lg:h-[550px] xl:h-[550px]"
//                     src={image3}
//                     alt="Second slide"
//                   />
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img

//                     className="d-block w-screen h-[235px] sm:h-[450px] lg:h-[550px] xl:h-[550px]"
//                     src={image4}
//                     alt="Second slide"
//                   />
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img

//                     className="d-block w-screen h-[235px] sm:h-[450px] lg:h-[550px] xl:h-[550px]"
//                     src={image5}
//                     alt="Second slide"
//                   />
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img

//                     className="d-block w-screen h-[235px] sm:h-[450px] lg:h-[550px] xl:h-[550px]"
//                     src={image6}
//                     alt="Second slide"
//                   />
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img

//                     className="d-block w-screen h-[235px] sm:h-[450px] lg:h-[550px] xl:h-[550px]"
//                     src={image7}
//                     alt="Second slide"
//                   />
//                 </Carousel.Item>
//               </Carousel>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className="navbar-text flex justify-center">
//         <Link to="/gallery">
//           <button className="SeeMoreButton bg-[#9B96B3] hover:bg-[#891A98] text-white font-bold py-2 px-4 rounded">
//             See More...
//           </button>
//         </Link>
//       </div>
 
//     </>
//   );
// };

// export default CollegeClub;






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
    <div className="SliderMainSection"
   
    >
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