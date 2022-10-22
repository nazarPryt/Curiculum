import React from 'react';
import s from './Footer.module.css';
import facebook from './icons/facebook.svg';
import github from './icons/github.svg';
import instagram from './icons/instagram.svg';
import linkedin from './icons/linkedin.svg';
import arrowUp from './icons/arrow-up.svg'


const Footer = () => {
    return (
        <footer className={s.footerWrap}>
            <div className={'container'}>
                <nav className={s.nav}>
                    <a href="#"><img className={s.icon} src={facebook} alt="facebook-icon"/></a>
                    <a href="#"><img className={s.icon} src={github} alt="github-icon"/></a>
                    <a href="#"><img className={s.icon} src={instagram} alt="instagram-icon"/></a>
                    <a href="#"><img className={s.icon} src={linkedin} alt="linkedin-icon"/></a>
                </nav>
                <p className={s.copyright}>Copyright © <time dateTime="2022">2022</time> All rights reserved by
                    <span className={s.myName}> Nazar Prytuliak</span>. Built with love in Italy :)
                </p>
                {/*<a href="#" className={s.arrowUp}><img className={s.icon} src={arrowUp} alt="arrow-up-icon"/></a>*/}
                <a href="#" className={s.arrowLink}>
                    <div className={s.arrowUPs}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </a>

            </div>
        </footer>
    );
};

export default Footer;