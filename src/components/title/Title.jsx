import React from 'react';
import s from './Title.module.css'

const Title = ({title}) => {
  return (
      <div className={s.container_title}>
        <h1>{title}</h1>
      </div>
  )
}

export default Title