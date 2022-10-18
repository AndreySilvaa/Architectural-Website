import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import { dataHomeGallery } from '../data/Home';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
//import 'swiper/css/scrollbar';
import './Slider.css'

export const Slider = () => {
  return (
    <div className='container-slider1'>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y, Autoplay]}
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 4000,
          }}
          
          pagination={{ clickable: true }}
          //scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className={'myswiper'}
        >
          <SwiperSlide className='swiperslide' style={{backgroundImage: `url(${dataHomeGallery[5][0].img})`}}>  <h2>{dataHomeGallery[5][0].title}</h2> <p>{dataHomeGallery[5][0].message}</p></SwiperSlide>
          <SwiperSlide className='swiperslide' style={{backgroundImage: `url(${dataHomeGallery[5][1].img})`}}> <h2>{dataHomeGallery[5][1].title}</h2> <p>{dataHomeGallery[5][1].message}</p></SwiperSlide>
        </Swiper>
    </div>
  );
};