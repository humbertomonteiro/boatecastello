import "./carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

register();

export default function Carousel() {
  return (
    <article data-aos="fade-up" className="container-carousel">
      <Swiper pagination={true} autoplay>
        <SwiperSlide>
          <img src={require("../../assets/imgs/slide-1.png")} alt="slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("../../assets/imgs/slide-2.png")} alt="slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("../../assets/imgs/slide-3.png")} alt="slide 3" />
        </SwiperSlide>
      </Swiper>
    </article>
  );
}
