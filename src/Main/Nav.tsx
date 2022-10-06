import React from 'react';
import s from './Nav.module.css'
import Button from "./Button";
import Switcher from "./Switcher";


const Nav = () => {
    return (
        <nav className={s.navWrapper}>
            <ul className={s.navList}>
                <li className={s.navLink}><a href="#">Home</a></li>
                <li className={s.navLink}><a href="#">About</a></li>
                <li className={s.navLink}><a href="#">Services</a></li>
                <li className={s.navLink}><a href="#">Portfolio</a></li>
                <li className={s.navLink}><a href="#">Pricing</a></li>
                <li className={s.navLink}><a href="#">Blog</a></li>
                <li className={s.navLink}><a href="#">Contact</a></li>
            </ul>
            <div className={s.navRight}>
                <Switcher/>
                <Button btnName={'Contact me'} goTo={'#'}/>
            </div>

        </nav>
    );
};

export default Nav;