import React, { Fragment } from 'react';
import s from './Skills.module.css';
import SkillCard from '../../components/skillCard/SkillCard';
import dataSkills from './dataSkills';
import Title from '../../components/title/Title';

const Skills = () => {
  return (
    <div id="skills" className= {s.container_skills_title}>
      <Title title={"Habilidades"}/>
      <div className={s.container_skills}>
        {
          dataSkills?.map(skill => {
            return (
              <Fragment key= {skill.id}>
                <SkillCard image={skill.imagen} name={skill.nombre}/>
              </Fragment>
            );
          })
        }
      </div>
      
    </div>
  )
}

export default Skills