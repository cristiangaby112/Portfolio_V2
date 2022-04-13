import React from "react";
import { Link } from "react-scroll";
import s from "./NavBar.module.css";
import { FaDownload } from "react-icons/fa";
const NavBar = () => {
  return (
    <div className={s.container_navbar}>
      <div className={s.inicio}>
        <Link to="inicio" smooth={true} className={s.link}>
          Inicio
        </Link>
      </div>
      <div className={s.rutas}>
        <Link to="skills" smooth={true} duration={1000} className={s.link}>
          Skills
        </Link>

        <Link to="proyectos" smooth={true} className={s.link}>
          Proyectos
        </Link>

        <Link to="contactame" smooth={true} className={s.link}>
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
