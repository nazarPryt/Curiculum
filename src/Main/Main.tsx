import React from 'react';
import Nav from "./Nav";
import s from './Main.module.css'
import Button from "./Button";
import bg from './mainBg.jpg'

const Main = () => {
    return (
        <div className={s.mainWrap}>
            <div className={s.bgPhoto}><img src={bg} alt=""/></div>
            <div className='container'>
                <Nav/>
                <div className={s.textWrap}>
                    <div className={s.profession}>FREELANCE DEVELOPER</div>
                    <h1 className={s.myName}>I’m Nazar Prytuliak</h1>
                    <span>React Developer</span>
                    <p>based in Italy</p>
                    <Button btnName={'DOWNLOAD CV'} goTo={'#'}/>
                </div>
            </div>
        </div>
    );
};

export default Main;