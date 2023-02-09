import React from 'react'
import cn from 'classnames';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Parallax, Autoplay, EffectCoverflow } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';

type Props = {
  isDarkTheme: boolean,
  portfolioList: any[],
}



export const SwiperSlider: React.FC<Props> = ({
  isDarkTheme,
  portfolioList,
}) => {
  return (
    <div className='Portfolio__swiper-container'>
        <Swiper
          effect={"coverflow"}
          pagination={{
            el: '.Portfolio__swiper-pagination',
            clickable: true,
            dynamicBullets: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
            hideOnClick: true,
          }}
          coverflowEffect={{
            rotate: 100,
            stretch: 5,
            depth: 900,
            modifier: 1,
            slideShadows: false,
          }}
          loop
          autoplay
          parallax
          speed={1000}
          navigation={{
            nextEl: '.Portfolio__swiper-next-button',
            prevEl: '.Portfolio__swiper-prev-button',
          }}
          modules={[Pagination, Navigation, Parallax, Autoplay, EffectCoverflow]}
          className="Portfolio__swiper"
          tag="section"
          wrapperTag="ul"
          slidesPerView={1}
          spaceBetween={800}
        >
            {portfolioList.map(portfolio => (
              <SwiperSlide 
                key={portfolio.id} 
                tag="li" 
                className='Portfolio__swiper-slide'
              >
              <img 
                src={portfolio.imgUrl} 
                alt="" 
                className={cn(
                  'Portfolio__swiper-image',
                  {'Section--dark-theme-shadow': isDarkTheme},
                )}
              />
              <div className='Portfolio__swiper-text'>
                <h3 className={cn(
                  'Portfolio__swiper-header',
                  {"Section--dark-theme": isDarkTheme},
                )}>
                  {portfolio.portfolioName}
                </h3>
                <p className='Portfolio__swiper-description'>{portfolio.portfolioDescription}</p>
                <Link 
                  to="demo" 
                  className="Portfolio__swiper-link" 
                  target="_blanc"
                >
                  Demo
                </Link>
              </div>
              </SwiperSlide>
            ))}
            <div className="Portfolio__swiper-pagination"></div>
            <div className="Portfolio__swiper-next-button"></div>
            <div className="Portfolio__swiper-prev-button"></div>
        </Swiper>
      </div>
  )
}