import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img from "../../assets/1.jfif";
import img1 from "../../assets/1.webp";
import img2 from "../../assets/2.jfif";
import img3 from "../../assets/2.jpg";
import img4 from "../../assets/3.jpg";
import img5 from "../../assets/3.webp";
import img6 from "../../assets/4.jfif";
import img7 from "../../assets/4.webp";
import img8 from "../../assets/5.jpg";
import img9 from "../../assets/6.webp";
import img10 from "../../assets/9.jpg";
import img11 from "../../assets/10.jpg";
import img12 from "../../assets/11.jpg";
import img13 from "../../assets/12.jpg";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      <span style={{ color: darkMode ? "var(--blueCard)" : "" }}>Kadry</span>
      <span>ze sztuk, musicali i filmów</span>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={img} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img10} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img11} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img12} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img13} alt="..." />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
