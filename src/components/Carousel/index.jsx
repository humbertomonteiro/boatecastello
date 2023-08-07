import './carousel.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { register } from 'swiper/element/bundle'

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'

register()

export default function Carousel() {


    return (
        <article data-aos='fade-up' className='container-carousel'>
            <Swiper
            pagination={true}
            autoplay>
                <SwiperSlide>
                    <img src={require('../../assets/imgs/carousel1.png')} alt="img1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require('../../assets/imgs/carousel1.png')} alt="img1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require('../../assets/imgs/carousel1.png')} alt="img1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require('../../assets/imgs/carousel1.png')} alt="img1" />
                </SwiperSlide>
            </Swiper>
        </article>
    )
}