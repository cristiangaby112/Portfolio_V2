import React from "react";
import s from "./ProyectoCard.module.css";
import { useTranslation } from "react-i18next";

const ProyectoCard = ({
  video,
  infoVideo,
  linkGithub,
  iconGithub,
  linkWeb,
}) => {
  const { t } = useTranslation("translation");

  return (
    <div className={s.container_proyectoCard}>
      <div className={s.container_video}>
        <iframe
          className={s.video}
          src={video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className={s.texto_container}>
        <p className={s.texto}>{infoVideo}</p>
      </div>
      <div className={s.container_icons}>
        <a className={s.a} href={linkGithub}>
          {iconGithub} {t('Container_Proyectos.Codigo')}
        </a>
        {linkWeb && (
          <a className={s.a} href={linkWeb}>
            Web
          </a>
        )}
      </div>
    </div>
  );
};

export default ProyectoCard;
