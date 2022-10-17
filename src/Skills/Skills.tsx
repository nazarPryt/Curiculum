import React from 'react';
import s from './Skills.module.css'
import ReactIm from '../Footer/icons/instagram.svg'

const Skills = () => {
    return (
        <section className={'sectionWrapper'}>
            <h2 className={'sectionTitle'}>Skills</h2>
            <div className={'container'}>
                <ul className={s.skillsWrapper}>

                    <li className={s.skillItem}>
                        <img src={ReactIm} alt="React-icon"/>
                        <span className={s.skill}>HTML/CSS</span>
                    </li>
                    <li className={s.skillItem}>
                        <img src={ReactIm} alt="React-icon"/>
                        <span className={s.skill}>JavaScript</span>
                    </li>
                    <li className={s.skillItem}>
                        <img src={ReactIm} alt="React-icon"/>
                        <span className={s.skill}>TypeScript</span>
                    </li>
                    <li className={s.skillItem}>
                        <img src={ReactIm} alt="React-icon"/>
                        <span className={s.skill}>React</span>
                    </li>
                    <li className={s.skillItem}>
                        <img src={ReactIm} alt="React-icon"/>
                        <span className={s.skill}>Redux</span>
                    </li>
                    <li className={s.skillItem}>
                        <img src={ReactIm} alt="React-icon"/>
                        <span className={s.skill}>...</span>
                    </li>
                    <li className={s.skillItem}>
                        <img src={ReactIm} alt="React-icon"/>
                        <span className={s.skill}>...</span>
                    </li>
                    <li className={s.skillItem}>
                        <img src={ReactIm} alt="React-icon"/>
                        <span className={s.skill}>...</span>
                    </li>

                </ul>
            </div>
        </section>
    );
};

export default Skills;