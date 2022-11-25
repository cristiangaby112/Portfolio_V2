import React, { useState } from "react";
import { Link } from "react-scroll";
import s from "./NavBar.module.css";
import { FaDownload, FaBars } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import ButtonTranslation from "../Button/ButtonTranslation";


const NavBar = () => {
  const { t } = useTranslation("translation");
  const [visible, setVisible] = useState(false);
  const [background, setBackground] = useState(false)
  console.log(visible);
  const toggleMenu = () => {
    setVisible(!visible);
    console.log(visible);
  }


  // const change = (color) => {
  //   document.body.style.background = color;
  // }

  // const gfg= () =>{
  //   setBackground(!background)
  //   change(background ? '#1d0e11' : '#ffffff');
  // }

  return (
    <div className={`${s.container_navbar} ${background && s.changeColor}`}>
      <button className={s.nav_toggle} onClick= {toggleMenu}><FaBars/></button>
      <div className={s.inicio}>
        <Link to="inicio" smooth={true} className={`${s.link} ${background && s.linkChange}`} >
          {t('Nav_container.Inicio')}
        </Link>
      </div>
      <div className={`${s.rutas} ${visible && s.nav_menu_visible}`}>
        <Link to="skills" smooth={true} duration={1000} className={`${s.link} ${background && s.linkChange}`} onClick={toggleMenu}>
        {t('Nav_container.Habilidades')}
        </Link>

        <Link to="proyectos" smooth={true} className={`${s.link} ${background && s.linkChange}`}  onClick={toggleMenu}>
        {t('Nav_container.Proyectos')}
        </Link>

        <Link to="titulos" smooth={true} className={`${s.link} ${background && s.linkChange}`}  onClick={toggleMenu}>
        {t('Nav_container.Titulos')}
        </Link>

        <Link to="contactame" smooth={true} className={`${s.link} ${background && s.linkChange}`}  onClick={toggleMenu}>
        {t('Nav_container.Contactame')}
        </Link>

        <a
          className={`${s.a} ${background && s.linkChange}`}
          href="https://drive.google.com/uc?id=1QFUk5iYkDLUAVE218Xn6eiTqviCKXMWx&export=download"
          download="Barriento_CV.pdf"
        >
        {t('Nav_container.Curriculum')}{" "}
          <div>
            <FaDownload className={`${s.icon} ${background && s.linkChange}`} />
          </div>
        </a>
      </div>
      <div className={s.ButtonTranslation}>
        <ButtonTranslation idioma="EN"/>
        <ButtonTranslation idioma="ES"/>
      </div>
      {/* <button onClick={gfg}>cambio</button> */}
    </div>
  );
};

export default NavBar;

