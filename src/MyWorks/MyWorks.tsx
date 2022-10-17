import React from 'react';
import s from './MyWorks.module.css'
import ccc from './foto/foto_1.gif'

const MyWorks = () => {
    return (
        <section className="sectionWrapper">
            <h1 className="sectionTitle">My Works</h1>
            <div className="container">

                <ul className={s.AllWrapper}>
                    <li className={s.singleCardWrapper}>
                        <a href="#" >
                            <img src={ccc} alt="photo-1"/>
                            <span>Project Name</span>
                        </a>
                    </li>
                    <li className={s.singleCardWrapper}>
                        <a href="#" >
                            <img src={ccc} alt="photo-1"/>
                            <span>Project Name</span>
                        </a>
                    </li>
                    <li className={s.singleCardWrapper}>
                        <a href="#" >
                            <img src={ccc} alt="photo-1"/>
                            <span>Project Name</span>
                        </a>
                    </li>
                    <li className={s.singleCardWrapper}>
                        <a href="#" >
                            <img src={ccc} alt="photo-1"/>
                            <span>Project Name</span>
                        </a>
                    </li>


                </ul>
            </div>
        </section>
    );
};

export default MyWorks;