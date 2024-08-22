import { useState } from "react";

function Count() {
    const [word, setWord] = useState('Hii')
    const handleInput = (e) => {
        setWord(e.target.value)
    }
    return <>
        <input type="text" onKeyDown={handleInput} />
        <p>{word}</p>
    </>
}

export default Count;
