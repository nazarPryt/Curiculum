import React from 'react';
import s from './ContactMe.module.css'


const ContactMe = () => {
    return (
        <section className={'sectionWrapper'}>
            <h2 className={'sectionTitle'}>Contact</h2>
                <form action="#" className={s.formWrapper}>
                    <input type="text" placeholder={'Your Name'} required className={s.input}/>
                    <input type="email" placeholder={'Email'} required className={s.input}/>
                    <textarea required className={`${s.textArea} ${s.input}`} placeholder={'Message...'} aria-required></textarea>
                    <button className={s.button}>send message</button>
                </form>
        </section>
    );
};

export default ContactMe;