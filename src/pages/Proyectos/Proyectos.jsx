import React, { Fragment } from 'react'
import Title from '../../components/title/Title';
import s from './Proyectos.module.css';
import ProyectoCard from '../../components/ProyectoCard/ProyectoCard';
// import dataProyectos from './dataProyectos'
import { useTranslation } from "react-i18next";
import { BsGithub } from "react-icons/bs";

const Proyectos = () => {
  const { t } = useTranslation("translation");

  const dataProyectos = [
    {
      id: 1,
      video: 'https://www.youtube.com/embed/Bpkp3N2XEVU',
      texto: `${useTranslation().t('Container_Proyectos.Data_proyecto1')}`,
      linkGithub: 'https://github.com/cristiangaby112/PI-Countries-main',
      iconGithub: <BsGithub />,
      linkWeb: 'https://pi-countries-main.vercel.app/'
    },
    {
      id: 2,
      video: 'https://www.youtube.com/embed/DApvqOVXzkA',
      texto: `Desarrollo de un clon de Netflix utilizando React JS, Redux, CSS
      Module para la maquetacion, la obtencion de datos atraves de una
      API externa.`,
      linkGithub: 'https://github.com/cristiangaby112/Chanllenge_MoviesNexflix',
      iconGithub: <BsGithub />,
      linkWeb: 'https://nettflix-movies-app.herokuapp.com/'
    },
    {
      id: 3,
      video: 'https://www.youtube.com/embed/2hALPb1sGXM',
      texto: `Desarrollo de una App móvil para Android, "Event In", donde podrás
      consultar eventos cultutales, sociales y de interés general. Se
      puede buscar cualquier evento por nombre, filtrar por eventos u
      ordenarlos por categoria de evento, Loguarse y crear su propio
      evento pagando una tarifa por dia mediante mercado pago.
      Desarrollado con: React Native JS, Express JS, Firebase.`,
      linkGithub: 'https://github.com/cristiangaby112/EventIn',
      iconGithub: <BsGithub />,
    }
  ];

  return (
    <div className={s.container_proyectos} id="proyectos">
      <Title title={t('Container_Proyectos.Proyectos')} />
      <div className={s.container_proyecto}>
        {
          dataProyectos?.map(p => {
            return(
              <Fragment key={p.id}>
                <ProyectoCard video={p.video} infoVideo={p.texto} linkGithub={p.linkGithub} iconGithub={p.iconGithub} linkWeb={p.linkWeb} />
              </Fragment>
            )
          })
        }
      </div>
    </div>
  )
}

export default Proyectos