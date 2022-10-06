import React from 'react';
import s from './Button.module.css'

type propsType = {
    btnName: string
    goTo: string
}

const Button = (props: propsType) => {
    return (
        <div><a href={props.goTo} className={s.btn}>{props.btnName}</a></div>
    );
};

export default Button;