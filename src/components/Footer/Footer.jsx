import React from "react";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import s from "./Footer.module.css";
import {useTranslation} from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("translation");


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
        <p>{t('Footer.p1')}</p>
        <p>cristiangabrielbarriento@outlook.com</p>
        <p>{t('Footer.p2')}</p>
      </div>
    </div>
  );
};

export default Footer;
