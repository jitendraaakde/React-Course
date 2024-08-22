import Item from "./Item";
import styles from './Container.module.css';
import { useState } from "react";

function Container() {
    const [fruit, setFruit] = useState(['banana', 'mango', 'lichi']);
    const handleChange = (event) => {
        if (event.key === 'Enter') {
            setFruit([...fruit, event.target.value])
            event.target.value = ''
        }
    };
    return (
        <div className={styles.container}>
            <label htmlFor="fruit-input">Add fruit</label>
            <input type="text"
                id="fruit-input"
                onKeyDown={handleChange}
            />
            <ul className="list-group m-4">
                {fruit.map((val) => (
                    <Item val={val} />
                ))}
            </ul>
        </div>
    );
}

export default Container;
