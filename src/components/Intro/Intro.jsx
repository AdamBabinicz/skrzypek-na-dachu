import React, { useState } from "react";
import "./Intro.css";
import img from "../../assets/1.png";
import img1 from "../../assets/1.svg";
import img2 from "../../assets/9.png";
import { FaPinterestP, FaFacebookF, FaTwitter } from "react-icons/fa";
import img3 from "../../assets/10.png";
import img4 from "../../assets/4.svg";
import img5 from "../../assets/3.svg";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import Modal from "../Portal/Modal";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div className="intro" id="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "var(--blueCard)" : "" }}>
            Skrzypek
          </span>
          <span>na dachu</span>
          <span style={{ color: darkMode ? "var(--blueCard)" : "" }}>
            Przedstawienie zdobyło dziewięć nagród Tony, zaowocowało pięcioma
            wznowieniami na Broadwayu, adaptacją filmową z 1971 roku,
            kilkudziesięcioma wystawieniami w Polsce oraz dziesiątkami adaptacji
            w innych językach.
          </span>
        </div>
        <button className="button i-button" onClick={() => Toggle()}>
          Więcej
        </button>
        <Modal
          show={modal}
          close={Toggle}
          title="'Skrzypek na dachu' - arcydzieło sztuki musicalowej"
        >
          <p>
            Musical bazuje na powieści Szolema Alejchema z 1894 roku "Dzieje
            Tewji Mleczarza", lecz nie jest jego wierną adaptacją. Twórca
            libretta Joseph Stein wykorzystał w spektaklu jedynie główne wątki
            dzieła, takie jak problemy rodzinne Tewjego oraz motyw wypędzenia
            Żydów z miasta. Tytuł "Skrzypek na dachu" natomiast – jak podaje
            amerykanista Stephen J. Whitfield w swoim artykule "Fiddling with
            Sholem Alcheim. A history of «Fiddler on the Roof»"– nawiązuje do
            obrazów impresjonisty Marca Chagalla "The Fiddler" z 1912 roku i
            "Green Violonist" z 1924.
          </p>
          <br />
          <p>
            <em>
              www.polskieradio.pl/39/156/Artykul/2811622,Skrzypek-na-dachu-arcydzielo-sztuki-musicalowej
            </em>
          </p>
        </Modal>
        <div className="i-icons">
          <a
            href="//www.facebook.com/groups/679118292154219"
            target="_blank"
            rel="noopener noreferer"
          >
            <FaFacebookF />
          </a>
          <a
            href="//mobile.twitter.com/tvp_kultura/status/707853680016543744"
            target="_blank"
            rel="noopener noreferer"
          >
            <FaTwitter />
          </a>
          <a
            href="//pl.pinterest.com/teatrmuzyczny/skrzypek-na-dachu-fot-micha%C5%82-matuszak"
            target="_blank"
            rel="noopener noreferer"
          >
            <FaPinterestP />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={img} alt="..." />
        <img src={img1} alt="..." />
        <motion.img
          initial={{ left: "-46%" }}
          whileInView={{ left: "46%" }}
          transition={transition}
          src={img2}
          alt="..."
        />
        <motion.div
          initial={{ left: "-10%" }}
          whileInView={{ left: "30%" }}
          transition={transition}
          className="i-d"
        >
          <img src={img5} alt="..." />
          <span className="i-t">
            Cały dzień bym biddy, <br />
            biddy bum <br /> Gdybym ja był wielki pan.
          </span>
        </motion.div>
        <motion.div
          initial={{ top: "-6%", left: "74%" }}
          whileInView={{ left: "-10%" }}
          transition={transition}
          className="i-floating"
        >
          <FloatingDiv image={img3} txt1="Gdybym" txt2="był bogaczem ..." />
        </motion.div>
        <motion.div
          initial={{ top: "68%", left: "-64%" }}
          whileInView={{ left: "-40%" }}
          transition={transition}
          className="floating-div"
          // style={{ top: "24rem", left: "-40%" }}
        >
          <FloatingDiv
            image={img4}
            txt1="Dejdel didel dejdel"
            txt2="Digu digu didel, dejdel dum ..."
          />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;

// https://histmag.org/Sztetl-czyli-skad-sie-wziela-Anatewka-10430
