import React from "react";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={s.container_footer}>
      <div className={s.container_icon}>
        <div className={s.subcontainer_icon}>
          <a className={s.a} href="https://github.com/cristiangaby112">
            <BsGithub />
          </a>
        </div>
        <div className={s.subcontainer_icon}>
          <a
            className={s.a}
            href="https://www.linkedin.com/in/barriento-cristian/"
          >
            <BsLinkedin />
          </a>
        </div>
        <div className={s.subcontainer_icon}>
          <a className={s.a} href="https://wa.me/541122993795">
            <BsWhatsapp />
          </a>
        </div>
      </div>
      <div className={s.subcontainer_derechos}>
        <p>Hecho por @cristiangaby112</p>
        <p>cristiangabrielbarriento@outlook.com</p>
        <p>© 2022 - Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default Footer;
