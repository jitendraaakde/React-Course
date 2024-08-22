import Display from "./Display"
import Button from "./Button"
import styles from './Container.module.css'
import { useState } from "react";

function Container() {
    const calButtons = [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        '+', '-', '*', '/',
        '=', '.',
        'C'
    ];
    const [calVal, setCalVal] = useState('');
    const onClickUser = (val) => {
        if (val === 'C') {
            setCalVal('')
        } else if (val === '=') {
            setCalVal(eval(calVal))
        } else {
            setCalVal(calVal + val)
        }
    }


    return <div className={styles['container']}>
        <Display val={calVal}></Display>
        <div className={styles['con-button']}>
            {calButtons.map((val) => {
                return <Button val={val} onClickUser={() => onClickUser(val)} ></Button>
            })}
        </div>
    </div >
}
export default Container