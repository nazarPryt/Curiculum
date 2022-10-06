import React, {useState} from 'react';
import s from './Switcher.module.css'





const Switcher = () => {

    const [on, setOn] = useState<boolean>(false)

    const onClickHandler = () => {
        setOn(!on)
    }

    return (
        <label>
            <input type="checkbox" name="checkboxName" className={s.checkbox}/>
            <div className={`${s.switch} ${on? s.switchOn:''}`} onClick={onClickHandler}></div>
        </label>
    );
};

export default Switcher;