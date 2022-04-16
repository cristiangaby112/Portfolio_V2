import React, { useState } from "react";
import { Link } from "react-scroll";
import s from "./NavBar.module.css";
import { FaDownload, FaBars } from "react-icons/fa";
const NavBar = () => {
  const [visible, setVisible] = useState(false);
  console.log(visible);
  const toggleMenu = () => {
    setVisible(!visible);
    console.log(visible);
  }

  return (
    <div className={s.container_navbar}>
      <button className={s.nav_toggle} onClick= {toggleMenu}><FaBars/></button>
      <div className={s.inicio}>
        <Link to="inicio" smooth={true} className={s.link} >
          Inicio
        </Link>
      </div>
      <div className={`${s.rutas} ${visible && s.nav_menu_visible}`}>
        <Link to="skills" smooth={true} duration={1000} className={s.link} onClick={toggleMenu}>
          Skills
        </Link>

        <Link to="proyectos" smooth={true} className={s.link}  onClick={toggleMenu}>
          Proyectos
        </Link>

        <Link to="titulos" smooth={true} className={s.link}  onClick={toggleMenu}>
          Titulos
        </Link>

        <Link to="contactame" smooth={true} className={s.link}  onClick={toggleMenu}>
          Contactame
        </Link>

        <a
          className={s.a}
          href="https://drive.google.com/uc?id=1QFUk5iYkDLUAVE218Xn6eiTqviCKXMWx&export=download"
          download="Barriento_CV.pdf"
        >
          Curriculum{" "}
          <div>
            <FaDownload className={s.icon} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
