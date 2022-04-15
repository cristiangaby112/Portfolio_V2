import React from 'react';
import s from './TituloCard.module.css'

const TituloCard = ({image, name}) => {
  return (
    <div className={s.container_titulo}>
      <div className={s.container_img}>
        <img alt="imagen not found" src={image} height = '300px'  />
      </div>
      <h2>{name}</h2>
    </div>
  )
}

export default TituloCard