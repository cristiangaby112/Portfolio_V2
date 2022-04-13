import React from 'react';
import html from '../../asset/img/html.png';
import css from '../../asset/img/css3.png';
import express from '../../asset/img/express.png';
import git from '../../asset/img/git.png';
import boopstrap from '../../asset/img/boopstrap.png';
import javascript from '../../asset/img/javascripts.png';
import mongo from '../../asset/img/mongo.png';
import node from '../../asset/img/node.png';
import postgresql from '../../asset/img/postgresql.png';
import react from '../../asset/img/react.png';
import redux from '../../asset/img/redux.png';
import sequelize from '../../asset/img/sequelize.png';
import s from './Skills.module.css';

const Skills = () => {
  return (
    <div id="skills" className= {s.container_skills_title}>
      <div className={s.container_title}>
        <h1>Skills</h1>
      </div>
      <div className={s.container_skills}>
        <div className={s.container_skill}>
          <div className={s.container_img}>
            <img src={html} alt="img not found" width="110px" height="110px"/>
          </div>
          <p>HTML</p>
        </div>
        <div className={s.container_skill}>
          <div className={s.container_img}>
            <img src={css} alt="img not found" width="120px" height="110px"/>
          </div>
          <p>CSS</p>
        </div>
        <div className={s.container_skill}>
          <div className={s.container_img}>
            <img src={express} alt="img not found" width="120px" height="110px"/>
          </div>
          <p>Express</p>
        </div>
        <div className={s.container_skill}>
          <div className={s.container_img}>
            <img src={git} alt="img not found" width="110px" height="110px"/>
          </div>
          <p>Git</p>
        </div>
        <div className={s.container_skill}>
          <div className={s.container_img}>
            <img src={boopstrap} alt="img not found" width="110px" height="110px"/>
          </div>
          <p>Bootstrap</p>
        </div>
        <div className={s.container_skill}>
          <div className={s.container_img}>
            <img src={javascript} alt="img not found" width="110px" height="110px"/>
          </div>
          <p>Javascript</p>
        </div>
        <div className={s.container_skill}>
          <div className={s.container_img}>
            <img src={mongo} alt="img not found" width="110px" height="110px"/>
          </div>
          <p>MongoDB</p>
        </div>
        <div className={s.container_skill}>
          <div className={s.container_img}>
            <img src={node} alt="img not found" width="110px" height="110px"/>
          </div>
          <p>NodeJS</p>
        </div>
        <div className={s.container_skill}>
          <div className={s.container_img}>
            <img src={postgresql} alt="img not found" width="110px" height="110px"/>
          </div>
          <p>ProtgreSQL</p>
        </div>
        <div className={s.container_skill}>
          <div className={s.container_img}>
            <img src={react} alt="img not found" width="110px" height="110px"/>
          </div>
          <p>ReactJS</p>
        </div>
        <div className={s.container_skill}>
          <div className={s.container_img}>
            <img src={redux} alt="img not found" width="110px" height="110px"/>
          </div>
          <p>Redux</p>
        </div>
        <div className={s.container_skill}>
          <div className={s.container_img}>
            <img src={sequelize} alt="img not found" width="110px" height="110px"/>
          </div>
          <p>Sequelize</p>
        </div>
      </div>
      
    </div>
  )
}

export default Skills