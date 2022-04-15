import React from 'react';
import Title from '../../components/title/Title';
import Formulario from '../../components/Formulario/Formulario';
import s from './Contacto.module.css'


const Contacto = () => {
  
  return(
    <div id='contactame' className={s.container_contacto}>
      <Title title={'Contactame'} />
      <Formulario />
    </div>
  )
}

export default Contacto