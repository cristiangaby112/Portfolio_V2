import React, { Fragment } from 'react';
import Title from '../../components/title/Title';
import s from './Titulo.module.css';
import dataTitulos from './dataTitulos';
import TituloCard from '../../components/TituloCard/TituloCard';
import { useTranslation } from 'react-i18next';

const Titulos = () => {
  const { t } = useTranslation("translation");

  return (
    <div id='titulos' className={s.container_titulos_name}>
      <Title title= {t('Titulos')} />
      <div className={s.subcontainer_titulos}>
        {
          dataTitulos?.map(t => {
            return (
              <Fragment key={t.id}>
                <TituloCard image={t.imagen} name={t.nombre} />
              </Fragment>
            )
          })
        }
      </div>
    </div>
  )
}

export default Titulos