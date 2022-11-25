import React from 'react';
import s from './Home.module.css';
import fotoperfil from '../../asset/img/fotoperfil2.png';
import Typical from 'react-typical';
import {BsGithub, BsLinkedin, BsWhatsapp} from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("translation");

  return (
    <div id="inicio" className={s.container_home}>
      <div className={s.container_img}>
        <img src={fotoperfil} alt="foto" width="400px" height="400px" />
      </div>
      <div className={s.container_texto}>
        <h1>{t('Home.Hola, Yo Soy')} <span className={s.minombre}>Cristian Barriento</span></h1>
        <h2>
          <Typical
            steps={[
              "Full Stack Web Developer 🚀",
              2500,
              "Back-End Developer 💻",
              2500,
              "Front-End Developer 🖥️",
              2500
            ]}
            loop={Infinity}
          />
        </h2>
      <div className={s.container_icon}>
        <div className={s.subcontainer_icon}>
          <a className= {s.a} href="https://github.com/cristiangaby112"><BsGithub /></a>
        </div>
        <div className={s.subcontainer_icon}>
          <a className= {s.a} href= "https://www.linkedin.com/in/barriento-cristian/"><BsLinkedin /></a>
        </div>
        <div className={s.subcontainer_icon}>
          <a className= {s.a} href="https://wa.me/541122993795"><BsWhatsapp /></a>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Home;