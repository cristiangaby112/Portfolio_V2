import React from 'react';
import s from './SkillCard.module.css'

const SkillCard = ({image, name}) => {
  return (
    <div>
      <div className={s.container_skill}>
          <div className={s.container_img}>
            <img src={image} alt="img not found" width="110px" height="110px"/>
          </div>
          <p>{name}</p>
        </div>
    </div>
  )
}

export default SkillCard