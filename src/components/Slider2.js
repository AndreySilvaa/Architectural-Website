import { Swiper, SwiperSlide } from 'swiper/react';
// imgs


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
//import 'swiper/css/scrollbar';
import './Slider2.css'
import { Navigation, Thumbs } from 'swiper';
import { useState } from 'react';

import { aboutData } from '../data/About';

export const Slider = () => {
  
  const [activeThumb, setActiveThumb] = useState()

  return (
    <div className='container'>
        <Swiper
          // install Swiper modules
         loop={true}
         spaceBetween={10}
         navigation={true}
         modules={[Navigation, Thumbs]}
         grabCursor={true}
         thumbs={{swiper : activeThumb}}
         className='container'
        >
          {aboutData[5].map((item, i) => (
             <SwiperSlide key={i} className='swiperslide' style={{backgroundImage: `url(${item})`}}></SwiperSlide>
          ))}
          
        </Swiper>

        <Swiper
          // install Swiper modules
         onSwiper={setActiveThumb}  //para funcionar foi necessário desativar o stric-mode
         watchSlidesProgress
         //loop={true}
         spaceBetween={10}
         slidesPerView={6}
         modules={[Thumbs]}
         className='container-thumbs'
        >
          {aboutData[5].map((item, i) => (
            <SwiperSlide key={i} className='swiperslide'><div className='container-thumbs-wrapper'><img src={item} alt="" /></div></SwiperSlide>
          ))}
          
        </Swiper>
    </div>
  );
};