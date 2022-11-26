import React from 'react';
import Title from '../../components/title/Title';
import Formulario from '../../components/Formulario/Formulario';
import s from './Contacto.module.css';
import { useTranslation } from 'react-i18next';


const Contacto = () => {
  const { t } = useTranslation("translation");

  return(
    <div id='contactame' className={s.container_contacto}>
      <Title title={t('Contactame')} />
      <Formulario />
    </div>
  )
}

export default Contacto