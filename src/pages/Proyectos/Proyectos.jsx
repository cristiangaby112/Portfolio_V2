import React, { Fragment } from 'react'
import Title from '../../components/title/Title';
import s from './Proyectos.module.css';
import ProyectoCard from '../../components/ProyectoCard/ProyectoCard';
import dataProyectos from './dataProyectos'

const Proyectos = () => {
  return (
    <div className={s.container_proyectos} id="proyectos">
      <Title title={"Proyectos"} />
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