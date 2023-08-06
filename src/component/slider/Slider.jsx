import React from 'react'
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/navigation/navigation.min.css';
import { path } from '../../data/fdata';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import './Slider.css'
import image1 from "../../component/slider/banner.webp"
import image2 from "../../component/slider/ban.png"

const Slider = () => {
    SwiperCore.use([Autoplay, Navigation]);
  return (
    <>
    <div className="hero_slider">
      <Swiper
          modules={[Autoplay, Navigation]}
          grabCursor={true}
          spaceBetween={5}
          slidesPerView={'auto'}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
          <SwiperSlide>
              <NavLink to="/product/123" className="banar_link">
                <div className="banar__slider">
                  <img src={image2} alt="" />
                </div>
              </NavLink>
          </SwiperSlide>

            <SwiperSlide>
              <NavLink to="/product/123" className="banar_link">
                <div className="banar__slider">
                  <img src={`${path}/image/banar2.webp`} alt="" />
                </div>
              </NavLink>
            </SwiperSlide>

            <SwiperSlide>
              <NavLink to="/product/123" className="banar_link">
                <div className="banar__slider">
                  <img src={`${path}/image/banar1.webp`} alt="" />
                </div>
              </NavLink>
            </SwiperSlide>

            <SwiperSlide>
              <NavLink to="/product/123" className="banar_link">
                <div className="banar__slider">
                  <img src={image1} alt="" />
                </div>
              </NavLink>
            </SwiperSlide>

          </Swiper>
        </div>
    </>
  )
}

export default Slider