import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/2.webp";
import img2 from "../../assets/4.jpg";
import img3 from "../../assets/5.webp";
import img4 from "../../assets/6.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Testimonial = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const clients = [
    {
      img: img1,
      review:
        "Musical „Skrzypek na dachu” zrobił na mnie ogromne wrażenie. Bardzo podobała mi się gra aktorska oraz ład i porządek na scenie. Ściśle dopracowana choreografia oddała kulturę i tradycję żydowską, którą poznałem, oglądając ten spektakl. Zachęcam wszystkich, aby zobaczyli to przedstawienie, gdyż w życiu każdego człowieka nie jest ważne tylko to, co mamy w chwili obecnej. Ważne jest poczucie wspólnoty i przywiązanie do tradycji.",
      author: "Hubert Popis, kl. 1E",
    },
    {
      img: img2,
      review:
        "Niebywały sukces spektaklu to wynik współpracy kilku artystów: kompozytora Jerry’ego Bocka, librecisty Josepha Steina oraz autora tekstów piosenek Sheldona Harnicka. Libretto oparte zostało na opowiadaniach Szolema Alejchema, ukraińskiego pisarza żydowskiego pochodzenia, tworzącego na przełomie XIX i XX wieku. Zaadaptowane na potrzeby sceny Dzieje Tewjego Mleczarza stały się uniwersalną opowieścią o przewrotności ludzkiego losu oraz poszukiwaniu szczęścia i bogactwa, których źródłem okazuje się rodzina i tradycja.",
      author: "Magdalena Figzał-Janikowska",
    },
    {
      img: img3,
      review:
        "„Skrzypek na dachu” to tak naprawdę opowieść o każdym. Każdy ma w sobie Tewjego, który „dzień po dniu na dom zarabiać musi”, a po cichu marzy, by „być bogaczem”. Każdy w trudnych chwilach w duchu modli się, by Bóg „zechciał sprawić cud”. Każdy obserwuje życie i nie pojmuje, „jak się dzisiaj zmienia świat”. I każdy równie mocno jak Tewje marzy o tym, by szczęśliwie żyć. Te wszystkie elementy właściwie przesądzają o tym, że „Skrzypek na dachu” jest skazany na sukces.",
      author: "Martyna Pietras",
    },
    {
      img: img4,
      review:
        "Wraz z izraelskim aktorem Chaimem Topolem stworzyli niezapomnianą wizję małej Anatewki - miejscowości w carskiej Rosji, w której żydowska społeczność od lat żyje zajęta swoimi problemami, zamknięta na obcych i ich sprawy. Głównym oparciem w życiu zacnego, ale i niepozbawionego wad Tewje Mleczarza jest tradycja, której nakazy coraz częściej kłócą się z otaczającym go światem. [...], ojcu przyjdzie wybierać pomiędzy zwyczajami przodków a miłością do córek.",
      author: "Maria Szilagyi",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span style={{ color: darkMode ? "var(--blueCard)" : "" }}>
          Kto i co
        </span>
        <span> powiedział</span>
        <span> o ...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="..." />
                <span style={{ color: darkMode ? "var(--blueCard)" : "" }}>
                  {client.review}
                </span>
                <span style={{ color: darkMode ? "var(--blueCard)" : "" }}>
                  {" "}
                  {client.author}
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
