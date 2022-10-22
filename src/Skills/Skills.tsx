import React from 'react';
import s from './Skills.module.css'
import git from './icons/git.svg'
import antDesign from './icons/ant-design.svg'
import html from './icons/html5.svg'
import javaScript from './icons/javascript.svg'
import materialUi from './icons/material-ui.svg'
import postman from './icons/postman.svg'
import react from './icons/react.svg'
import redux from './icons/redux.svg'
import typeScript from './icons/typescript.svg'

const Skills = () => {
    return (
        <section className={'sectionWrapper'}>
            <h2 className={'sectionTitle'}>Skills</h2>
            <div className={'container'}>
                <ul className={s.skillsWrapper}>

                    <li className={s.skillItem}>
                        <img src={html} alt="html/css"/>
                        <span className={s.skill}>HTML/CSS</span>
                    </li>
                    <li className={s.skillItem}>
                        <img src={javaScript} alt="JavaScript"/>
                        <span className={s.skill}>JavaScript</span>
                    </li>
                    <li className={s.skillItem}>
                        <img src={typeScript} alt="TypeScript"/>
                        <span className={s.skill}>TypeScript</span>
                    </li>
                    <li className={s.skillItem}>
                        <img src={react} alt="React-icon"/>
                        <span className={s.skill}>React</span>
                    </li>
                    <li className={s.skillItem}>
                        <img src={redux} alt="Redux-icon"/>
                        <span className={s.skill}>Redux</span>
                    </li>
                    <li className={s.skillItem}>
                        <img src={postman} alt="Postman-icon"/>
                        <span className={s.skill}>Postman</span>
                    </li>
                    <li className={s.skillItem}>
                        <img src={git} alt="Git-icon"/>
                        <span className={s.skill}>Git/GitHub</span>
                    </li>
                    <li className={s.skillItem}>
                        <img src={antDesign} alt="AntDesign-icon"/>
                        <span className={s.skill}>Ant Design</span>
                    </li>
                    <li className={s.skillItem}>
                        <img src={materialUi} alt="MaterialUi-icon"/>
                        <span className={s.skill}>Material UI</span>
                    </li>

                </ul>
            </div>
        </section>
    );
};

export default Skills;